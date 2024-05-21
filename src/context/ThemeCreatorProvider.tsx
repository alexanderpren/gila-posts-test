import React, { createContext, useReducer, ReactNode, useMemo } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useTheme } from '@mui/material';

type ThemeState = {
	themeMode: 'light' | 'dark';
};

type Action = { type: 'TOGGLE_THEME' };

const themeReducer = (state: ThemeState, action: Action): ThemeState => {
	switch (action.type) {
		case 'TOGGLE_THEME':
			return {
				...state,
				themeMode: state.themeMode === 'light' ? 'dark' : 'light',
			};
		default:
			return state;
	}
};

export const ThemeStateContext = createContext<ThemeState | undefined>(
	undefined
);
export const ThemeDispatchContext = createContext<
	React.Dispatch<Action> | undefined
>(undefined);

export const ThemeCreatorProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const globalTheme = useTheme();
	const initialState: ThemeState = useMemo(() => {
		return {
			themeMode: globalTheme.palette.mode,
		};
	}, [globalTheme.palette.mode]);
	const [state, dispatch] = useReducer(themeReducer, initialState);

	const theme = createTheme({
		palette: {
			mode: state.themeMode,
		},
	});

	return (
		<ThemeStateContext.Provider value={state}>
			<ThemeDispatchContext.Provider value={dispatch}>
				<ThemeProvider theme={theme}>{children}</ThemeProvider>
			</ThemeDispatchContext.Provider>
		</ThemeStateContext.Provider>
	);
};
