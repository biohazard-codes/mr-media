"use client";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { IconPhotoPlus } from "@tabler/icons-react";
import { IconLibraryPhoto } from "@tabler/icons-react";
import { createPost } from "@/app/backend/db/actions/post";
import { redirect } from "next/dist/server/api-utils";

function Post() {
  const fle = "sf";
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const localData = localStorage.getItem("Current User");
    if (!localData) {
      redirect("sign-in");
    } else {
      setUserId(JSON.parse(localData).id);
    }
  }, []);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm();
  const [selectedImage, setSelectedImage] = useState();

  const handleResetClick = () => {
    reset();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (!file) return;

    const extension = file.name.split(".").pop();

    if (extension === "jpg" || extension === "png" || extension === "jpeg") {
      const img = new Image();
      img.src = URL.createObjectURL(file);

      img.onload = () => {
        if (img.width >= 500 && img.height >= 500) {
          setSelectedImage(file);
          setValue("image", file);
        } else {
          toast.error("Image must be at least 800x600 resolution.");
        }
      };
    } else {
      toast.error("Only image is allowed.");
    }
  };
  async function onSubmit(data) {
    if (!selectedImage) {
      toast.error("Post is required");
      return;
    }

    const formData = new FormData();
    formData.append("caption", data.caption);
    formData.append("image", data.image);
    formData.append("tags", data.tags);
    formData.append("author", userId);

    try {
      let result = await createPost(formData);
      toast.success("Successfully Posted!");
      reset();
      setSelectedImage(null);
    } catch (error) {
      toast.error("Failed to post!");
    }

    //  console.log(result);
  }

  return (
    <section className="md:px-96">
      <Toaster />
      <h1 className=" flex font-medium text-3xl text-left md:mb-2 md:mt-8 mt-16 pl-2 mb-4">
        <IconPhotoPlus stroke={2} className="text-3xl mt-2" /> &nbsp; Create
        Post
      </h1>
      <form className="md:p-10 space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <label className="mb-4 block"> Caption </label>
        <textarea
          className="h-40 w-full border border-gray-700 shadow shadow-blue-800 rounded p-2 bg-gray-800"
          {...register("caption")}
        ></textarea>

        <label className=" block">Add Photos</label>

        <label
          className="flex flex-col justify-center items-center bg-gray-800  cursor-pointer rounded-2xl shadow shadow-blue-800  "
          htmlFor="fileUpload"
        >
          {selectedImage ? (
            <img
              src={
                selectedImage
                  ? URL.createObjectURL(selectedImage)
                  : "/profilePlaceholder.png"
              }
              className="object-contain p-0 "
            ></img>
          ) : (
            <div className="md:py-24 py-10">
              <IconLibraryPhoto stroke={1} size={120} className=" mb-2" />

              <p className="mb-2">Upload Photo</p>
              <p className="text-gray-500">PNG, JPG, JPEG</p>
            </div>
          )}
        </label>

        <input
          type="file"
          className="hidden"
          id="fileUpload"
          onChange={handleImageChange}
        />
        <label className="  block">Add Tags (seperated by " , ")</label>
        <input
          type="text"
          placeholder="Skill, Art, Code"
          className="p-2 w-full  border-gray-700 shadow shadow-blue-800 rounded bg-gray-800 mb-10"
          {...register("tags")}
        ></input>
        <div className="flex flex-row text-right justify-end mb-4">
          <button
            className="rounded bg-gray-800   px-8 py-2 cursor-pointer"
            onClick={handleResetClick}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded bg-sky-600 ml-6 px-8 py-2 cursor-pointer"
          >
            Post
          </button>
        </div>
      </form>
    </section>
  );
}
export default Post;
