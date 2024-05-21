import { useContext } from "react";
import { ThemeStateContext } from "../context/ThemeCreatorProvider";

export const useThemeState = () => {
	const context = useContext(ThemeStateContext);
	if (context === undefined) {
		throw new Error('useThemeState must be used within a ThemeProvider');
	}
	return context;
};