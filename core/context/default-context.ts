import { request } from '@playwright/test'

export const getDefaultApiContext = async () => {
  return await request.newContext({
    baseURL: process.env.BASE_URL,
  })
}
