# API Test Cases for JSONPlaceholder

## Endpoints Covered

- `GET /posts`
- `GET /posts/{id}`
- `POST /posts`
- `PUT /posts/{id}`
- `DELETE /posts/{id}`

---

## 1️⃣ POSTS Tests

### GET /posts

✅ **Scenario**: Fetch all posts

- Send a `GET` request to `/posts`.
- Expect response **200 OK** with an **array of posts**.
- Each object should contain `userId`, `id`, `title`, and `body`.

### GET /posts/{id}

✅ **Scenario**: Fetch a post by valid ID

- Send `GET /posts/1`.
- Expect response **200 OK** with valid post data.

### POST /posts

✅ **Scenario**: Create a post with valid data

- Send `POST /posts` with:
   ``` json
    {
    "id": 1,
    "title": "New Post",
    "body": "This is a new post.",
    "userId": 1
    }
- Expect **201 Created** and response containing **id**.

### PUT /posts/{id}

✅ **Scenario**: Update an existing post

- Send `PUT /posts/1` with updated data.
- Expect **200 OK** and updated post content.