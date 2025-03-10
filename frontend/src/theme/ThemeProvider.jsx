import { createContext, useState, useMemo, useEffect } from 'react';
import { ThemeProvider as MUIThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Create a context for theme mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
  mode: 'light',
});

export const ThemeProvider = ({ children }) => {
  // Get the initial theme from localStorage or default to 'dark'
  const [mode, setMode] = useState(localStorage.getItem('themeMode') || 'dark');

  // Update localStorage when theme changes
  useEffect(() => {
    localStorage.setItem('themeMode', mode);
    // Update the document class for Tailwind dark mode
    if (mode === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [mode]);

  // Color mode context value
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
      mode,
    }),
    [mode]
  );

  // Create theme based on current mode
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === 'dark'
            ? {
                // Dark mode palette
                primary: {
                  main: '#646cff',
                  light: '#8a91ff',
                  dark: '#4a50bf',
                },
                secondary: {
                  main: '#ffcc00',
                  light: '#ffe066',
                },
                background: {
                  default: '#121212',
                  paper: '#1e1e1e',
                },
                text: {
                  primary: '#ffffff',
                  secondary: '#e0e0e0',
                },
              }
            : {
                // Light mode palette
                primary: {
                  main: '#646cff',
                  light: '#8a91ff',
                  dark: '#4a50bf',
                },
                secondary: {
                  main: '#ffcc00',
                  light: '#ffe066',
                },
                background: {
                  default: '#f4f3ff',
                  paper: '#ffffff',
                },
                text: {
                  primary: '#242424',
                  secondary: '#555555',
                },
              }),
        },
        typography: {
          fontFamily: '"Urbanist", "Roboto", "Helvetica", "Arial", sans-serif',
          fontSize: 16,
          h1: {
            fontSize: '3rem',
            fontWeight: 700,
            lineHeight: 1.2,
          },
          h2: {
            fontSize: '2.5rem',
            fontWeight: 600,
            lineHeight: 1.2,
          },
          h3: {
            fontSize: '2.2rem',
            fontWeight: 600,
            lineHeight: 1.3,
          },
          h4: {
            fontSize: '1.8rem',
            fontWeight: 600,
            lineHeight: 1.3,
          },
          h5: {
            fontSize: '1.5rem',
            fontWeight: 600,
            lineHeight: 1.4,
          },
          h6: {
            fontSize: '1.25rem',
            fontWeight: 600,
            lineHeight: 1.4,
          },
          body1: {
            fontSize: '1.125rem',
            lineHeight: 1.6,
          },
          body2: {
            fontSize: '1rem',
            lineHeight: 1.6,
          },
          button: {
            fontSize: '1rem',
            fontWeight: 600,
          },
          subtitle1: {
            fontSize: '1.25rem',
            lineHeight: 1.5,
          },
          subtitle2: {
            fontSize: '1.1rem',
            lineHeight: 1.5,
          },
        },
        components: {
          MuiButton: {
            styleOverrides: {
              root: {
                borderRadius: '8px',
                textTransform: 'none',
                fontWeight: 600,
                padding: '10px 20px',
              },
              sizeLarge: {
                fontSize: '1.125rem',
                padding: '12px 24px',
              },
            },
          },
          MuiCard: {
            styleOverrides: {
              root: {
                borderRadius: '12px',
                boxShadow: mode === 'dark' 
                  ? '0 4px 20px rgba(0, 0, 0, 0.5)' 
                  : '0 4px 20px rgba(0, 0, 0, 0.1)',
              },
            },
          },
          MuiTableCell: {
            styleOverrides: {
              root: {
                fontSize: '1rem',
                padding: '16px',
              },
              head: {
                fontSize: '1.1rem',
                fontWeight: 600,
              },
            },
          },
        },
        breakpoints: {
          values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
          },
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </ColorModeContext.Provider>
  );
}; 