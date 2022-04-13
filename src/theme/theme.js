import { createTheme } from "@mui/material";
import { deepOrange, pink, grey } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: deepOrange[500],
      pink: pink[300],
    },
    secondary: {
      main: grey[900],
      light: grey[50],
    },
  },
  typography: {
    fontFamily: "Helvetica Neue, Arial, sans-serif",
  }
});

export default theme;
