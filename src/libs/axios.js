import axios from 'axios';

export const axiosInstance = axios.create({
	baseURL: `https://www.sopkathon-web.p-e.kr/api/v1`,

	headers: {
		'Content-Type': 'application/json',
	},
});
