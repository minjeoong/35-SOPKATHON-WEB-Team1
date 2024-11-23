export const axiosInstance = axios.create({
	baseURL: `${import.meta.env.VITE_BASE_URL}/api/health`,

	headers: {
		'Content-Type': 'application/json',
	},
});
