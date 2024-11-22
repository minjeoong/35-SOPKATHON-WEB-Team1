import { RouterProvider } from "react-router-dom";
import { Global } from '@emotion/react';
import GlobalStyle from './styles/GlobalStyle';
import router from "./Router";
import { theme } from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyle} />
        <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;