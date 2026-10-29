import localFont from "next/font/local";
import "../styles/base.css";
import { pageContent, projects, siteConfig } from "@/data";
import { AppStoreProvider } from "@/store/AppContext";

const bricolageGrotesque = localFont({
	src: "../../public/fonts/bricolage-grotesque-variable.woff2",
	variable: "--font-bricolage",
	display: "swap",
});

const spaceGrotesk = localFont({
	src: "../../public/fonts/space-grotesk-variable.woff2",
	variable: "--font-space-grotesk",
	display: "swap",
});

const ibmPlexSans = localFont({
	src: "../../public/fonts/ibm-plex-sans-variable.woff2",
	variable: "--font-ibm-plex",
	display: "swap",
});

export const metadata = {
	metadataBase: new URL(siteConfig.url),
	title: `${siteConfig.name} | ${siteConfig.role}`,
	description: siteConfig.description,
	applicationName: siteConfig.name,
	authors: [{ name: siteConfig.name, url: siteConfig.url }],
	creator: siteConfig.name,
	publisher: siteConfig.name,
	category: "technology",
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	alternates: {
		canonical: siteConfig.url,
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	keywords: [siteConfig.name, ...pageContent.seo.keywords],
	icons: {
		icon: [
			{ url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
			{ url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
			{ url: "/favicon/favicon.ico" },
		],
		apple: "/favicon/apple-touch-icon.png",
	},
	manifest: "/favicon/site.webmanifest",
	openGraph: {
		type: "website",
		url: siteConfig.url,
		siteName: siteConfig.name,
		locale: "en_IN",
		title: `${siteConfig.name} | ${siteConfig.role}`,
		description: siteConfig.description,
		images: [
			{
				url: new URL(pageContent.seo.ogImage, siteConfig.url).toString(),
				width: 512,
				height: 512,
				alt: `${siteConfig.name} portfolio`,
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: `${siteConfig.name} | ${siteConfig.role}`,
		description: siteConfig.description,
		images: [new URL(pageContent.seo.ogImage, siteConfig.url).toString()],
		creator: "@asif_4520",
	},
};

const jsonLd = {
	"@context": "https://schema.org",
	"@graph": [
		{
			"@type": "Person",
			"@id": `${siteConfig.url}#person`,
			name: siteConfig.name,
			alternateName: siteConfig.shortName,
			jobTitle: siteConfig.role,
			url: siteConfig.url,
			image: new URL(pageContent.seo.ogImage, siteConfig.url).toString(),
			sameAs: Object.values(siteConfig.social).map((social) => social.url),
		},
		{
			"@type": "ProfilePage",
			"@id": `${siteConfig.url}#profile`,
			url: siteConfig.url,
			name: `${siteConfig.name} — ${siteConfig.role}`,
			description: siteConfig.description,
			inLanguage: "en",
			isPartOf: {
				"@id": `${siteConfig.url}#website`,
			},
			mainEntity: {
				"@id": `${siteConfig.url}#person`,
			},
		},
		{
			"@type": "WebSite",
			"@id": `${siteConfig.url}#website`,
			url: siteConfig.url,
			name: `${siteConfig.name} — ${siteConfig.role}`,
			description: siteConfig.description,
			inLanguage: "en",
			publisher: {
				"@id": `${siteConfig.url}#person`,
			},
		},
		...projects.map((project) => ({
			"@type": "SoftwareApplication",
			name: project.name,
			applicationCategory: "DeveloperApplication",
			operatingSystem: "Web",
			url: project.liveUrl,
			author: { "@id": `${siteConfig.url}#person` },
			description: project.summary,
		})),
	],
};

export default function RootLayout({ children }) {
	return (
		<html
			lang="en"
			className={`${bricolageGrotesque.variable} ${spaceGrotesk.variable} ${ibmPlexSans.variable}`}
		>
			<head>
				{pageContent.seo.googleVerification && (
					<meta
						name="google-site-verification"
						content={pageContent.seo.googleVerification}
					/>
				)}
				<script
					type="application/ld+json"
					// biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD is generated from trusted local site data.
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				/>
			</head>
			<body>
				<AppStoreProvider>{children}</AppStoreProvider>
			</body>
		</html>
	);
}
