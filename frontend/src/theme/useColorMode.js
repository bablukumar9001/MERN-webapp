import { useContext } from 'react';
import { ColorModeContext } from './ThemeProvider';
import { useTheme } from '@mui/material/styles';

export const useColorMode = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  
  return {
    theme,
    isDarkMode: theme.palette.mode === 'dark',
    toggleColorMode: colorMode.toggleColorMode,
    mode: colorMode.mode,
  };
}; 