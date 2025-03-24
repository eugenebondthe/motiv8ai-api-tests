import { Post, UpdatePost } from '../../types/api/posts';
import { expectToEqual } from '../solutions';
import { postSchema } from '../../schema/api/posts-schema';

type AssertPostProps = {
  expectedPost: Post;
  actualPost: Post;
};

type AssertUpdatePostProps = {
  expectedPost: UpdatePost;
  actualPost: UpdatePost;
};

export const assertUpdatePost = async ({ expectedPost, actualPost }: AssertUpdatePostProps) => {
  await expectToEqual({
    actual: expectedPost.title,
    expected: actualPost.title,
    description: 'Post "title"'
  });
  await expectToEqual({
    actual: expectedPost.body,
    expected: actualPost.body,
    description: 'Post "body"'
  });
  await expectToEqual({
    actual: expectedPost.userId,
    expected: actualPost.userId,
    description: 'Post "userId"'
  });
};

export const assertPost = async ({ expectedPost, actualPost }: AssertPostProps) => {
  await expectToEqual({ actual: expectedPost.id, expected: actualPost.id, description: 'Post "id"' });
  await assertUpdatePost({ expectedPost, actualPost });
};