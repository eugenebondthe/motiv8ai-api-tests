import { JSONSchemaType } from 'ajv'
import { Post, UpdatePost } from '../../types/api/posts'

export const postSchema: JSONSchemaType<Post> = {
  title: 'Post',
  type: 'object',
  properties: {
    userId: { type: 'integer' },
    id: { type: 'integer' },
    title: { type: 'string' },
    body: { type: 'string' },
  },
  required: ['userId', 'id', 'title', 'body'],
}

export const updatePostSchema: JSONSchemaType<UpdatePost> = {
  title: 'Post',
  type: 'object',
  properties: {
    userId: { type: 'integer', nullable: true },
    title: { type: 'string', nullable: true },
    body: { type: 'string', nullable: true },
  },
}

export const postsSchema: JSONSchemaType<Post[]> = {
  title: 'PostsList',
  type: 'array',
  items: {
    type: 'object',
    required: ['userId', 'id', 'title', 'body'],
  },
  definitions: {
    post: {
      title: 'Post',
      type: 'object',
      properties: {
        userId: { type: 'integer' },
        id: { type: 'integer' },
        title: { type: 'string' },
        body: { type: 'string' },
      },
      required: ['userId', 'id', 'title', 'body'],
    },
  },
}
