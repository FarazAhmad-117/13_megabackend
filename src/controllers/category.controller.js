import { asyncHandler } from "../utils/asyncHandler.js";


// POST: /api/v1/category/create
export const createCategory =asyncHandler(async(req,res)=>{
    return res.status(200).json({
        message:"Your Category has been added!"
    })
})



// PATCH: /api/v1/category/update
export const updateCategory =asyncHandler(async(req,res)=>{
    return res.status(200).json({
        message:"Your Category has been Updated!"
    })
})





// Get: /api/v1/category/get
export const getCategory =asyncHandler(async(req,res)=>{
    return res.status(200).json({
        message:"Your Category is here => "
    })
})



// DELETE: /api/v1/category/delete
export const deleteCategory =asyncHandler(async(req,res)=>{
    return res.status(200).json({
        message:"Your Category is DELETED"
    })
})


