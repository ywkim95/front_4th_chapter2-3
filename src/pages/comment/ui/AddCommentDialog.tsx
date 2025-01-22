import {
  Button,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  Textarea,
} from '../../../shared/ui';
import useCommentStore from '../../../features/comment/model/useCommentStore.ts';
import { postComment } from '../../../entities/comments/api';

const AddCommentDialog = () => {
  const { showAddCommentDialog, setShowAddCommentDialog, newComment, setNewComment, setComments } =
    useCommentStore([
      'showAddCommentDialog',
      'setShowAddCommentDialog',
      'newComment',
      'setNewComment',
      'setComments',
    ]);

  // 댓글 추가
  const addComment = async () => {
    try {
      const data = await postComment(newComment);
      setComments((prev) => ({
        ...prev,
        [data.postId]: [...(prev[data.postId] || []), data],
      }));
      setShowAddCommentDialog(false);
      setNewComment({ body: '', postId: null, userId: 1 });
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      } else {
        console.error(error);
      }
    }
  };

  return (
    <Dialog open={showAddCommentDialog} onOpenChange={setShowAddCommentDialog}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>새 댓글 추가</DialogTitle>
        </DialogHeader>
        <div className='space-y-4'>
          <Textarea
            placeholder='댓글 내용'
            value={newComment.body}
            onChange={(e) => setNewComment({ ...newComment, body: e.target.value })}
          />
          <Button onClick={addComment}>댓글 추가</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddCommentDialog;
