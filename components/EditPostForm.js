"use client";
import { updatePost } from "@/app/backend/db/actions/post";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast, Toaster } from "react-hot-toast";
import { IconFilePencil } from "@tabler/icons-react";
import { redirect } from "next/dist/server/api-utils";
import { RedirectType } from "next/navigation";
import { useRouter } from "next/navigation";

function EditPostForm({ user, id }) {
  const router = useRouter();

  useEffect(() => {
    const localData = localStorage.getItem("Current User");

    const storedId = JSON.parse(localData).id;
    if (user.author._id !== storedId) {
      router.push(`/profile/view/${user.author._id}`);
      console.log(user.author._id);
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

  const handleResetClick = () => {
    reset();
  };

  async function onSubmit(data) {
    const formData = new FormData();
    formData.append("caption", data.caption);
    formData.append("image", data.image);
    formData.append("tags", data.tags);

    const result = await updatePost(id, formData);

    console.log(result);
    toast.success("Post updated successfully!");

    router.push(`/post/view/${id}`);
  }

  return (
    <section className="md:px-96">
      <Toaster />
      <h1 className=" flex font-medium text-3xl text-left md:mb-2 md:mt-8 mt-16 pl-2 mb-4">
        <IconFilePencil stroke={2} className="text-3xl mt-2" /> &nbsp; Edit Post
      </h1>
      <form className="md:p-10 space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <label className="mb-4 block"> Caption </label>
        <textarea
          className="h-40 w-full border border-gray-700 shadow shadow-blue-800 rounded p-2 bg-gray-800"
          defaultValue={user.caption}
          {...register("caption")}
        ></textarea>

        <label className=" block">Edit Post</label>

        <label
          className="flex flex-col justify-center items-center bg-gray-800  cursor-pointer rounded-2xl shadow shadow-blue-800  "
          htmlFor="fileUpload"
        >
          {
            <img
              src={
                selectedImage
                  ? URL.createObjectURL(selectedImage)
                  : `/posts/${user.image}`
              }
              className="object-contain max-h-56   p-0.5"
            />
          }
        </label>

        <input
          type="file"
          className="hidden"
          id="fileUpload"
          onChange={handleImageChange}
        />
        <label className="  block">Edit Tags (seperated by " , ")</label>
        <input
          type="text"
          placeholder="Skill, Art, Code"
          className="p-2 w-full  border-gray-700 shadow shadow-blue-800 rounded bg-gray-800 mb-10"
          defaultValue={user.tags}
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
            Edit
          </button>
        </div>
      </form>
    </section>
  );
}

export default EditPostForm;
