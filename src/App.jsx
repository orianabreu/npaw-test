import { ThemeProvider } from "@mui/material/styles";

import theme from "./theme/theme";
import GlobalStyle from "./theme/global";
import MusicSearch from "./components/MusicSearch/MusicSearch";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MusicSearch />
    </ThemeProvider>
  );
}

export default App;
