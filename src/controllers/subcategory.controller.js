import { asyncHandler } from "../utils/asyncHandler.js";


// POST: /api/v1/subcategory/create
export const createSubCategory =asyncHandler(async(req,res)=>{
    return res.status(200).json({
        message:"Your SubCategory has been added!"
    })
})



// PATCH: /api/v1/subcategory/update
export const updateSubCategory =asyncHandler(async(req,res)=>{
    return res.status(200).json({
        message:"Your SubCategory has been Updated!"
    })
})





// Get: /api/v1/subcategory/get
export const getSubCategory =asyncHandler(async(req,res)=>{
    return res.status(200).json({
        message:"Your SubCategory is here => "
    })
})



// DELETE: /api/v1/subcategory/delete
export const deleteSubCategory =asyncHandler(async(req,res)=>{
    return res.status(200).json({
        message:"Your SubCategory is DELETED"
    })
})

