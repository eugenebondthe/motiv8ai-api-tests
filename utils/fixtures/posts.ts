import { Fixtures } from '@playwright/test';
import { PostsAPIClient } from '../../core/api/posts-api';
import { Post } from '../types/api/posts';
import { getRandomPost } from '../data/fakeDataGenerator';

export type PostsFixture = {
  postsClient: PostsAPIClient;
  post: Post;
};

export const postsFixture: Fixtures<PostsFixture> = {
  post: async ({ postsClient }, use) => {
    const randomPost = getRandomPost();
    const post = await postsClient.createPost(randomPost);

    await use(post);

    await postsClient.deletePostAPI(post.id);
  }
};