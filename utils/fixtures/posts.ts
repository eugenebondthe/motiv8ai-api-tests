import { Fixtures, request } from '@playwright/test';
import { PostsAPIClient } from '../../core/api/posts-api'
import { Post } from '../types/api/posts'
import { getRandomPost } from '../data/fakeDataGenerator'
import { getDefaultApiContext } from '../../core/context/default-context';

export type PostsFixture = {
  postsClient: PostsAPIClient
  post: Post
}

export const postsFixture: Fixtures<PostsFixture> = {
  postsClient: async ({}, use) => {
    const context = await getDefaultApiContext()
    const postsClient = new PostsAPIClient(context)

    await use(postsClient)
  },
  
  post: async ({ postsClient }, use) => {
    const randomPost = getRandomPost()
    const post = await postsClient.createPost(randomPost)

    await use(post)

    await postsClient.deletePostAPI(post.id)
  },
}
