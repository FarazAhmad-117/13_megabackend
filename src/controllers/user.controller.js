import { asyncHandler } from "../utils/asyncHandler.js"



// POST: '/api/v1/users/register'
export const registerUser = asyncHandler(async(req,res)=>{
    return res.status(200).json({
        message:"Registered User"
    })
})



// POST: '/api/v1/users/login'
export const login = asyncHandler(async(req,res)=>{
    return res.status(200).json({
        message:"You are logged in successfully!",
    })
})




// PATCH: '/api/v1/users/update'
export const update = asyncHandler(async(req,res)=>{
    return res.status(200).json({
        message:"You details have been updated !",
    })
})



