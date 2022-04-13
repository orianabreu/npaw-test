import { ThemeProvider } from "@mui/material/styles";

import theme from "./theme/theme";
import GlobalStyle from "./theme/global";
import NavBar from "./components/NavBar/NavBar";
import MusicSearch from "./components/MusicSearch/MusicSearch";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <NavBar />
      <MusicSearch />
    </ThemeProvider>
  );
}

export default App;
