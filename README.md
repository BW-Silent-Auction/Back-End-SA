# SILENT AUCTION

## VISION
Create an application that connects buyers and sellers for transactions in a silent auction format.

## ABOUT
To contribute or utilize this project, clone and download the git repository. Run `npm install` to download the necessary dependencies. Type `npm run server` in the command line to start the server on localhost:4200. Familiarize yourself with the file-structure and enjoy!

---

## HEROKU BASE_URL
https://bw-silent-auction.herokuapp.com/

## Endpoints

### **Authentication**
`POST /api/buyers/login`

`POST /api/sellers/login`

Example request body:
```
{
	"username": "alex",
	"password": "password"
}
```
No authentication required. Returns an Object with user and token key:value pairs. Example response body:

```
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
    "user": {
        "id": 9,
        "username": "alex",
        "email": "alex@alex.com",
        "first_name": "Alex",
        "last_name": "Gordon"
    }
}
```

Required fields: `username`, `password`

### **Registration**
`POST /api/buyers/register`

`POST /api/sellers/register`

Example request body:
```
{
    "username": "alex",
    "password": "password",
    "email": "alex@alex.com",
    "first_name": "Alex",
    "last_name": "Gordon"
}
```
No authentication required, returns a User object

Required fields: `username`, `password`, `email`, `first_name`, `last_name`

### **Get all products**
`GET /api/products`

Requires authentication. Request header should be structured as follows:

*jwt = JSON web token issued at login*

```
{
    "authorization": "jwt"
}
```

Returns an array of all products from database. Example response body:

```
[
    {
        "id": 1,
        "seller_id": 3,
        "title": "Playstation 4",
        "desccription": "The fourth installment of the best console to date",
        "starting_price": 189.95,
        "image": null,
        "duration": 7,
        "active": true,
        "created_at": "2019-09-22 11:42:12"
    },
    {
        "id": 2,
        "seller_id": 5,
        "title": "iPhone 11",
        "description": "The greatest iPhone yet",
        "starting_price": 1150.95,
        "image": null,
        "duration": 5,
        "active": true,
        "created_at": "2019-09-23 22:37:57"
    },
]
```

### **Post product for sale**

`POST /api/products`

Requires authentication. 

req.header.authorization = token;

Example request body:

```
{
    "seller_id": 5,
    "title": "iPhone 11",
    "description": "The greatest iPhone yet",
    "image": file,
    "starting_price": 1150.95,
    "duration": 5
}
```

Required fields: `seller_id`, `title`, `description`, `starting_price`

Returns the new Product object. Example response body:

```
{
    "id": 2,
    "seller_id": 5,
    "title": "iPhone 11",
    "description": "The greatest iPhone yet",
    "starting_price": 1150.95,
    "image": url,
    "duration": 5,
    "active": true,
    "created_at": "2019-09-23 22:37:57"
}
```

### **Get product by product ID**

`GET /api/products/:id`

Requires authentication.

req.header.authorization = token;

Returns the Product object with all bids for that product. Example response body:

```
{
    "id": 2,
    "seller_id": 5,
    "title": "iPhone 11",
    "description": "The greatest iPhone yet",
    "starting_price": 1150.95,
    "image": null,
    "duration": 5,
    "active": true,
    "created_at": "2019-09-23 22:37:57",
    "bids": [
        {
            "id": 2,
            "product_id": 2,
            "buyer_id": 2,
            "bid_amount": 1165.95,
            "details": {
                "id": 2,
                "username": "camalv",
                "email": "cameron@me.com",
                "first_name": "Cameron",
                "last_name": "Alvarado"
            },
        },
        {
            "id": 3,
            "product_id": 2,
            "buyer_id": 3,
            "bid_amount": 1170.95,
            "details": {
                "id": 3,
                "username": "dmaack123",
                "email": "dominique@me.com",
                "first_name": "Dominique",
                "last_name": "Maack"
            },
        },
        {
            "id": 12,
            "product_id": 2,
            "buyer_id": 4,
            "bid_amount": 1180.95,
            "details": {
                "id": 4,
                "username": "chaonyc",
                "email": "chao@me.com",
                "first_name": "Chao",
                "last_name": "Ji"
            },
        },
    ];
}
```

### **Get product bids**

`GET /api/products/:id/bids`

Requires authentication. 

req.header.authorization = token;

Returns an Array of all bids placed on a specific product. Example response body:

```
[
    {
        "id": 2,
        "product_id": 2,
        "buyer_id": 2,
        "bid_amount": 1165.95
    },
    {
        "id": 3,
        "product_id": 2,
        "buyer_id": 3,
        "bid_amount": 1170.95
    },
    {
        "id": 12,
        "product_id": 2,
        "buyer_id": 4,
        "bid_amount": 1180.95
    }
]
```

### **Post bid**

`POST /api/products/:id/bids`

Requires authentication. 

req.header.authorization = token;

Example request body:

```
{
    "buyer_id": 6,
    "bid_amount": 1190.95
}
```

Required fields: `buyer_id`, `bid_amount`

### **Get all products by seller ID**

`GET /api/sellers/:id/auctions`

Requires authentication. 

req.header.authorization = token;

Returns an Array of all products previously posted by a specific seller. Example response body:

```
[
    {
        "id": 2,
        "seller_id": 5,
        "title": "iPhone 11",
        "description": "The greatest iPhone yet",
        "starting_price": 1150.95,
        "image": null,
        "duration": 7,
        "active": true,
        "created_at": "2019-09-23 22:37:57"
    },
]
```

## Other potentially useful endpoints

### Delete product by ID

`DEL /api/products/:id`

Requires authorization

### Edit product by ID

`PUT /api/products/:id`

Requires authorization

Requires at least one field to update. 

Cannot edit created_at, id, seller_id.

### Delete buyer by ID

`DEL /api/buyers/:id`

Requires authorization.

## HTTP status codes

- `200 OK`
    - The request has succeeded
- `201 Created`
    - The request succeeded and the new resource has been created
- `400 Bad Request`
    - The server could not understand the request due to invalid syntax
    - The most likely cause is an improper request body
- `401 Unauthorized`
    - No authentication header was provided with the request
- `404 Not found`
    - The server could not find the requested resource
- `500 Internal server error`
    - The server has encountered a situation it doesn't know how to handle
