# Dummy API – Free Practice REST API

A **free dummy REST API** for beginners learning JavaScript, APIs, Promises, and `fetch()`.  
This API lets you practice calling endpoints, handling JSON responses, and building small projects without setting up a backend.  

No keys, no auth – just plug and play! 🚀  

---

## 🌐 Base URL
https://dummy-api-ecru.vercel.app

---

## 📑 Endpoints Overview

| Resource  | Method | Endpoint                  | Description                          |
|-----------|--------|---------------------------|--------------------------------------|
| Products  | GET    | `/products`               | Get all products                     |
| Products  | GET    | `/products/:keyword`      | Search products by keyword           |
| Products  | GET    | `/products/user/:userId`  | Get products by specific user        |
| Users     | GET    | `/users`                  | Get all users                        |
| Users     | GET    | `/users/:id`              | Get single user by ID                |

---

## 📌 Endpoints & Response Examples

### 1. Get All Products


**Response Example**
```json
[
  {
    "id": 1,
    "image": "https://via.placeholder.com/150",
    "name": "T-Shirt",
    "rating": 4.5,
    "price": 20,
    "keywords": ["clothing", "shirt"],
    "userId": 0,
    "type": "clothing",
    "sizeChart": "https://example.com/size-chart"
  },
  {
    "id": 2,
    "image": "https://via.placeholder.com/150",
    "name": "Sneakers",
    "rating": 4.8,
    "price": 60,
    "keywords": ["shoes", "footwear"],
    "userId": 1,
    "type": "clothing",
    "sizeChart": "https://example.com/size-chart"
  }
]
```

### GET /products/:keyword
/products/shoes

**Response Example**
```json
[
  {
    "id": 2,
    "image": "https://via.placeholder.com/150",
    "name": "Sneakers",
    "rating": 4.8,
    "price": 60,
    "keywords": ["shoes", "footwear"],
    "userId": 1,
    "type": "clothing",
    "sizeChart": "https://example.com/size-chart"
  }
]
```

### GET /products/user/:userId
/products/user/1

**Response Example**
```json
[
  {
    "id": 2,
    "image": "https://via.placeholder.com/150",
    "name": "Sneakers",
    "rating": 4.8,
    "price": 60,
    "keywords": ["shoes", "footwear"],
    "userId": 1,
    "type": "clothing",
    "sizeChart": "https://example.com/size-chart"
  }
]
```

### GET /users
/users

**Response Example**
```json
[
  {
    "id": 1,
    "name": "John Doe",
    "occupation": "Engineer",
    "phone": "123-456-7890"
  },
  {
    "id": 2,
    "name": "Jane Smith",
    "occupation": "Designer",
    "phone": "987-654-3210"
  }
]
```

### GET /users/:id
/user/1
**Response Example**
```json
{
  "id": 1,
  "name": "John Doe",
  "occupation": "Engineer",
  "phone": "123-456-7890"
}
```


### Using Fetch

```js
// Fetch all products
fetch('https://dummy-api-ecru.vercel.app/products')
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));

// Fetch a user by ID
fetch('https://dummy-api-ecru.vercel.app/users/1')
  .then(res => res.json())
  .then(user => console.log(user));
```

### Using Async/Await

```js
async function getProducts() {
  try {
    const res = await fetch('https://dummy-api-ecru.vercel.app/products');
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}
getProducts();
```

<p align="center">✨ Made with ❤️ for JS learners ✨</p>
