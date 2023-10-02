const express=require('express');
const routes=express.Router();

const controller=require('../Controllers/productCreate');

// Create new product End point
routes.post('/create',controller.productCreate);

module.exports=routes;
