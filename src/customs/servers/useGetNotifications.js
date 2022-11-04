import { useQuery } from '@tanstack/react-query';

export default function useGetNotifications(options = {}) {
   return useQuery({
      queryKey: [`/notifications?sort[createdAt]=desc&page=1&limit=5`],
      cacheTime: 0,
      retry: 3,
      refetchOnWindowFocus: false,
      ...options,
   });
}
