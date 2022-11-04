import { useQuery } from '@tanstack/react-query';

export default function useGetVideo(id, options = {}) {
   return useQuery({
      queryKey: [`/videos/${id}`],
      cacheTime: 0,
      retry: 3,
      refetchOnWindowFocus: false,
      ...options,
   });
}
