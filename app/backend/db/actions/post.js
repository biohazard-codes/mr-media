"use server";
import fs from "fs";
import path from "path";
import { v4 as uuidv4 } from "uuid";
import Post from "../../models/post";
import User from "../../models/user";
import connectdb from "../dbConnect";
async function createPost(formData) {
  await connectdb();
  const file = formData.get("image");
  const extension = file.name.split(".").pop();

  const fileName = uuidv4() + "." + extension;
  const uploadPath = path.join(process.cwd(), "public", "posts", fileName);
  const buffer = Buffer.from(await file.arrayBuffer());
  fs.writeFileSync(uploadPath, buffer);

  const post = new Post({
    caption: formData.get("caption"),
    tags: formData.get("tags"),
    author: formData.get("author"),
    image: fileName,
  });
  await post.save();

  return {
    success: true,

    message: "Posted  successfully !",
  };
}

async function allPosts() {
  await connectdb();
  const allPostedPosts = await Post.find({})
    .populate("author")
    .sort({ createdAt: -1 });
  return allPostedPosts;
}

export { createPost, allPosts };
