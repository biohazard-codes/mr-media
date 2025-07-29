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

  const isEmailAlreadyExsit = await User.findOne({ email: data.email });

  if (isEmailAlreadyExsit) {
    return {
      success: false,
      message: "User already exsit",
    };
  }

  const isUserAlreadyExsit = await User.findOne({ userName: data.userName });
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

export { signup };
