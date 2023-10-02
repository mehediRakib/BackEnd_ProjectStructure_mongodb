
const mongoose=require('mongoose');
const productModel=require('../Models/ProductModel');

//! Ceate Product
exports.productCreate=async (req,res)=>{
    try{
       let reqbody= req.body;
      let data= await productModel.create(reqbody);
        res.status(200).json(
            {'status':"success",
                "data":"ok",
                data:data
            }
        )
    }catch(e){

        res.status(200).json(
            {'status':"error",
                error:toString()
            }
        )
    }

}