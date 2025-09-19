import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

(async function () {
  // Configuration
  cloudinary.config({
    cloud_name: "dgintwye6",
    api_key: "924126567982849",
    api_secret: "<your_api_secret>", // Click 'View API Keys' above to copy your API secret
  });
});

const uploadOnCloudinary = async (localFilesPath) => {
  try {
    if (!localFilesPath) {
      return null;
      //upload the files on cloudinary
      const response = await cloudinary.uploader.upload(localFilesPath, {
        resource_type: "auto",
      });
      //file has ben uploaaded successfully
      console.log("file is uploaded on cloudinary", response.url);
      return response.url;
    }
  } catch (erroe) {
    fs.unlinkSync(localFilesPath) // remove the locally saved temporary files as the upload operation got failed
    return null;
  }
};

export {uploadOnCloudinary};