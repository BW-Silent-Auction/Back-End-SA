# SILENT AUCTION

## VISION
Create an application that connects buyers and sellers for transactions in a silent auction format.

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
No authentication required, returns a JSON web token

Required fields: `username`, `password`

### **Registration**
`POST /api/buyers/register`

`POST /api/sellers/register`

Example request body:
```
{
	"username": "alex",
	"password": "password",
    "email": "alex@alex.com,
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
        "description": "Playstation 4",
        "starting_price": 189.95,
        "image": null,
        "active": 1,
        "created_at": "2019-09-22 11:42:12"
    },
    {
        "id": 2,
        "seller_id": 5,
        "title": "iPhone 11",
        "description": "The greatest iPhone yet",
        "starting_price": 1150.95,
        "image": null,
        "active": 1,
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
    "starting_price": 1150.95
}
```

Required fields: `seller_id`, `title`, `description`, `starting_price`

Returns the new Product object. Example response body:

```
{
    "id": 2,
    "seller_id": 5,
    "description": "The greatest iPhone yet",
    "starting_price": 1150.95,
    "image": null,
    "active": 1,
    "created_at": "2019-09-23 22:37:57"
}
```

### **Get product by product ID**

`GET /api/products/:id`

Requires authentication. 

req.header.authorization = token;

Returns the Product object. Example response body:

```
{
    "id": 2,
    "seller_id": 5,
    "description": "The greatest iPhone yet",
    "starting_price": 1150.95,
    "image": null,
    "active": 1,
    "created_at": "2019-09-23 22:37:57"
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
        "id": 1,
        "product_id": 2,
        "buyer_id": 1,
        "bid_amount": 1160.95
    },
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
        "description": "The greatest iPhone yet",
        "starting_price": 1150.95,
        "image": null,
        "active": 1,
        "created_at": "2019-09-23 22:37:57"
    },
]
```

## Other potentially useful endpoints

### Delete product by ID

`DEL /api/products/:id`

Requires authorization.

### Edit product by ID

`PUT /api/products/:id`

Requires at least one field to update. 

Cannot created_at, id, seller_id.

### Delete buyer by ID

`DEL /api/buyers/:id`

### Notes
- 

### Todo
- Correct login endpoints to only send back appropriate information
- Correct register to return the user
- Practice image upload with a mock front-end to determine proper db data-type
- Add 'title' field to products db
- Create delete user endpoint

### Notepad
