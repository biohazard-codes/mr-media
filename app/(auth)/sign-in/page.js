"use client";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    // setValue,
    // reset,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    await console.log(data);
    // let result = await logIn(data);
    // if (result.success) {
    //   localStorage.setItem("Current User", JSON.stringify(result.user));
    //   redirect("/");
    // }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-950">
      <form
        className="text-center flex flex-col justify-between items-center bg-slate-900 mx-6 w-110 rounded-[6px] p-10 shadow shadow-indigo-900"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="font-medium text-3xl mb-6">Login</h1>
        <input
          type="text"
          className="border border-slate-800 py-2 px-2 w-full rounded-[10px] mb-4 focus:outline-none focus:ring-2 focus:ring-slate-800 focus:border-slate-900"
          placeholder="User Name"
          {...register("userName", {
            required: "UserName is required",
          })}
        />
        {errors.userName && (
          <p className="text-red-600 mb-4 mt-[-10px]">
            {errors.userName.message}
          </p>
        )}
        <input
          type="password"
          className="border border-slate-800 py-2 px-2 w-full rounded-[10px] mb-4 focus:outline-none focus:ring-2 focus:ring-slate-800 focus:border-slate-900"
          placeholder="Password"
          {...register("password", {
            required: "Password is required",
          })}
        />
        {errors.password && (
          <p className="text-red-600 mb-4 mt-[-10px]">
            {errors.password.message}
          </p>
        )}
        <p className="mb-6">
          Don't have an account?{" "}
          <Link href="/sign-up">
            <span className="cursor-pointer text-blue-400">signup</span>
          </Link>
        </p>
        <button className="bg-slate-700 text-[18px] py-2 px-6 rounded-2xl shadow shadow-indigo-950 cursor-pointer">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
