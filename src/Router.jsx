import MainPage from '@/pages/MainPage/MainPage.jsx';
import InfoPage from './pages/InfoPage/InfoPage.jsx';
import ResultPage from './pages/ResultPage/ResultPage.jsx';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
	{
			path: '/',
			element: <MainPage />,
	},
	{
			path: '/info',
			element: <InfoPage />,
	},
	{
		path: '/result',
		element: <ResultPage />,
},
]);

export default router;