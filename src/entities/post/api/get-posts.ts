import { Posts } from '@/entities/post';

export const getPosts = async (skip: number, limit: number): Promise<Posts> => {
  const response = await fetch(`/api/posts?limit=${limit}&skip=${skip}`, { method: 'GET' });
  if (!response.ok) {
    throw new Error(`게시물 가져오기 오류: ${response.statusText}`);
  }
  return await response.json();
};
