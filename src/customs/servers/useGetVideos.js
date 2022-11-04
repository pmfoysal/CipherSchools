import { useQuery } from '@tanstack/react-query';

export default function useGetVideos(options = {}) {
   return useQuery({
      queryKey: [`/videos`],
      ...options,
   });
}
