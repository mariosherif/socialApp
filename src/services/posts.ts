import {useInfiniteQuery} from '@tanstack/react-query';
import {GLOBAL_VARS} from '../constants/GlobalVars';

const {BASE_URL} = GLOBAL_VARS;

const fetchPosts = async ({pageParam = 1}) => {
  const data = await fetch(
    `${BASE_URL}/public/v2/posts?page=${pageParam}`,
  ).then(res => res.json());
  return {data};
};

const getPosts = () => {
  return useInfiniteQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    getNextPageParam: (lastPage, allPages) => allPages.length + 1,
    getPreviousPageParam: (firstPage, allPages) => allPages.length - 1,
  });
};

export {getPosts};
