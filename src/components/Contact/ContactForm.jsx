"use client";

import { CheckCircle2, Loader2, RotateCcw, Send } from "lucide-react";
import React, { useRef, useState } from "react";
import { pageContent } from "@/data";
import { Button } from "../ui/Button";

const FIELD_LIMITS = {
	name: { min: 2, max: 100 },
	email: { max: 254 },
	message: { min: 10, max: 5000 },
};

function validateForm(data) {
	const errors = {};
	const name = data.name.trim();
	const email = data.email.trim();
	const message = data.message.trim();

	if (!name) errors.name = "Please enter your name.";
	else if (name.length < FIELD_LIMITS.name.min) {
		errors.name = "Name must be at least 2 characters.";
	} else if (name.length > FIELD_LIMITS.name.max) {
		errors.name = "Name must be 100 characters or fewer.";
	}

	if (!email) errors.email = "Please enter your email address.";
	else if (email.length > FIELD_LIMITS.email.max) {
		errors.email = "Email must be 254 characters or fewer.";
	} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
		errors.email = "Enter a valid email address.";
	}

	if (!message) errors.message = "Please enter a message.";
	else if (message.length < FIELD_LIMITS.message.min) {
		errors.message = "Message must be at least 10 characters.";
	} else if (message.length > FIELD_LIMITS.message.max) {
		errors.message = "Message must be 5000 characters or fewer.";
	}

	return errors;
}

