import { asyncHandler } from "../utils/asyncHandler.js";


// POST: /api/v1/userreview/create
export const createUserReview =asyncHandler(async(req,res)=>{
    return res.status(200).json({
        message:"Your UserReview has been added!"
    })
})



// PATCH: /api/v1/userreview/update
export const updateUserReview =asyncHandler(async(req,res)=>{
    return res.status(200).json({
        message:"Your UserReview has been Updated!"
    })
})





// Get: /api/v1/userreview/get
export const getUserReview =asyncHandler(async(req,res)=>{
    return res.status(200).json({
        message:"Your UserReview is here => "
    })
})



// DELETE: /api/v1/userreview/delete
export const deleteUserReview =asyncHandler(async(req,res)=>{
    return res.status(200).json({
        message:"Your UserReview is DELETED"
    })
})







