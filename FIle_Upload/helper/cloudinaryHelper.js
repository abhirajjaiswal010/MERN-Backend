import cloudinary from "../config/cloudinary.js";

export const uploadToCloudinary=async(filePath)=>{
    try {
        const result=await  cloudinary.uploader.upload(filePath)

        return{
            url:result.secure_url,
            publicId:result.public_id
        }

        
    } catch (e) {
        console.log('error from uploading cloudinary',e)
        throw new Error("error while uploading to cloudinary");
        
    }
}