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

async function getPostsByAuthor(authorId) {
  await connectdb();
  const userPosts = await Post.find({ author: authorId })
    .populate("author")
    .sort({ createdAt: -1 });
  return JSON.parse(JSON.stringify(userPosts));
}

async function postPreview(id) {
  const singlePost = await Post.findById(id).populate("author");
  return JSON.parse(JSON.stringify(singlePost));
}

async function deletePost(id) {
  const removePost = await Post.findByIdAndDelete(id);
  return JSON.parse(JSON.stringify(removePost));
}

async function updatePost(id, formData) {
  await connectdb();

  let post = {
    caption: formData.get("caption"),

    tags: formData.get("tags"),
  };

  const file = formData.get("image");

  if (file instanceof Blob) {
    const extension = file.name.split(".").pop();
    const fileName = uuidv4() + "." + extension;
    const uploadPath = path.join(process.cwd(), "public", "posts", fileName);
    const buffer = Buffer.from(await file.arrayBuffer());
    fs.writeFileSync(uploadPath, buffer);

    post.image = fileName;

    // Quite sus have to check this out
  }

  const updatedPost = await Post.findByIdAndUpdate(id, post).populate("author");

  return JSON.parse(JSON.stringify(updatedPost));
}

export {
  createPost,
  allPosts,
  getPostsByAuthor,
  postPreview,
  deletePost,
  updatePost,
};
