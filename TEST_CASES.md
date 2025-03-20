# API Test Cases for JSONPlaceholder

## Endpoints Covered

- `GET /posts`
- `GET /posts/{id}`
- `POST /posts`
- `PUT /posts/{id}`
- `DELETE /posts/{id}`
- `GET /users`
- `GET /users/{id}`
- `GET /comments`
- `GET /comments?postId={id}`

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

❌ **Negative Scenario**: Fetch a non-existing post

- Send `GET /posts/99999`.
- Expect response **404 Not Found**.

### POST /posts

✅ **Scenario**: Create a post with valid data

- Send `POST /posts` with:
   ``` json
    {
    "title": "New Post",
    "body": "This is a new post.",
    "userId": 1
    }
- Expect **201 Created** and response containing **id**.

❌ **Negative Scenario**: Create a post with missing fields

- Send `POST /posts` with missing `title`.
- Expect **400 Bad Request**.

### PUT /posts/{id}

✅ **Scenario**: Update an existing post

- Send `PUT /posts/1` with updated data.
- Expect **200 OK** and updated post content.

## 2️⃣ USERS Tests

### GET /users

✅ **Scenario**: Fetch all users

- Send `GET /users`.
- Expect **200 OK** and a list of users.
- Each user should have `id`, `name`, `username`, `email`, etc.

### GET /users/{id}

✅ **Scenario**: Fetch a user by valid ID

- Send `GET /users/1`.
- Expect **200 OK** and valid user data.

❌ **Negative Scenario**: Fetch a non-existing user

- Send `GET /users/99999`.
- Expect **404 Not Found**.

## 3️⃣ COMMENTS Tests

### GET /comments

✅ **Scenario**: Fetch all comments

- Send `GET /comments`.
- Expect **200 OK** and a list of comments.

## GET /comments?postId={id}

✅ **Scenario**: Fetch comments for a specific post

- Send `GET /comments?postId=1`.
- Expect **200 OK** with an array of comments.
- Each comment should have `postId`, `id`, `name`, `email`, `body`.
  ❌ **Negative Scenario**: Fetch comments for a non-existing post

- Send `GET /comments?postId=99999`.
- Expect **200 OK** but with an empty array.
