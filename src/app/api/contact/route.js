const MIN_LENGTHS = {
	name: 2,
	message: 10,
};

const MAX_LENGTHS = {
	name: 100,
	email: 254,
	message: 5000,
};

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

function isValidContactPayload(payload) {
	return (
		payload &&
		typeof payload === "object" &&
		typeof payload.name === "string" &&
		typeof payload.email === "string" &&
		typeof payload.message === "string" &&
		payload.name.trim().length >= MIN_LENGTHS.name &&
		payload.name.length <= MAX_LENGTHS.name &&
		/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email.trim()) &&
		payload.email.length <= MAX_LENGTHS.email &&
		payload.message.trim().length >= MIN_LENGTHS.message &&
		payload.message.length <= MAX_LENGTHS.message
	);
}

function formatMessage({ name, email, message }) {
	return [
		"New portfolio contact message",
		"",
		`Name: ${name}`,
		`Email: ${email}`,
		"",
		message,
	].join("\n");
}

function getWebhookPayload(content, contact) {
	return {
		content,
		text: content,
		contact,
		source: "portfolio-contact-form",
	};
}

async function sendToDiscord(content) {
	const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
	if (!webhookUrl) return false;

	const response = await fetch(webhookUrl, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({
			username: "Portfolio Notification",
			content: content.slice(0, 2000),
			avatar_url: process.env.DISCORD_AVATAR_URL || "https://github.com/Asif-4520.png",
		}),
		cache: "no-store",
	});

	if (!response.ok) {
		throw new Error(`Discord returned ${response.status}`);
	}

	return true;
}

async function sendToTelegram(content) {
	const botToken = process.env.TELEGRAM_BOT_TOKEN;
	const chatId = process.env.TELEGRAM_CHAT_ID;
	if (!botToken || !chatId) return false;

	const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({
			chat_id: chatId,
			text: content.slice(0, 4096),
		}),
		cache: "no-store",
	});

	if (!response.ok) {
		throw new Error(`Telegram returned ${response.status}`);
	}

	return true;
}

async function sendToResend(contact) {
	const apiKey = process.env.RESEND_API_KEY;
	const fromEmail = process.env.RESEND_FROM_EMAIL;
	const toEmail = process.env.RESEND_TO_EMAIL;
	if (!apiKey || !fromEmail || !toEmail) return false;

	const response = await fetch("https://api.resend.com/emails", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${apiKey}`,
		},
		body: JSON.stringify({
			from: fromEmail,
			to: [toEmail],
			reply_to: contact.email,
			subject: `Portfolio contact from ${contact.name}`,
			text: formatMessage(contact),
		}),
		cache: "no-store",
	});

	if (!response.ok) {
		throw new Error(`Resend returned ${response.status}`);
	}

	return true;
}

async function sendToWebhook(content, contact) {
	const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
	if (!webhookUrl) return false;

	const response = await fetch(webhookUrl, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(getWebhookPayload(content, contact)),
		cache: "no-store",
	});

	if (!response.ok) {
		throw new Error(`Contact webhook returned ${response.status}`);
	}

	return true;
}

export async function POST(request) {
	let payload;

	try {
		payload = await request.json();
	} catch {
		return Response.json({ error: "Request body must be valid JSON." }, { status: 400 });
	}

	if (!isValidContactPayload(payload)) {
		return Response.json(
			{
				error: "",
			},
			{ status: 400 },
		);
	}

	try {
		const contact = {
			name: payload.name.trim(),
			email: payload.email.trim(),
			message: payload.message.trim(),
		};
		const content = formatMessage(contact);
		const results = await Promise.allSettled([
			sendToDiscord(content),
			sendToTelegram(content),
			sendToResend(contact),
			sendToWebhook(content, contact),
		]);
		const delivered = results.some(
			(result) => result.status === "fulfilled" && result.value === true,
		);
		const failures = results.filter((result) => result.status === "rejected");

		if (failures.length > 0) {
			console.error(
				"Some contact notifications failed:",
				failures.map((result) => result.reason),
			);
		}

		if (!delivered) {
			return Response.json(
				{
					error: "Message failed. Please try again.",
				},
				{ status: 502 },
			);
		}

		return Response.json({ success: true });
	} catch (error) {
		console.error("Contact notification failed:", error);
		return Response.json({ error: "Message failed. Please try again." }, { status: 502 });
	}
}
