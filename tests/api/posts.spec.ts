import {
  getRandomPost,
  getRandomUpdatePost,
} from '../../utils/data/fakeDataGenerator'
import { assertPost, assertUpdatePost } from '../../utils/assertions/api/posts'
import { expectStatusCode } from '../../utils/assertions/solutions'
import { validateSchema } from '../../utils/schema/responseValidator'
import {
  postSchema,
  updatePostSchema,
  postsListSchema,
} from '../../utils/schema/api/posts-schema'
import { Post } from '../../utils/types/api/posts'
import { postsTest as test } from '../posts-test'

test.describe('Posts', () => {
  test('Get post', async ({ post, postsClient }) => {
    const response = await postsClient.getPostAPI(post.id)
    const json: Post = await response.json()

    await expectStatusCode({
      actual: response.status(),
      expected: 200,
      api: response.url(),
    })
    await assertPost({ expectedPost: post, actualPost: json })

    await validateSchema({ schema: postSchema, json })
  })

  test('Get posts', async ({ postsClient }) => {
    const response = await postsClient.getPostsAPI()
    const json: Post[] = await response.json()

    await expectStatusCode({
      actual: response.status(),
      expected: 200,
      api: response.url(),
    })

    await validateSchema({ schema: postsListSchema, json })
  })

  test('Create post', async ({ postsClient }) => {
    const payload = getRandomPost()

    const response = await postsClient.createPostAPI(payload)
    const json: Post = await response.json()

    await expectStatusCode({
      actual: response.status(),
      expected: 201,
      api: response.url(),
    })
    await assertPost({ expectedPost: payload, actualPost: json })

    await validateSchema({ schema: postSchema, json })
  })

  test('Update post', async ({ post, postsClient }) => {
    const payload = getRandomUpdatePost()

    const response = await postsClient.updatePostAPI(post.id, payload)
    const json: Post = await response.json()

    await expectStatusCode({
      actual: response.status(),
      expected: 200,
      api: response.url(),
    })
    await assertUpdatePost({ expectedPost: payload, actualPost: json })

    await validateSchema({ schema: updatePostSchema, json })
  })

  test('Delete post', async ({ post, postsClient }) => {
    const deletePostResponse = await postsClient.deletePostAPI(post.id)
    const getPostResponse = await postsClient.getPostAPI(post.id)

    await expectStatusCode({
      actual: getPostResponse.status(),
      expected: 404,
      api: getPostResponse.url(),
    })
    await expectStatusCode({
      actual: deletePostResponse.status(),
      expected: 200,
      api: deletePostResponse.url(),
    })
  })
})
