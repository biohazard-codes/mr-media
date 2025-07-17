"use client";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import Link from "next/link";

function Signup() {
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

    const extension = file.name.split(".").pop();

    if (extension === "jpg" || extension === "png" || extension === "jpeg") {
      setSelectedImage(file);
      setValue("image", file);
    } else {
      toast.error("Only image is allowed.");
    }
  };
  const onSubmit = (data) => console.log(data);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-950">
      <Toaster />
      <form
        className="text-center flex flex-col justify-between items-center bg-slate-900 mx-6 w-110 rounded-[6px] p-10 shadow shadow-indigo-900"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="font-medium text-3xl mb-6">Register</h1>
        <label htmlFor="inputFile">
          <img
            src={
              selectedImage
                ? URL.createObjectURL(selectedImage)
                : "/profilePlaceholder.png"
            }
            className="h-28 w-28 mb-4 rounded-full object-cover cursor-pointer"
            alt="Profile Preview"
          />
        </label>
        {/* <label htmlFor="inputFile" className="">Upload Profile Picture</label> */}
        <input
          type="file"
          id="inputFile"
          className="mb-4 text-white hidden"
          onChange={handleImageChange}
        />
        <div className="flex flex-row justify-between gap-2 items-center">
          <input
            type="text"
            placeholder="First Name"
            className="border border-slate-800 py-2 px-2 w-full rounded-[10px] mb-4 focus:outline-none focus:ring-2 focus:ring-slate-800 focus:border-slate-900"
            {...register("firstName", {
              required: "Name is required",
              minLength: {
                value: 3,
                message: "Name must be at least 3 characters",
              },
            })}
          ></input>

          <input
            type="text"
            placeholder="last Name"
            className="border border-slate-800 py-2 px-2 w-full rounded-[10px] mb-4 focus:outline-none focus:ring-2 focus:ring-slate-800 focus:border-slate-900"
            {...register("lastName", {
              required: "Last Name is required",
              minLength: {
                value: 3,
                message: " Last Name must be at least 3 characters",
              },
            })}
          ></input>
        </div>
        {errors.firstName && (
          <p className="text-red-600 mb-4 mt-[-10px]">
            {errors.firstName.message}
          </p>
        )}

        <input
          type="text"
          className="border border-slate-800 py-2 px-2 w-full rounded-[10px] mb-4 focus:outline-none focus:ring-2 focus:ring-slate-800 focus:border-slate-900"
          placeholder="User Name"
          {...register("userName", {
            required: "UserName is required",
            minLength: {
              value: 3,
              message: " UserName must be at least 5 characters",
            },
          })}
        />
        {errors.userName && (
          <p className="text-red-600 mb-4 mt-[-10px]">
            {errors.userName.message}
          </p>
        )}
        <input
          type="email"
          className="border border-slate-800 py-2 px-2 w-full rounded-[10px] mb-4 focus:outline-none focus:ring-2 focus:ring-slate-800 focus:border-slate-900"
          placeholder="email@abc.com"
          {...register("email", {
            required: "Email is required",
          })}
        />

        {errors.email && (
          <p className="text-red-600 mb-4 mt-[-10px]">{errors.email.message}</p>
        )}

        <input
          type="password"
          className="border border-slate-800 py-2 px-2 w-full rounded-[10px] mb-4 focus:outline-none focus:ring-2 focus:ring-slate-800 focus:border-slate-900"
          placeholder="Password (at least 6 charachter)"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: " Password must be at least 6 characters",
            },
          })}
        />

        {errors.password && (
          <p className="text-red-600 mb-4 mt-[-10px]">
            {errors.password.message}
          </p>
        )}

        <p className="mb-6">
          Already have an account?{" "}
          <Link href="/sign-in">
            <span className="cursor-pointer text-blue-400">Login</span>
          </Link>
        </p>

        <button className="bg-slate-700 text-[18px] py-2 px-6 rounded-2xl shadow shadow-indigo-950 cursor-pointer">
          Register
        </button>
      </form>
    </div>
  );
}

export default Signup;
