import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

(async function () {
  // Configuration
  cloudinary.config({
    cloud_name: "himanshukirodiwal",
    api_key: "928161426849933",
    api_secret: "JSIfpW4TKWMWsCcQmds1Se2Kkug", // Click 'View API Keys' above to copy your API secret
  });
});

const uploadOnCloudinary = async (localFilesPath) => {
  try {
    if (!localFilesPath) {
      return null;
    }
      //upload the files on cloudinary
      const response = await cloudinary.uploader.upload(localFilesPath, {
        resource_type: "auto",
      });
      //file has ben uploaaded successfully
      // console.log("file is uploaded on cloudinary", response.url);
      fs.unlinkSync(localFilesPath)
      return response;

  
  } catch (error) {
    fs.unlinkSync(localFilesPath) // remove the locally saved temporary files as the upload operation got failed
    return null;
  }
};

export {uploadOnCloudinary};