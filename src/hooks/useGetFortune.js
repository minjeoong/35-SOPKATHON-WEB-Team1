import { getFortune } from '@/apis/getFortune';
import { useQuery } from '@tanstack/react-query';

export const useGetFortune = (id) => {
	return useQuery({
		queryKey: ['result', id],
		queryFn: () => getFortune(id),
	});
};
