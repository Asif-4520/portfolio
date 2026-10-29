import {
	SiReact,
	SiNextdotjs,
	SiTypescript,
	SiNodedotjs,
	SiJavascript,
	SiTailwindcss,
	SiRedux,
	SiExpress,
	SiDocker,
	SiMongodb,
	SiRedis,
	SiJsonwebtokens,
	SiGit,
	SiGithub,
} from "react-icons/si";

export const skills = [
	// Top Row (4 Hexagons)
	{ name: "Next.js", category: "FRONTEND", Icon: SiNextdotjs, color: "#FFFFFF" },
	{ name: "Tailwind CSS", category: "FRONTEND", Icon: SiTailwindcss, color: "#06B6D4" },
	{ name: "OAuth 2.0", category: "SECURITY", Icon: SiJsonwebtokens, color: "#A855F7" },
	{ name: "Express.js", category: "BACKEND", Icon: SiExpress, color: "#60A5FA" },

	// Center Row (5 Hexagons - Staggered Interlocking Center)
	{ name: "TypeScript", category: "FRONTEND", Icon: SiTypescript, color: "#3178C6" },
	{ name: "React.js", category: "FRONTEND", Icon: SiReact, color: "#61DAFB" },
	{ name: "JavaScript", category: "FRONTEND", Icon: SiJavascript, color: "#F7DF1E" },
	{ name: "Node.js", category: "BACKEND", Icon: SiNodedotjs, color: "#3C873A" },
	{ name: "MongoDB", category: "DATABASE", Icon: SiMongodb, color: "#47A248" },

	// Bottom Row (4 Hexagons)
	{ name: "Redis", category: "DATABASE", Icon: SiRedis, color: "#DC382D" },
	{ name: "Docker", category: "DEVOPS", Icon: SiDocker, color: "#2496ED" },
	{ name: "Git", category: "DEVOPS", Icon: SiGit, color: "#F05032" },
	{ name: "GitHub", category: "DEVOPS", Icon: SiGithub, color: "#FFFFFF" },
];
