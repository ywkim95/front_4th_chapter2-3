import { Comments } from '@/entities/comments';

export const getComments = async (postId: number): Promise<Comments> => {
  const response = await fetch(`/api/comments/post/${postId}`, { method: 'GET' });
  if (!response.ok) {
    throw new Error(`댓글 가져오기 오류: ${response.statusText}`);
  }
  return await response.json();
};
