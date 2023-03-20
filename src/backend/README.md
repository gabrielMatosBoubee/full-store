
# Full Store Back-end

A brief description of what this project does and who it's for. In this project you can consume 4 routes("/login", "/user", "/category", "/products"). I will explain now about the login and user route!

# Login and User routes.

## /login

<details>

In the **"/login"** you receive a token JWT if all works right. You need to send in the body **with a post methode** this json example: 

```
{ "email": "yourEmail", password: "YourPassword23!"}
```

Your JWT has this json example: 

```
{ "email": "yourEmail", "id": 1, "admin": false, "username": "user" }
```

You will receive this json example:

```
{ token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c" }
```

</details>


## /user


#### insert a new user

<details>

in the **"/user"** with the  **methode post** you can make a insert a new user. You need to pass this json example in the body:

```
{ "email": "yourEmail", "password": "YourPassword23!" "username": "user" }
```

You will receive this json example: 

```
{ token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c" }
```

</details>

#### update a user

<details>

in the **"/user"** with the  **methode put** you can update an user. **You need to have your JWT** and pass to the headers. If your token don't have the admin key in data, you can't use this route. You need to pass this json example in the body: 

```
{ "email": "yourEmail", "password": "YourPassword23!" }
```

You will receive this json example: 

```
{ "email": "yourEmail", "password": "YourPassword23!" }
```

</details>

#### delete a user

<details>

in the **"/user"** with the  **methode delete** you can update an user. **You need to have your JWT** and pass to the headers. If your token don't have the admin key in data, you can't use this route. You need to pass this json example in the body: 

```
{ "email": "yourEmail" }
```

</details>

# Category route

## /category

#### get all Categories

<details>

in the **"/category"** with the **methode get** you can get all Categories. You will receive a json like that:

```
{ categories: [{id: 1, category: "categoryName"}] }
```

</details>

#### insert a new category

<details>

in the **/category"** with the **methode post** you can insert a new category. **You need to have your JWT** and pass to the headers. If your token don't have the admin key in data, you can't use this route. You need to pass this json example in the body:

```
{ "category": "categoryName" }
```

You will receive this json example: 

```
{
  "id": 13,
  "category": "categoryName",
}
```

</details>

#### update category 

<details>

in the **/category/:id"** with the **methode put** you can update category. **You need to have your JWT** and pass it in the headers. If your token don't have the admin key in data, you can't use this route. You need to pass this json example in the body:

```
{ "category": "categoryName" }
```

You will receive this json example: 

```
{
  "id": 1,
  "category": "categoryName",
}
```

</details>

#### delete category

<details>

in the **/category/:id"** with the **methode delete** you can delete category. **You need to have your JWT** and pass it in the headers. If your token don't have the admin key in data, you can't use this route. You will receive this json example: 

```
[]
```

</details>