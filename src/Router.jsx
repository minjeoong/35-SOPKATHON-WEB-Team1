import LoadingPage from '@/pages/LoadingPage/LoadingPage';
import MainPage from '@/pages/MainPage/MainPage.jsx';
import { createBrowserRouter } from 'react-router-dom';
import InfoPage from './pages/InfoPage/InfoPage.jsx';
import ResultPage from './pages/ResultPage/ResultPage.jsx';

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
		path: '/loading',
		element: <LoadingPage />,
	},
	{
		path: `/result`,
		element: <ResultPage />,
	},
]);

export default router;
