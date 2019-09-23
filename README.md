# SILENT AUCTION

## VISION
Create an application that connects buyers and sellers for transactions in a silent auction format.

---

## HEROKU BASE_URL
https://bw-silent-auction.herokuapp.com/

## API Spec
The preferred JSON object to be returned by the APU is structured as follows:

### Buyer Login

### Buyer Register

### Seller Login

### Seller Register

### Products

## Endpoints

### Authentication
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

### Registration
`POST /api/buyers/register`

`POST /api/sellers/register`

Example request body:
```
{
	"username": "alex",
	"password": "password",
    "email": "alex@alex.com
}
```
No authentication required, returns a User object

Required fields: `username`, `password`, `email`

### Get all products
`GET /api/products`

Requires authentication




### Notes
- Right now we are not asking for a first_name or last_name field at register. If we want to use this information for front-end UI we would need to collect at registration.
- Right now get all products will return all products listed in the database. I think it should be up to the front-end to sort whether the status is actice but I can also filter to send back only active products (or I could set up an additional endpoint to send all, whether active or not)

- 

### Todo
- Host on Heroku
- Correct login endpoints to only send back appropriate information
- Practice image upload with a mock front-end to determine proper db data-type
- Add first_name and last_name to registration form


### Notepad
