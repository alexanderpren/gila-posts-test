import React from 'react';
import { Box, ToggleButton, Tooltip } from '@mui/material';
import { useSnackbar } from 'notistack';
import {
	Brightness4 as DarkIcon,
	Brightness7 as LightIcon,
} from '@mui/icons-material';
import { useThemeDispatch } from '../hooks/useThemeDispatch';
import { useThemeState } from '../hooks/useThemeState';

const ThemeButton: React.FC = () => {
	const { enqueueSnackbar } = useSnackbar();
	const dispatch = useThemeDispatch();
	const { themeMode } = useThemeState();

	const toggleTheme = () => {
		dispatch({ type: 'TOGGLE_THEME' });
	};

	const changeTheme = () => {
		enqueueSnackbar(
			`${themeMode === 'dark' ? 'light' : 'dark'} mode activated `,
			{
				variant: 'success',
			}
		);
		toggleTheme();
	};
	return (
		<Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 1 }}>
			<Tooltip title="Change Theme">
				<ToggleButton
					value="check"
					selected={themeMode === 'dark' ? true : false}
					onChange={changeTheme}
					color={themeMode === 'dark' ? 'primary' : 'secondary'}
					sx={{ backgroundColor: 'transparent' }}
				>
					{themeMode === 'light' ? <DarkIcon /> : <LightIcon />}
				</ToggleButton>
			</Tooltip>
		</Box>
	);
};

export default ThemeButton;
