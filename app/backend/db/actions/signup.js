"use server";
import fs from "fs";
import path from "path";
import { v4 as uuidv4 } from "uuid";
import connectdb from "../dbConnect";
import bcrypt from "bcryptjs";
import User from "../../models/user";

async function signup(formData) {
  await connectdb();
  const file = formData.get("image");
  const extension = file.name.split(".").pop();

  const fileName = uuidv4() + "." + extension;
  const uploadPath = path.join(process.cwd(), "public", "uploads", fileName);
  const buffer = Buffer.from(await file.arrayBuffer());
  fs.writeFileSync(uploadPath, buffer);

  const hashedPassword = await bcrypt.hash(formData.get("password"), 10);

  const isEmailAlreadyExsit = await User.findOne({
    email: formData.get("email"),
  });

  if (isEmailAlreadyExsit) {
    return {
      success: false,
      message: "User already exsit",
    };
  }

  const isUserAlreadyExsit = await User.findOne({
    userName: formData.get("userName"),
  });
  if (isUserAlreadyExsit) {
    return {
      success: false,
      message: "User already exsit",
    };
  }

  const user = new User({
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    userName: formData.get("userName"),
    email: formData.get("email"),

    password: hashedPassword,
    image: fileName,
  });
  await user.save();

  return {
    success: true,

    message: "Registration successfull !",
  };
}

async function allUsers() {
  await connectdb();
  const allDataUser = await User.find({}).sort({ createdAt: -1 });
  return allDataUser;
}

async function viewUser(id) {
  await connectdb();
  const view = await User.findById(id);
  return view;
}

async function updateProfile(id, formData) {
  await connectdb();

  let user = {
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    userName: formData.get("userName"),
  };

  const file = formData.get("image");

  if (file instanceof Blob) {
    const extension = file.name.split(".").pop();
    const fileName = uuidv4() + "." + extension;
    const uploadPath = path.join(process.cwd(), "public", "uploads", fileName);
    const buffer = Buffer.from(await file.arrayBuffer());
    fs.writeFileSync(uploadPath, buffer);

    user.image = fileName;

    // Quite sus have to check this out
  }

  const updatedUser = await User.findByIdAndUpdate(id, user);

  return {
    message: "User updated successfully!",
  };
}

export { signup, allUsers, viewUser, updateProfile };
