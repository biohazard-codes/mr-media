"use client";
import toast, { Toaster } from "react-hot-toast";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { redirect, RedirectType } from "next/navigation";

function EditForm(props) {
  const olie = 5086;
  //   const {
  //     register,
  //     handleSubmit,
  //     setValue,
  //     reset,
  //     formState: { errors },
  //   } = useForm();
  //   const [selectedImage, setSelectedImage] = useState();

  //   const handleImageChange = (event) => {
  //     const file = event.target.files[0];
  //     const extension = file.name.split(".").pop().toLowerCase();
  //     const allowedExtensions = ["jpg", "jpeg", "png"];

  //     if (allowedExtensions.includes(extension)) {
  //       setSelectedImage(file);
  //       setValue("image", file);
  //     } else {
  //       toast.error("Only JPG, JPEG, or PNG images are allowed.");
  //     }
  //   };

  //   async function submit(data) {
  //     const formData = new FormData();
  //     formData.append("productName", data.productName);
  //     formData.append("quantity", data.quantity);
  //     formData.append("price", data.price);
  //     formData.append("image", data.image);
  //     const result = await updateProduct(props.id, formData);

  //     console.log(result);
  //     toast.success("Product updated successfully!");

  //     redirect("/products", RedirectType.push);
  //   }

  return (
    <section className="flex justify-center">
      <form className="flex justify-center mt-6 flex-col items-center max-w-md p-20  bg-[#0b0e22]  rounded-[6px] shadow shadow-indigo-900">
        <h1 className="font-medium text-3xl mb-6 items-center">Profile Edit</h1>
        <img
          className=" h-28 w-28 mb-4 rounded-full object-cover cursor-pointer"
          alt="Profile Preview"
          src="/profilePlaceholder.png"
        />

        <div class="flex flex-row justify-between gap-2 items-center">
          <input
            type="text"
            placeholder="First Name"
            className="border border-slate-800 py-2 px-2 w-full rounded-[10px] mb-4 focus:outline-none focus:ring-2 focus:ring-slate-800 focus:border-slate-900"
            name="firstName"
          />
          <input
            type="text"
            placeholder="last Name"
            className="border border-slate-800 py-2 px-2 w-full rounded-[10px] mb-4 focus:outline-none focus:ring-2 focus:ring-slate-800 focus:border-slate-900"
            name="lastName"
          />
        </div>

        <input
          type="text"
          className="border border-slate-800 py-2 px-2 w-full rounded-[10px] mb-4 focus:outline-none focus:ring-2 focus:ring-slate-800 focus:border-slate-900"
          placeholder="User Name"
          name="userName"
        ></input>

        <button className="bg-slate-700 text-[18px] py-2 px-10 rounded-2xl shadow shadow-indigo-950 cursor-pointer">
          Edit
        </button>
      </form>
    </section>
  );
}

export default EditForm;
