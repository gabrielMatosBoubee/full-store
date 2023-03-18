
# Full Store Back-end

A brief description of what this project does and who it's for. In this project you can consume 4 routes. I will explain now about the login and user route!

# Login and User routes.

## /login

In the **"/login"** you receive a token JWT if all works right. You need to send in the body **with a post methode** this json example: { "email": "yourEmail", password: "YourPassword23!"}. Your JWT has this json example: { "email": "yourEmail", "id": 1, "admin": false, "username": "user" }.

## /user

#### insert a new user

in the **"/user"** with the  **methode post** you can make a insert a new user. You need to pass this json example in the body: { "email": "yourEmail", "password": "YourPassword23!" "username": "user" }.

#### update a user

in the **"/user"** with the  **methode put** you can update an user. **You need to have your JWT** and pass to the headers. If your token don't have the admin key in data, you can't use this route. You need to pass this json example in the body: { "email": "yourEmail", "password": "YourPassword23!" }

#### delete a user

in the **"/user"** with the  **methode delete** you can update an user. **You need to have your JWT** and pass to the headers. If your token don't have the admin key in data, you can't use this route. You need to pass this json example in the body: { "email": "yourEmail" }