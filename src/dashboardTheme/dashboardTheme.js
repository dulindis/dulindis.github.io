import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#343434",
    },
    secondary: {
      main: "#EEECEC",
    },
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
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
    fontFamily: ["Montserrat"],
    h3: {
      letterSpacing: 2,
      fontWeight: "400",
      fontFamily: "'Sacramento', cursive",
    },
    h4: {
      letterSpacing: 2,
      fontSize: "1.4rem",
    },
    h5: {
      letterSpacing: 2,
      fontWeight: "400",
      fontFamily: "'Sacramento', cursive",
      fontSize: "1.7rem",
    },
    h6: {
      letterSpacing: 2,
      fontWeight: "400",
      fontFamily: "'Sacramento', cursive",
    },
    subtitle1: {
      letterSpacing: 2,
      fontWeight: "500",
      fontSize: "1rem",
    },
    body2: {
      fontFamily: "Montserrat",
    },
  },
});
