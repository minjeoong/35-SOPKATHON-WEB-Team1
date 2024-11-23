import { Global } from '@emotion/react';
import { RouterProvider } from 'react-router-dom';
import router from './Router';
import GlobalStyle from './styles/GlobalStyle';
import { theme } from './styles/theme';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Global styles={GlobalStyle} />
			<RouterProvider router={router} />
		</ThemeProvider>
	);
}

export default App;
