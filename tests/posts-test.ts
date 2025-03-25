import { test as base } from '@playwright/test'
import { postsFixture, PostsFixture } from '../utils/fixtures/posts'

export const postsTest = base.extend<PostsFixture>(postsFixture)
