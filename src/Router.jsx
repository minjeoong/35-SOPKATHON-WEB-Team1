import MainPage from '@/pages/MainPage/MainPage.jsx';
import InfoPage from './pages/InfoPage/InfoPage.jsx'
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
]);

export default router;