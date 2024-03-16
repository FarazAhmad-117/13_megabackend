import {v2 as cloudinary} from 'cloudinary'
import fs from 'fs';


cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.CLOUD_API_KEY, 
    api_secret: process.env.CLOUD_API_SECRET 
});

export const uploadOnCloud = async (localFilePath)=>{
    try {
        if(!localFilePath){
            return null;
        }
        const response = await cloudinary.uploader.upload(localFilePath,{
            resource_type:"auto"
        });
        console.log('File uploaded successfully',response.url);
        return response;
    } catch (error) {
        // fs.unlinkSync(localFilePath);
        console.log("Error Uploading Image",error);
        return null;
    }
}

export const deleteFromCloud = async(fileId)=>{
    try{
        await cloudinary.uploader.destroy(fileId);
        return true;
    }catch(error){
        console.log("Error Deleting Image",error);
        return null;
    }
}


