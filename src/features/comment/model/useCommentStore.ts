import { StateCreator } from 'zustand/vanilla';
import { create } from 'zustand/react';
import { createStoreSelector } from '../../../shared/model';
import { Comment, NewComment } from '../../../entities/comments/model';

interface State {
  comments: { [postId: number]: Comment[] };
  selectedComment: Comment | null;
  newComment: NewComment | null;
  showAddCommentDialog: boolean;
  showEditCommentDialog: boolean;
}

interface Action {
  setComments: (
    update: (prev: { [postId: number]: Comment[] }) => { [postId: number]: Comment[] },
  ) => void;
  setSelectedComment: (comment: Comment | null) => void;
  setNewComment: (newComment: NewComment | null) => void;
  setShowAddCommentDialog: (show: boolean) => void;
  setShowEditCommentDialog: (show: boolean) => void;
}

type CommentStoreProps = State & Action;

const useCommentStoreCreator: StateCreator<CommentStoreProps> = (set) => ({
  comments: [],
  selectedComment: null,
  newComment: null,
  showAddCommentDialog: false,
  showEditCommentDialog: false,
  setComments: (update) => set((state) => ({ comments: update(state.comments) })),
  setSelectedComment: (comment) => set({ selectedComment: comment }),
  setNewComment: (newComment) => set({ newComment }),
  setShowAddCommentDialog: (show) => set({ showAddCommentDialog: show }),
  setShowEditCommentDialog: (show) => set({ showEditCommentDialog: show }),
});

const commentStore = create(useCommentStoreCreator);

export const useCommentStore = createStoreSelector(commentStore);
export default useCommentStore;
