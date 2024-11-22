import { RouterProvider } from "react-router-dom";
import { Global } from '@emotion/react';
import router from "./Router";
import GlobalStyle from './styles/GlobalStyle';

function App() {
  return(
    <>
      <RouterProvider router={router} />
      <Global styles={GlobalStyle} />
    </>
  );
}

export default App;