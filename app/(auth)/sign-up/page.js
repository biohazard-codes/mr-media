"use client";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { toast } from "react-hot-toast";

function Signup() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const [selectedImage, setSelectedImage] = useState();

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    const extension = file.name.split(".").pop();

    if (extension === "jpg" || extension === "png" || extension === "jpeg") {
      setSelectedImage(file);
      setValue("image", file);
    } else toast.error("Only image is allowed.");
    console.log(event.target.files[0]);
  };

  const onSubmit = (data) => console.log(data);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-950">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="text-center flex flex-col justify-between items-center bg-slate-900 w-full max-w-md rounded-[6px] p-10 shadow shadow-indigo-900"
      >
        <h1 className="font-medium text-3xl mb-6">Register</h1>

        <img
          src={
            selectedImage
              ? URL.createObjectURL(selectedImage)
              : "/profilePlaceholder.png"
          }
          className="h-28 w-28 mb-4 rounded-full object-cover"
          alt="Profile"
        ></img>
        <label
          htmlFor="input-file"
          className="bg-slate-700 mb-4 py-2 px-4 rounded-[4px]"
        >
          {" "}
          Upload Profile Picture
        </label>
        <input
          id="input-file"
          type="file"
          onChange={handleImageChange}
          {...register("image")}
          className="hidden"
        />

        <div className="flex flex-row justify-between gap-2 items-center">
          <input
            type="text"
            placeholder="First Name"
            className="border border-slate-800 py-2 px-2 w-full rounded-[10px] mb-4 focus:outline-none focus:ring-2 focus:ring-slate-800 focus:border-slate-900"
            {...register("firstName")}
          ></input>

          <input
            type="text"
            placeholder="last Name"
            className="border border-slate-800 py-2 px-2 w-full rounded-[10px] mb-4 focus:outline-none focus:ring-2 focus:ring-slate-800 focus:border-slate-900"
            {...register("lastName")}
          ></input>
        </div>
        <input
          type="text"
          className="border border-slate-800 py-2 px-2 w-full rounded-[10px] mb-4 focus:outline-none focus:ring-2 focus:ring-slate-800 focus:border-slate-900"
          placeholder="User Name"
          {...register("userName")}
        />
        <input
          type="email"
          className="border border-slate-800 py-2 px-2 w-full rounded-[10px] mb-4 focus:outline-none focus:ring-2 focus:ring-slate-800 focus:border-slate-900"
          placeholder="email@abc.com"
          {...register("email")}
        />
        <input
          type="password"
          className="border border-slate-800 py-2 px-2 w-full rounded-[10px] mb-4 focus:outline-none focus:ring-2 focus:ring-slate-800 focus:border-slate-900"
          placeholder="Password"
          {...register("password")}
        />
        <p className="mb-6">
          Already have an account?{" "}
          <span className="cursor-pointer text-blue-400">Login</span>
        </p>
        <button className="bg-slate-700 text-[18px] py-2 px-6 rounded-2xl shadow shadow-indigo-950 cursor-pointer">
          Register
        </button>
      </form>
    </div>
  );
}

export default Signup;
