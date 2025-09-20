import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
import {uploadOnCloudinary} from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const registerUser = asyncHandler(async (req, res) => {
  // get use details form frontend
  // validation - not empty
  // check if user already exists: username, email
  //check for images, check for avatar
  // upload them to cloudinary, avatar
  // create user object - create entry in db
  // remove password and refresh toke field form response
  // check for user creation
  // return response

  const { fullName, email, username, password } = req.body;
  console.log("email", email);

  if (
    [
      fullName === "" || email === "" || username === "" || password === "",
    ].some((field) => field?.trim() === "")
  ) {
    throw new ApiError(400, "all fields are required");
  }

  const existedUser = User.findOne({ $or: [{ email }, { username }] });
  if (existedUser) {
    throw new ApiError(409, "user already exists");
  }

  const avatarLocalPath = req.files?.avatar[0]?.path;
  const coverImageLocalPath = req.files?.coverImage[0]?.path;

  if(!avatarLocalPath)
  {
    throw new ApiError(400, "Full name is required")
  }

  if(!coverImageLocalPath)
  {
    throw new ApiError(400, "cover image are required")

  }

  const avatar = await uploadOnCloudinary(avatarLocalPath)
  const coverImage = await uploadOnCloudinary(coverImageLocalPath)

  if(!avatar) {
    throw new ApiError(400, "Full name is required")
  }

  const user = awaitUser.create({
    fullName,
    avatar: avatar.url,
    coverImage: coverImage?.url || "",
    email,
    password,
    username: username.toLowerCase()
})

const createdUser = await User.findById(user._id).sselect(
    "-password -refreshToken"
)

if(!createdUser) {
    throw new ApiError(500, "user creation failed")

}

return res.status(201).json(
    new ApiResponse(201, createdUser, "user created successfully")
);



});

export default registerUser;
