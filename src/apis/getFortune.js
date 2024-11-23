import { axiosInstance } from '@/libs/axios';

export const getFortune = async (fortuneId) => {
	const response = await axiosInstance.get(`/fortunes/${fortuneId}`, {
		fortuneId: fortuneId,
	});

	return response.data;
};
