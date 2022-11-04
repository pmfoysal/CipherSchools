import { useQuery } from '@tanstack/react-query';

export default function useGetComments(id, options = {}) {
   return useQuery({
      queryKey: [`/videos/${id}/comments?sort[createdAt]=desc`],
      cacheTime: 0,
      retry: 3,
      refetchOnWindowFocus: false,
      ...options,
   });
}
