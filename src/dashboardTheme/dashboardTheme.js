import { createTheme } from "@mui/material/styles";
// import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&display=swap');
export const dashboardTheme = createTheme({
  palette: {
    // primary: {
    //  // main: '#fff',
    // },
  },

  components: {
    // Name of the component
    MuiButtonBase: {
      defaultProps: {
        // The props to change the default for.
        disableRipple: true, // No more ripple, on the whole application 💣!
      },
    },
    MuiDrawer: {
      styleOverrides: {
        // paperAnchorLeft:{
        //  backgroundColor:"#fff"
        // }
      },
    },
    // MuiGrid: {
    //   styleOverrides:{
    //     // root:{

    //     // }
    //   }

    // },
  },
  typography: {
    fontFamily: ["Montserrat"],
    h4: {
      letterSpacing: 6,
      fontWeight: "700",
    },
    h5: {
      letterSpacing: 2,
    },
  },
});
