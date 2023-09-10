import { Roboto, Poppins } from "next/font/google";
import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

export const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const poppins = Poppins({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

// Create a theme instance.
export const theme = createTheme({
  palette: {
    primary: {
      main: "#ff6464",
    },
    secondary: {
      main: "#00a8cc",
    },
    error: {
      main: red.A400,
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        maxWidthSm: {
          maxWidth: "680px",
          "@media (min-width:600px)": {
            maxWidth: "680px",
          },
        },
        maxWidthMd: {
          maxWidth: "860px",
          "@media (min-width:900px)": {
            maxWidth: "860px",
          },
        },
      },

      defaultProps: {
        maxWidth: "md",
      },
      variants: [],
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: "black",
          "&:hover, &.active": {
            color: "#ff6464",
          },
        },
      },

      defaultProps: {
        underline: "hover",
      },
      variants: [],
    },
  },
  typography: {
    fontFamily: poppins.style.fontFamily,
  },
});
