import MainPage from '@/pages/MainPage/MainPage.jsx';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
	{
		path: '/',
		element: <MainPage />,
	},
]);

export default router;
