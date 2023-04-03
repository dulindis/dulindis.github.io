import { createTheme } from "@mui/material/styles";

const dashboardTheme = createTheme({
  palette: {
    primary: {
      main: "rgba(52, 52, 52, 1)",
    },
    secondary: {
      main: "rgba(238, 236, 236, 1)",
    },
    tertiary: {
      main: "rgba(238, 236, 236, 1)",
    },
  },
  typography: {
    fontFamily: "Montserrat, sans-serif",
    h1: {
      letterSpacing: 6,
      fontWeight: "700",
      fontFamily: "Sacramento, cursive",
    },
    h2: {
      letterSpacing: 2,
      fontWeight: "400",
    },
    h3: {
      letterSpacing: 2,
      fontWeight: "400",
    },
    h4: {
      letterSpacing: 2,
      fontWeight: "400",
      fontSize: "1.4rem",
    },
    h5: {
      letterSpacing: 2,
      fontWeight: "400",
    },
    h6: {
      letterSpacing: 2,
      fontWeight: "400",
    },
    subtitle1: {
      letterSpacing: 2,
      fontWeight: "400",
      fontSize: "1rem",
    },
    body1: {
      fontFamily: "Sacramento, cursive",
    },
    body2: {
      fontFamily: "Montserrat, sans-serif",
    },
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiDrawer: {
      styleOverrides: {
        root: { width: 320, zIndex: "2", flexShrink: 0 },
        paper: {
          width: 320,
          boxSizing: "border-box",
          backgroundColor: "#fff",
          color: "primary.main",
        },
      },
    },
    MuiGrid: {
      styleOverrides: {
        container: {
          padding: 0,
        },
        item: {
          margin: 0,
        },
      },
    },
  },
});
