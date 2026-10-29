import { Home, Briefcase, Cpu, User, History, Send } from "lucide-react";

export const navItems = [
	{ id: "01", name: "home", label: "HOME", selector: '[data-section="home"]', icon: Home },
	{ id: "02", name: "projects", label: "PROJECTS", selector: '[data-section="projects"]', icon: Briefcase },
	{ id: "03", name: "skills", label: "SKILLS", selector: '[data-section="skills"]', icon: Cpu },
	{ id: "04", name: "about", label: "ABOUT", selector: '[data-section="about"]', icon: User },
	{ id: "05", name: "journey", label: "JOURNEY", selector: '[data-section="journey"]', icon: History },
	{ id: "06", name: "contact", label: "CONTACT", selector: '[data-section="contact"]', icon: Send },
];