export function ContactForm() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const [formStatus, setFormStatus] = useState("idle"); // "idle" | "submitting" | "success" | "error"
	const [errorMessage, setErrorMessage] = useState("");
	const [fieldErrors, setFieldErrors] = useState({});
	const formRef = useRef(null);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
		setFieldErrors((prev) => {
			if (!prev[name]) return prev;
			const next = { ...prev };
			delete next[name];
			return next;
		});
		if (formStatus === "error") setFormStatus("idle");
		setErrorMessage("");
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const validationErrors = validateForm(formData);
		if (Object.keys(validationErrors).length > 0) {
			setFieldErrors(validationErrors);
			setFormStatus("error");
			setErrorMessage("");
			return;
		}

		setFormStatus("submitting");
		setErrorMessage("");
		setFieldErrors({});

		try {
			const res = await fetch("/api/contact", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});

			const result = await res.json().catch(() => ({}));

			if (res.ok && result.success) {
				setFormStatus("success");
				setFormData({ name: "", email: "", message: "" });
				setFieldErrors({});
				return;
			}

			if (result.errors) {
				setFieldErrors(result.errors);
				setErrorMessage("");
				setFormStatus("error");
				return;
			}
			throw new Error(
				result.error || "The message could not be delivered. Please try again.",
			);
		} catch (error) {
			console.error("Contact endpoint failed:", error);
			setFormStatus("error");
			setErrorMessage(
				error instanceof Error && error.message
					? error.message
					: "Could not send message right now. Please try again or email directly.",
			);
		}
	};

	return (
		<div
			data-animate="slide-up"
			className="lg:col-span-7 contact-tactical-card w-full flex flex-col justify-between p-6 sm:p-8 border border-white/15 bg-[#0a0c10]/85 backdrop-blur-xl min-h-[480px] h-full"
		>
			{(formStatus === "idle" || formStatus === "submitting" || formStatus === "error") && (
				<form
					ref={formRef}
					onSubmit={handleSubmit}
					noValidate
					className="w-full flex flex-col justify-between h-full flex-1"
				>
					{/* Form Header Bar */}
					<div className="flex items-center justify-between border-b border-white/10 pb-3.5 mb-3 select-none">
						<div className="flex items-center gap-2">
							<div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
							<span className="text-[10px] text-white/60 uppercase tracking-wider font-mono">
								SEND A MESSAGE
							</span>
						</div>

						{/* Status Indicator */}
						{formStatus === "submitting" && (
							<div className="flex items-center gap-1.5 text-accent text-xs font-mono">
								<Loader2 size={13} className="animate-spin" />
								<span>SENDING...</span>
							</div>
						)}
						{formStatus === "error" && errorMessage && (
							<div className="flex items-center gap-1.5 text-red-400 text-xs font-mono">
								<span>FAILED</span>
							</div>
						)}
					</div>

					{/* Error Alert */}
					{formStatus === "error" && errorMessage && (
						<div className="p-3 mb-2 rounded border border-red-500/40 bg-red-500/10 text-red-400 text-xs font-mono">
							{errorMessage}
						</div>
					)}

					{/* Form Inputs Container */}
					<div className="flex-1 flex flex-col space-y-4 my-2">
						<div className="relative">
							<label
								htmlFor="contact-name"
								className="block text-xs font-mono uppercase tracking-wider text-accent mb-1.5"
							>
								{pageContent.sections.contact.form.nameLabel}
							</label>
							<input
								type="text"
								id="contact-name"
								name="name"
								value={formData.name}
								onChange={handleInputChange}
								required
								minLength={FIELD_LIMITS.name.min}
								maxLength={FIELD_LIMITS.name.max}
								aria-invalid={Boolean(fieldErrors.name)}
								aria-describedby={
									fieldErrors.name ? "contact-name-error" : undefined
								}
								disabled={formStatus === "submitting"}
								placeholder={pageContent.sections.contact.form.namePlaceholder}
								className={`contact-input-polygon w-full bg-black/50 border px-4 py-3 text-xs sm:text-sm text-white placeholder-white/30 focus:outline-hidden focus:border-accent/60 transition-all disabled:opacity-50 ${fieldErrors.name ? "border-red-400/80" : "border-white/10"}`}
							/>
							{fieldErrors.name && (
								<p id="contact-name-error" className="mt-1.5 text-xs text-red-300">
									{fieldErrors.name}
								</p>
							)}
						</div>

						<div className="relative">
							<label
								htmlFor="contact-email"
								className="block text-xs font-mono uppercase tracking-wider text-accent mb-1.5"
							>
								{pageContent.sections.contact.form.emailLabel}
							</label>
							<input
								type="email"
								id="contact-email"
								name="email"
								value={formData.email}
								onChange={handleInputChange}
								required
								maxLength={FIELD_LIMITS.email.max}
								aria-invalid={Boolean(fieldErrors.email)}
								aria-describedby={
									fieldErrors.email ? "contact-email-error" : undefined
								}
								disabled={formStatus === "submitting"}
								placeholder={pageContent.sections.contact.form.emailPlaceholder}
								className={`contact-input-polygon w-full bg-black/50 border px-4 py-3 text-xs sm:text-sm text-white placeholder-white/30 focus:outline-hidden focus:border-accent/60 transition-all disabled:opacity-50 ${fieldErrors.email ? "border-red-400/80" : "border-white/10"}`}
							/>
							{fieldErrors.email && (
								<p id="contact-email-error" className="mt-1.5 text-xs text-red-300">
									{fieldErrors.email}
								</p>
							)}
						</div>

						<div className="relative flex-1 flex flex-col">
							<label
								htmlFor="contact-message"
								className="block text-xs font-mono uppercase tracking-wider text-accent mb-1.5"
							>
								{pageContent.sections.contact.form.messageLabel}
							</label>
							<textarea
								name="message"
								id="contact-message"
								value={formData.message}
								onChange={handleInputChange}
								required
								minLength={FIELD_LIMITS.message.min}
								maxLength={FIELD_LIMITS.message.max}
								aria-invalid={Boolean(fieldErrors.message)}
								aria-describedby={
									fieldErrors.message ? "contact-message-error" : undefined
								}
								disabled={formStatus === "submitting"}
								placeholder={pageContent.sections.contact.form.messagePlaceholder}
								className={`contact-input-polygon w-full flex-1 min-h-[150px] bg-black/50 border px-4 py-3.5 text-xs sm:text-sm text-white placeholder-white/30 focus:outline-hidden focus:border-accent/60 transition-all resize-none disabled:opacity-50 ${fieldErrors.message ? "border-red-400/80" : "border-white/10"}`}
							/>
							{fieldErrors.message && (
								<p
									id="contact-message-error"
									className="mt-1.5 text-xs text-red-300"
								>
									{fieldErrors.message}
								</p>
							)}
						</div>
					</div>

					<Button
						type="submit"
						variant="primary"
						shape="chamfer"
						size="lg"
						icon={formStatus === "submitting" ? Loader2 : Send}
						iconPosition="left"
						disabled={formStatus === "submitting"}
						className="w-full mt-3 disabled:opacity-70"
					>
						{formStatus === "submitting"
							? "SENDING MESSAGE..."
							: formStatus === "error"
								? "FAILED - TRY AGAIN"
								: "SEND MESSAGE"}
					</Button>
				</form>
			)}

			{formStatus === "success" && (
				<div className="w-full h-full min-h-[400px] flex flex-col items-center justify-center text-center p-8 space-y-6">
					<div className="w-16 h-16 rounded-full bg-accent/20 border-2 border-accent text-accent flex items-center justify-center shadow-[0_0_30px_rgba(0,255,65,0.4)] animate-bounce">
						<CheckCircle2 size={32} aria-hidden="true" />
					</div>
					<div className="space-y-2">
						<h3 className="text-white text-xl sm:text-2xl tracking-wide font-heading">
							{pageContent.sections.contact.form.successTitle}
						</h3>
						<p className="text-white/70 text-xs sm:text-sm max-w-sm leading-relaxed">
							{pageContent.sections.contact.form.successMessage}
						</p>
					</div>
					<Button
						onClick={() => setFormStatus("idle")}
						variant="outline"
						shape="blade"
						size="md"
						icon={RotateCcw}
						iconPosition="left"
					>
						SEND ANOTHER MESSAGE
					</Button>
				</div>
			)}
		</div>
	);
}

export default ContactForm;
