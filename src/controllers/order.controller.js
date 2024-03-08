import { asyncHandler } from "../utils/asyncHandler.js";


// POST: /api/v1/order/create
export const createOrder =asyncHandler(async(req,res)=>{
    return res.status(200).json({
        message:"Your Order has been added!"
    })
})



// PATCH: /api/v1/order/update
export const updateOrder =asyncHandler(async(req,res)=>{
    return res.status(200).json({
        message:"Your Order has been Updated!"
    })
})





// Get: /api/v1/order/get
export const getOrder =asyncHandler(async(req,res)=>{
    return res.status(200).json({
        message:"Your Order is here => "
    })
})



// DELETE: /api/v1/order/delete
export const deleteOrder =asyncHandler(async(req,res)=>{
    return res.status(200).json({
        message:"Your Order is DELETED"
    })
})







