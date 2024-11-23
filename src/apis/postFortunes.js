import { useMutation, useQueryClient } from '@tanstack/react-query';
import { axiosInstance } from '@/libs/axios.js';

export const usePostFortunes = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationKey: ['fortunes'],
		mutationFn: async (payload) => {
			const response = await axiosInstance.post('/fortunes', payload);
			return response.data;
		},
		onSuccess: (data) => {
			queryClient.invalidateQueries({ queryKey: ['fortunes'] });
		},
		onError: (error) => {},
	});
};
