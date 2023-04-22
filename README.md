# e-commerce

This is a Nodejs/Express API that provides CRUD (Create, Read, Update, Delete) operations for managing products in an e-commerce application. The API uses MongoDB as its database to store product information.

**Installation To use this API, follow these steps:

Clone the repository to your local machine.

Install Node.js and MongoDB on your machine.

Install the project dependencies by running the following command in your terminal: npm install express mongoose nodemon --save

Create a .env file at the root of the project and add the following environment variables: PORT=3000 MONGODB_URI=mongodb://localhost:27017/ecommerce Change the PORT number to the port you want the API to run on and update the MONGODB_URI to match your MongoDB database configuration.

Start the API by running the following command in your terminal: npm start

You should see a message in your terminal indicating that the API has started and is listening on the specified port.

**Usage The following API endpoints are available:

Endpoint HTTP Method Description /products GET Get a list of all products. /products/:id GET Get a single product by ID. /products POST Create a new product. /products/:id PUT Update an existing product by ID. /products/:id DELETE Delete a product by ID.

To use the API, you can make HTTP requests to these endpoints using a tool like Postman or cURL.

**Credits

This API was created by me. Feel free to use it for any purpose.
