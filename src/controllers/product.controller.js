import { Product } from "../models/Product.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js";
import { deleteImage } from "../utils/deleteImage.js";
import { uploadOnCloud } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";


// POST: /api/v1/products/create
export const createProduct =asyncHandler(async(req,res)=>{
    const { name, slug, description, price, comparePrice, quantity, variation } = req.body;
    // Getting Image Urls from images
    const imagePaths = Array.from(req.files?.map(img=>img.path));
    const variations = Array.from(variation.map(v=>{
        return JSON.parse(v);
    }))
    const deleteLocalImages = ()=>{
        imagePaths.map(m=>{
            deleteImage(m);
        })
    }
    
    // Checking if all details are there
    if([name,slug,description,price].some(field=>field?.trim() === "") || !name || !description || !slug || !price){
        deleteLocalImages();
        throw new ApiError(400,"Name, Slug, Price and Description are must Required Fields");
    }

    // Check if user is admin (implement your authorization logic here)
    if (!req.user || !req.user?.role === "admin") {
        deleteLocalImages();
        res.status(401).json({ message: 'Unauthorized to create product' });
        return;
    }

    const existedProduct = await Product.findOne({
        $or:[{slug},{name}]
    });
    if(existedProduct){
        deleteLocalImages();
        throw new ApiError(409,"A Product with this name already exists")
    }

    // Before saving the product uploading images over cloud and saving its ids
    const imageUrls = [];
    const imageIds = [];
    const uploadedImages = await Promise.all(
        imagePaths.map(async (img) => uploadOnCloud(img))
    );
    uploadedImages.forEach((image) => {
        imageUrls.push(image.url);
        imageIds.push(image.public_id);
    })
    
    if(!imagePaths.length || !imageIds.length || imageIds.length !== imagePaths.length){
        deleteLocalImages();
        throw new ApiError(500,"Error Uploading Images");
    }

    // Deleting images
    deleteLocalImages();

    // Creating new Product
    const product = await Product.create({
        name,
        slug,
        description,
        price,
        comparePrice,
        isActive:req.body.isActive || false,
        imageUrls,
        imageIds,
        quantity,
        variations
    });

    if(!product){
        throw new ApiError(500,"Could not create A new Product in Database")
    }

    res
    .status(201)
    .json(new ApiResponse(
        201,
        {product},
        "Product Created Successfully"
    ))
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







