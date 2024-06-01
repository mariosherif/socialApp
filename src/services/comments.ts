import {useInfiniteQuery} from '@tanstack/react-query';

const BASE_URL = 'https://gorest.co.in';

const fetchComments = async (pageParam: number, postId: number) => {
  const data = await fetch(
    `${BASE_URL}/public/v2/posts/${postId}/comments?page=${pageParam}`,
  ).then(res => res.json());
  return {data};
};

const getComments = (postId: number) => {
  return useInfiniteQuery({
    queryFn: ({pageParam = 1}) => fetchComments(pageParam, postId),
    queryKey: ['comments', postId],
    getNextPageParam: (lastPage, allPages) => allPages.length + 1,
    getPreviousPageParam: (firstPage, allPages) => allPages.length - 1,
  });
};
export {getComments};
