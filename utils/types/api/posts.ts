export interface Post {
  id: number
  userId: string | number
  title: string
  body: string | number
}

export interface UpdatePost extends Partial<Omit<Post, 'id'>> {}
