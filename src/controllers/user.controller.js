import { Address } from "../models/Address.model.js";
import { User } from "../models/User.model.js";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js"



// POST: '/api/v1/users/register'
// export const registerUser = asyncHandler(async(req,res)=>{
//     const {fullName,username,email,password,phoneNumber,address} = req.body;
//     if([fullName,username,email,password,phoneNumber].some(field=>field.trim() === "") || !fullName || !username || !email || !password || !phoneNumber){
//         throw new ApiError(400,"All fields must be provided");
//     }
//     const testUser = await User.findOne({
//         $or:[{email},{username}]
//     })
//     if(testUser){
//         throw new ApiError(409,"User with the email or username already exists");
//     }
    


//     // Creating User in db
//     const user = await User.create({fullName,username,email,password,phoneNumber});

//     return res.status(200).json({
//         message:"Registered User",
//         data:user
//     });
// })


export const registerUser = asyncHandler(async (req, res) => {
    const { fullName, username, email, password, phoneNumber, address } = req.body;

    // Validate required fields
    if (!fullName || !username || !email || !password || !phoneNumber || !address) {
        throw new ApiError(400, 'All fields are required');
    }

    // Check if the user already exists
    let existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
        throw new ApiError(400, 'User with the same email or username already exists');
    }

    // Create a new address document
    const newAddress = new Address({
        ...address
    });
    const savedAddress = await newAddress.save();
    if(!savedAddress){
        throw new ApiError(500,"There was an error saving address");
    }

    // Create a new user document
    const newUser = new User({
        fullName,
        username,
        email,
        password,
        phoneNumber,
        address: savedAddress._id // Associate the address with the user
    });
    const savedUser = await newUser.save();

    // Remove sensitive information from the saved user object
    const userResponse = {
        _id: savedUser._id,
        fullName: savedUser.fullName,
        username: savedUser.username,
        email: savedUser.email,
        phoneNumber: savedUser.phoneNumber,
        address: savedAddress // Include the address details
    };

    res.status(201).json({
        success: true,
        user: userResponse
    });
});


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



