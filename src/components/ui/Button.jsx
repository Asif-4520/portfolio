import React from "react";
import "./Button.css";

/**
 * Standardized High-Impact Sci-Fi Polygon Button Component
 * 
 * Strict 2-Type API:
 * - variant: 'primary' (Matte White -> Neon Green) | 'outline' (Glowing Border Glass)
 * - shape: 'blade' (15° Slant) | 'chamfer' (Armor Box)
 * - size: 'sm' | 'md' | 'lg'
 * - icon: Lucide / Icon component
 * - iconPosition: 'left' | 'right'
 * - children: text or JSX inside button
 * - href, target, rel, onClick, className, disabled, type, ...rest
 */
export function Button({
	children,
	variant = "primary",
	shape = "blade",
	size = "md",
	icon: Icon = null,
	iconPosition = "left",
	className = "",
	disabled = false,
	onClick,
	type = "button",
	href,
	target,
	rel,
	...props
}) {
	// Strictly resolve variant to either 'primary' or 'outline'
	const validVariant = variant === "outline" ? "outline" : "primary";
	const validShape = shape === "chamfer" ? "chamfer" : "blade";

	const shapeClass = `cyber-btn-${validShape}`;
	const variantClass = `cyber-btn-${validVariant}`;
	const sizeClass = `cyber-btn-${size}`;
	const combinedClasses = `cyber-btn ${shapeClass} ${variantClass} ${sizeClass} ${className}`.trim();

	const content = (
		<span className="cyber-btn-content">
			{Icon && iconPosition === "left" && (
				<Icon className="cyber-btn-icon cyber-btn-icon-left" aria-hidden="true" />
			)}

			<span className="cyber-btn-text">{children}</span>

			{Icon && iconPosition === "right" && (
				<Icon className="cyber-btn-icon cyber-btn-icon-right" aria-hidden="true" />
			)}
		</span>
	);

	if (href) {
		return (
			<a
				href={href}
				target={target}
				rel={target === "_blank" ? "noopener noreferrer" : rel}
				className={combinedClasses}
				{...props}
			>
				{content}
			</a>
		);
	}

	return (
		<button
			type={type}
			disabled={disabled}
			onClick={onClick}
			className={combinedClasses}
			{...props}
		>
			{content}
		</button>
	);
}

// Backwards-compatible exports
export { Button as CyberButton };
export default Button;
