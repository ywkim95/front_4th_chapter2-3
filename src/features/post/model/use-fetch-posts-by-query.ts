import useFetchPosts from './use-fetch-posts.ts';
import { useQueryStore, usePostStore } from '@/features/post';

import { getPostsByQuery } from '@/entities/post';

const useFetchPostsByQuery = () => {
  const { setLoading, setPosts } = usePostStore();
  const { searchQuery, setTotal } = useQueryStore();
  const { fetchPosts } = useFetchPosts();
  // 게시물 검색
  const fetchPostsByQuery = async () => {
    if (!searchQuery) {
      await fetchPosts();
      return;
    }
    try {
      setLoading(true);
      const data = await getPostsByQuery(searchQuery);
      setPosts(data.posts);
      setTotal(data.total);
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      } else {
        console.error(error);
      }
    } finally {
      setLoading(false);
    }
  };

  return {
    fetchPostsByQuery,
  };
};

export default useFetchPostsByQuery;
