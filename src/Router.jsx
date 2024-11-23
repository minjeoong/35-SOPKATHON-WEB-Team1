import MainPage from '@/pages/MainPage/MainPage.jsx';
import { createBrowserRouter } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage.jsx';
import InfoPage from './pages/InfoPage/InfoPage.jsx'

const router = createBrowserRouter([
	{
			path: '/',
			element: <MainPage />,
	},
	{
			path: '/info',
			element: <InfoPage />,
	},
]);

export default router;