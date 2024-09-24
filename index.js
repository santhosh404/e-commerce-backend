import express from 'express';
import { connectDatabase } from './database/db.js';
import cors from 'cors';
import dotenv from 'dotenv';
import { productRoute } from './router/product.route.js';
dotenv.config();


// Initialize the express
const app = express();

//Adding middlewares
app.use(express.json());
app.use(cors({
    origin: ['https://ecommercesitelandingpage.netlify.app', 'http://localhost:5173'], // specify allowed origins
}));

//connect to db
connectDatabase();


// Defining routes
app.use('/api/v1/product', productRoute);


const PORT = process.env.PORT || 5000; // Port number for the server

app.listen(PORT, () => {
    console.log(`Welcome to the port ${PORT}`);
});