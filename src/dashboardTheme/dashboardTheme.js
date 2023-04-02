import { createTheme } from "@mui/material/styles";
export const dashboardTheme = createTheme({
  palette: {
    primary: {
      main: "#343434",
    },
    secondary: {
      main: "#EEECEC",
    },
    tertiary: {
      main: "#EEECEC",
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
          backgroundColor: "##fff",
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
  typography: {
    fontFamily: ["Montserrat", "Sacramento"],
    h1: {
      letterSpacing: 6,
      fontWeight: "700",
      fontFamily: "'Sacramento', cursive",
    },
    h2: {
      letterSpacing: 2,
      fontWeight: "400",
      fontFamily: "'Sacramento', cursive",
    },
    h3: {
      letterSpacing: 2,
      fontWeight: "400",
      fontFamily: "'Sacramento', cursive",
    },
    h4: {
      letterSpacing: 2,
      fontWeight: "400",
      fontFamily: "Montserrat",
      fontSize: "1.4rem",
    },
    h5: {
      letterSpacing: 2,
      fontWeight: "400",
      fontFamily: "'Sacramento', cursive",
    },

    h6: {
      letterSpacing: 2,
      fontWeight: "400",
      fontFamily: "'Sacramento', cursive",
    },
    subtitle1: {
      letterSpacing: 2,
      fontWeight: "400",
      fontFamily: "Montserrat",
      fontSize: "1rem",
    },
    body1: {
      fontFamily: "'Sacramento', cursive",
    },
    body2: {
      fontFamily: "Montserrat",
    },
  },
});
