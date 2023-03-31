export const navbarStyles = {
  drawer: {
    width: 320,
    zIndex:"2",
    flexShrink: 0,
    "& .MuiDrawer-paper": {
      width: 320,
      boxSizing: "border-box",
      backgroundColor: "##fff",
      color: "rgba(20,20,20,0.5)",
    },
    "& .Mui-selected": {
      color: "red",
    },
  },
  icons: {
    color: "rgba(20,20,20,0.5)!important",
    marginLeft: "20px",
  },
  text: {
    "& span": {
      marginLeft: "-10px",
      fontWeight: "600",
      fontSize: "16px",
    },
  },
  button: {
    position: "absolute",
    zIndex: 300,
    bottom: "50%",
  },
};
