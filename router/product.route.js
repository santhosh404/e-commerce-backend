import express from 'express';
import { getProductByIdHandler, getProductHandler, productFilterHandler } from '../controller/product.controller.js';


export const productRoute = express.Router();


productRoute.get('/get', getProductHandler);
productRoute.get('/', productFilterHandler);
productRoute.get('/:id', getProductByIdHandler);