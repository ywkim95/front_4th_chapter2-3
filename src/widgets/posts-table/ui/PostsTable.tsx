import { PostTableRow } from '@/features/post';
import { Table, TableBody, TableHead, TableHeader, TableRow } from '@/shared/ui';

const PostsTable = () => (
  <Table>
    <TableHeader>
      <TableRow>
        <TableHead className='w-[50px]'>ID</TableHead>
        <TableHead>제목</TableHead>
        <TableHead className='w-[150px]'>작성자</TableHead>
        <TableHead className='w-[150px]'>반응</TableHead>
        <TableHead className='w-[150px]'>작업</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {!postLoading &&
        postsData &&
        postsData.posts.map((post) => <PostTableRow key={post.id} post={post} />)}
    </TableBody>
  </Table>
);

export default PostsTable;
