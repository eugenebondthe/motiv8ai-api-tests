import test, { APIRequestContext, APIResponse } from '@playwright/test'
import { APIRoutes } from '../../utils/constants/routes'
import { APIClient } from '../../utils/types/api/client'
import { Post, UpdatePost } from '../../utils/types/api/posts'

export class PostsAPIClient implements APIClient {
  constructor(public context: APIRequestContext) {}

  async getPostAPI(postId: number): Promise<APIResponse> {
    return await test.step(`Getting post with id "${postId}"`, async () => {
      return await this.context.get(`${APIRoutes.Posts}/${postId}`)
    })
  }

  async getPostsAPI(): Promise<APIResponse> {
    return await test.step('Getting posts', async () => {
      return await this.context.get(APIRoutes.Posts)
    })
  }

  async createPostAPI(data: Post): Promise<APIResponse> {
    return await test.step(`Creating post with id "${data.id}"`, async () => {
      return await this.context.post(APIRoutes.Posts, { data })
    })
  }

  async updatePostAPI(
    postId: number,
    data: UpdatePost,
  ): Promise<APIResponse> {
    return await test.step(`Updating question with id "${postId}"`, async () => {
      return await this.context.patch(`${APIRoutes.Posts}/${postId}`, {
        data,
      })
    })
  }

  async deletePostAPI(questionId: number): Promise<APIResponse> {
    return await test.step(`Deleting question with id "${questionId}"`, async () => {
      return await this.context.delete(`${APIRoutes.Posts}/${questionId}`)
    })
  }

  async createPost(data: Post): Promise<Post> {
    const response = await this.createPostAPI(data)
    await expectStatusCode({
      actual: response.status(),
      expected: 201,
      api: response.url(),
    })

    return await response.json()
  }
}
