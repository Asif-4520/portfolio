"use client";

import React, { useState } from "react";
import { Copy, Check } from "lucide-react";

export function CopyButton({ value, label }) {
	const [copied, setCopied] = useState(false);

	const handleCopy = async () => {
		await navigator.clipboard.writeText(value);
		setCopied(true);

		setTimeout(() => setCopied(false), 2500);
	};

	return (
		<div className="relative inline-flex items-center">
			<button
				type="button"
				onClick={handleCopy}
				className="p-1.5 rounded-lg bg-white/5 hover:bg-accent/20 hover:text-accent text-white/60 transition-colors cursor-pointer"
				title={copied ? "Copied!" : `Copy ${label} to clipboard`}
				aria-label={copied ? "Copied!" : `Copy ${label} to clipboard`}
			>
				{copied ? (
					<Check size={13} aria-hidden="true" />
				) : (
					<Copy size={13} aria-hidden="true" />
				)}
			</button>
		</div>
	);
}

export default CopyButton;