import { getFortune } from '@/apis/getFortune';
import { useQuery } from '@tanstack/react-query';

export const useGetFortune = (fortuneId) => {
	return useQuery({
		queryKey: ['result', fortuneId],
		queryFn: () => getFortune(fortuneId),
	});
};
