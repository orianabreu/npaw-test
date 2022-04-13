import { ThemeProvider } from "@mui/material/styles";

import theme from "./theme/theme";
import GlobalStyle from "./theme/global";
import NavBar from "./components/NavBar/NavBar";
import Main from "./pages/Main/Main";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <NavBar />
      <Main />
    </ThemeProvider>
  );
}

export default App;
