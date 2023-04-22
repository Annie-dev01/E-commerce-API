const express = require('express');
require('dotenv').config();
const connectDB = require('./db/connect')
const productRouter = require('./routes/products')
const app = express();
app.use(express.json());
app.use(express.urlencoded ({extended: true}))
const port = 3000;

app.use('/', productRouter)
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, console.log(`Server is listening on port ${port}...`))
    } catch (error) {
        console.log(error)
    }
}

start();

