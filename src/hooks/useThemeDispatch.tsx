import { useContext } from 'react';
import { ThemeDispatchContext } from '../context/ThemeCreatorProvider';

export const useThemeDispatch = () => {
	const context = useContext(ThemeDispatchContext);
	if (context === undefined) {
		throw new Error('useThemeDispatch must be used within a ThemeProvider');
	}
	return context;
};
