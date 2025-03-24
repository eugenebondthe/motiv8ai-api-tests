// import { test, expect } from '@playwright/test'
// import { apiClient } from '../utils/apiClient'
// import { validatePost } from '../utils/responseValidator'
// import testData from '../fixtures/testData'

// test.describe('Posts API', () => {
//   test('GET /posts returns a list', async () => {
//     const response = await apiClient.get('/posts')
//     expect(response.status()).toBe(200)
//     const posts = await response.json()
//     expect(posts.length).toBeGreaterThan(0)
//     validatePost(posts[0])
//   })

//   test('GET /posts/:id returns a post', async () => {
//     const response = await apiClient.get('/posts/1')
//     expect(response.status()).toBe(200)
//     validatePost(await response.json())
//   })

//   test('POST /posts creates a new post', async () => {
//     const response = await apiClient.post('/posts', testData.newPost)
//     expect(response.status()).toBe(201)
//     const post = await response.json()
//     expect(post).toHaveProperty('id')
//   })

//   test('POST /posts without title should return 400', async () => {
//     const response = await apiClient.post('/posts', { body: 'Missing title' })
//     expect(response.status()).toBe(400)
//   })

//   test('DELETE /posts/:id twice should return 404', async () => {
//     await apiClient.delete('/posts/1')
//     const response = await apiClient.delete('/posts/1')
//     expect(response.status()).toBe(404)
//   })
// })

import { test, expect } from '@playwright/test'
import { apiClient } from '../../utils/apiClient'
import { config } from '../../config/env'
import { validatePost } from '../../utils/schema/responseValidator'
import { generatePost } from '../../utils/data/fakeDataGenerator'

test.describe('Posts API', () => {
  test.describe('GET /posts', () => {
    test('should return list of posts', async () => {
      const response = await apiClient.get('/posts')
      validatePost(response)
      const body = await response.json()
      
      expect(body).toBeGreaterThan(0)
    })

    test('should return post by ID', async () => {
      const response = await apiClient.get('/posts/1')
      const body = await response.json()
      
      expect(body).toHaveProperty('id', 1)
    })
  })

  test.describe('POST /posts', () => {
    test('should create a new post', async () => {
        const newPost = generatePost()
        const response = await apiClient.post('/posts', newPost)
        const body = await response.json()

        expect(response.status()).toBe(201)
        expect(body).toHaveProperty('id')
    })
  })

  test.describe('PUT /posts', () => {
    test('should update an existing post', async () => {
        const updatedPost = generatePost()
        const response = await apiClient.put('/posts/1', updatedPost)
        const body = await response.json()
        
        expect(response.status()).toBe(200)
        expect(body.title).toBe(updatedPost.title)
    })
  })
})
