import { asyncHandler } from "../utils/asyncHandler.js";


// POST: /api/v1/products/create
export const createProduct =asyncHandler(async(req,res)=>{
    return res.status(200).json({
        message:"Your Product has been added!"
    })
})



// PATCH: /api/v1/products/update
export const updateProduct =asyncHandler(async(req,res)=>{
    return res.status(200).json({
        message:"Your Product has been Updated!"
    })
})





// Get: /api/v1/products/get
export const getProduct =asyncHandler(async(req,res)=>{
    return res.status(200).json({
        message:"Your Product is here => "
    })
})



// DELETE: /api/v1/products/delete
export const deleteProduct =asyncHandler(async(req,res)=>{
    return res.status(200).json({
        message:"Your Product is DELETED"
    })
})







