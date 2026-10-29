export const projects = [
	{
		id: "01",
		name: "spdSQL",
		category: "SQL PLAYGROUND",
		summary:
			"A client-side SQLite database playground running instantly in the browser via WebAssembly.",
		lang: "TypeScript",
		imageUrl: "/imgs/spdsql.png",
		specs: [
			{ key: "ENGINE", value: "SQLite WASM" },
			{ key: "VFS STORAGE", value: "IndexedDB" },
			{ key: "QUERY LATENCY", value: "< 1.5 ms" },
			{ key: "SESSION STATE", value: "Persistent" },
			{ key: "ENVIRONMENT", value: "Browser-Native" },
			{ key: "COMPILATION", value: "Client-Side" },
		],
		codeUrl: "https://github.com/Asif-4520/spdSQL",
		liveUrl: "https://spdsql.vercel.app",
		color: "#00ff41",
		tech: ["TypeScript", "React", "SQLite", "WASM"],
	},
	{
		id: "02",
		name: "zorix",
		category: "DATABASE UTILITY",
		summary:
			"A lightweight, promise-based wrapper that simplifies IndexedDB operations with auto-commit transactions.",
		lang: "TypeScript",
		imageUrl: "/imgs/zorixDB.png",
		specs: [
			{ key: "FOOTPRINT", value: "1.5 KB Gzip" },
			{ key: "PARADIGM", value: "Async Promises" },
			{ key: "TRANSACTIONS", value: "Auto-Commit" },
			{ key: "TARGET ENGINE", value: "IndexedDB" },
			{ key: "SCHEMA VERIFY", value: "Type-Safe" },
			{ key: "DEPENDENCIES", value: "0 (Zero)" },
		],
		codeUrl: "https://github.com/Asif-4520/zorix",
		liveUrl: "https://asif-4520.github.io/zorix",
		color: "#00ff41",
		tech: ["TypeScript", "IndexedDB", "ESBuild"],
	},
];
