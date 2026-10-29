"use client";

import { createContext, useContext, useMemo, useState } from "react";

const AppContext = createContext();

export function AppStoreProvider({ children }) {
	const [currentSection, setCurrentSection] = useState("home");
	const [deviceTier, setDeviceTier] = useState("high");

	const value = useMemo(
			() => ({
				currentSection,
				setCurrentSection,
				deviceTier,
				setDeviceTier,
			}),
			[currentSection, deviceTier],
	);

	return (
			<AppContext.Provider value={value}>
				{children}
			</AppContext.Provider>
	);
}

export function useAppStore() {
	const context = useContext(AppContext);
	if (!context) {
		throw new Error("useAppStore must be used inside AppStoreProvider");
	}

	return context;
}
