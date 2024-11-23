import { Global, ThemeProvider } from '@emotion/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from 'react-router-dom';
import router from './Router';
import GlobalStyle from './styles/GlobalStyle';
import { theme } from './styles/theme';

const queryClient = new QueryClient();

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<ThemeProvider theme={theme}>
				<Global styles={GlobalStyle} />
				<RouterProvider router={router} />
			</ThemeProvider>
		</QueryClientProvider>
	);
}

export default App;
