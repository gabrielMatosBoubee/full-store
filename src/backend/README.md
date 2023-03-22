
# Full Store Back-end

A brief description of what this project does and who it's for. In this project you can consume 4 routes("/login", "/user", "/category", "/products"). I will explain now about the login and user route!

# Login and User routes.

## /login

<details>

<summary> More about </summary>

In the **`/login`** you receive a token JWT if all works right. You need to send in the body **with a post methode** this json example: 

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

<summary> More about </summary>

in the **`/user`** with the  **methode post** you can make a insert a new user. You need to pass this json example in the body:

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

<summary> More about </summary>

in the **`/user`** with the  **methode put** you can update an user. **You need to have your JWT** and pass to the headers. If your token don't have the admin key in data, you can't use this route. You need to pass this json example in the body: 

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

<summary> More about </summary>

in the **`/user`** with the  **methode delete** you can update an user. **You need to have your JWT** and pass to the headers. If your token don't have the admin key in data, you can't use this route. You need to pass this json example in the body: 

```
{ "email": "yourEmail" }
```

</details>

# Category route

## /category

#### get all Categories

<details>

<summary> More about </summary>

in the **`/category`** with the **methode get** you can get all Categories. You will receive a json like that:

```
{ categories: [{id: 1, category: "categoryName"}] }
```

</details>

#### insert a new category

<details>

<summary> More about </summary>

in the **`/category`** with the **methode post** you can insert a new category. **You need to have your JWT** and pass to the headers. If your token don't have the admin key in data, you can't use this route. You need to pass this json example in the body:

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

<summary> More about </summary>

in the **`/category/:id`** with the **methode put** you can update category. **You need to have your JWT** and pass it in the headers. If your token don't have the admin key in data, you can't use this route. You need to pass this json example in the body:

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

<summary> More about </summary>

in the **`/category/:id`** with the **methode delete** you can delete category. **You need to have your JWT** and pass it in the headers. If your token don't have the admin key in data, you can't use this route. You will receive this json example: 

```
[]
```

</details>

# Products route

## /products

#### get all products

<details>

<summary> More about </summary>

in the **`/products`** with the **methode get** you get all products. You will receive this json example: 

```
[{
    "id": 1,
    "productName": "The evil within",
    "productPrice": 200,
    "discountPercent": 0,
    "image": null,
    "categories": [
      {
        "id": 1,
        "category": "Horror"
      },
      {
        "id": 3,
        "category": "Action"
      },
      {
        "id": 4,
        "category": "RPG"
      }
    ]
  }]
```

</details>

#### get one product

<details>

<summary> More about </summary>

in the **`/products/:id`** with the **methode get** you can get one product. You will receive this json example: 

```
{
  "id": 1,
  "productName": "The evil within",
  "productPrice": 200,
  "productDescription": "The Evil Within is a survival horror video game developed by Tango Gameworks and published by Bethesda Softworks.The game was directed by Resident Evil series creator Shinji Mikami and was released worldwide in October 2014 for PlayStation 3, PlayStation 4, Windows, Xbox 360, and Xbox One.",
  "discountPercent": 0,
  "image": null,
  "categories": [
    {
      "id": 1,
      "category": "Horror"
    },
    {
      "id": 3,
      "category": "Action"
    },
    {
      "id": 4,
      "category": "RPG"
    }
  ]
}
```

</details>

#### update product

<details>

<summary> More about </summary>

in the **`/products/:id`** with the **methode put** you can update one product. **You need to have your JWT** and pass to the headers. If your token don't have the admin key in data, you can't use this route. You need to pass this json example in the body:

```
{productName": "The evil within",
  "productPrice": 200,
  "productDescription": "The Evil Within is a survival horror video game developed by Tango Gameworks and published by Bethesda Softworks.The game was directed by Resident Evil series creator Shinji Mikami and was released worldwide in October 2014 for PlayStation 3, PlayStation 4, Windows, Xbox 360, and Xbox One.",
  "discountPercent": 0,
  "image": null,
  "categories": [1, 2, 3]}
```


You will receive this json example: 

```
{productName": "The evil within",
  "productPrice": 200,
  "productDescription": "The Evil Within is a survival horror video game developed by Tango Gameworks and published by Bethesda Softworks.The game was directed by Resident Evil series creator Shinji Mikami and was released worldwide in October 2014 for PlayStation 3, PlayStation 4, Windows, Xbox 360, and Xbox One.",
  "discountPercent": 0,
  "image": null,
  "categories": [1, 2, 3],
  id: 1
}
```

</details>

#### delete product

<details>

<summary> More about </summary>

in the **`/products/:id`** with the **methode delete** you can delete one product. **You need to have your JWT** and pass to the headers. If your token don't have the admin key in data, you can't use this route.You will receive this json example: 

```
[]
```

</details>

