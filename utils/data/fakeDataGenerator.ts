import { faker } from '@faker-js/faker'
import { Post, UpdatePost } from '../types/api/posts'

export const getRandomPost = (): Post => ({
  id: faker.number.int({ min: 1, max: 100 }),
  title: faker.lorem.sentence(),
  body: faker.lorem.paragraph(),
  userId: faker.number.int({ min: 1, max: 1000 }),
})

export const getRandomUpdatePost = (): UpdatePost => ({
  title: faker.lorem.sentence(),
  body: faker.lorem.paragraph(),
  userId: faker.number.int({ min: 1, max: 10000 }),
})