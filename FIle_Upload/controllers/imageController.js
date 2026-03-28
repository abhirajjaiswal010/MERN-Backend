import { uploadToCloudinary } from "../helper/cloudinaryHelper.js";
import { ImageModel, ImageModel as img } from "../models/image.js";

export const uploadImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        msg: "file is required",
      });
    }

    const { url, publicId } = await uploadToCloudinary(req.file.path);

    const newlyUploadedImage = new ImageModel({
      url,
      publicId,
      uploadBy: req.userInfo.id || req.userInfo.userId || req.userInfo._id,
    });

    await newlyUploadedImage.save();

    res.status(200).json({
      success: true,
      message: "Image Uploaded Successfully",
      image: newlyUploadedImage,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      msg: "something went wrong! please try  again",
    });
  }
};
