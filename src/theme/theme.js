import { createTheme } from "@mui/material";
import { deepOrange, pink, grey } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: deepOrange[500],
    },
    secondary: {
      main: pink[300],
    },
    dark: {
      main: grey[900]
    },
    light: {
      main: grey[50]
    }
  },
  typography: {
    fontFamily: "Helvetica Neue, Arial, sans-serif",
    h1: "3rem",
    h2: "2.5rem",
    h3: "2rem",
    h4: "1.5rem",
    paragraph: "1rem"
  }
});

export default theme;
