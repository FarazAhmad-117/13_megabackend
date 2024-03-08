import { asyncHandler } from "../utils/asyncHandler.js";


// POST: /api/v1/collection/create
export const createCollection =asyncHandler(async(req,res)=>{
    return res.status(200).json({
        message:"Your Collection has been added!"
    })
})



// PATCH: /api/v1/collection/update
export const updateCollection =asyncHandler(async(req,res)=>{
    return res.status(200).json({
        message:"Your Collection has been Updated!"
    })
})





// Get: /api/v1/collection/get
export const getCollection =asyncHandler(async(req,res)=>{
    return res.status(200).json({
        message:"Your Collection is here => "
    })
})



// DELETE: /api/v1/collection/delete
export const deleteCollection =asyncHandler(async(req,res)=>{
    return res.status(200).json({
        message:"Your Collection is DELETED"
    })
})







