"use client";
import toast, { Toaster } from "react-hot-toast";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { redirect, RedirectType } from "next/navigation";
import { IconFilePencil } from "@tabler/icons-react";
// import { IconLibraryPhoto } from "@tabler/icons-react";
import { updateProfile } from "@/app/backend/db/actions/signup";

function EditForm({ user, id }) {
  const olie = 2226;

  useEffect(() => {
    const localData = localStorage.getItem("Current User");

    const storedId = JSON.parse(localData).id;
    if (id !== storedId) {
      redirect(`/profile/view/` + [id], RedirectType.push);
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
    const extension = file.name.split(".").pop().toLowerCase();
    const allowedExtensions = ["jpg", "jpeg", "png"];

    if (allowedExtensions.includes(extension)) {
      setSelectedImage(file);
      setValue("image", file);
    } else {
      toast.error("Only JPG, JPEG, or PNG images are allowed.");
    }
  };

  const handleResetClick = () => {
    reset();
  };

  async function onSubmit(data) {
    const formData = new FormData();
    formData.append("firstName", data.firstName);
    formData.append("lastName", data.lastName);
    formData.append("userName", data.userName);
    formData.append("image", data.image);
    const result = await updateProfile(id, formData);

    console.log(result);
    toast.success("Profile updated successfully!");

    redirect(`/profile/view/` + [id], RedirectType.push);
  }

  return (
    <section className="md:px-96">
      <Toaster />
      <h1 className=" flex font-medium text-3xl text-left md:mb-2 md:mt-8 mt-16 pl-2 mb-4">
        <IconFilePencil stroke={2} size={30} className="text-3xl mt-0.5" />
        &nbsp; Edit Porfilee
      </h1>

      <form className="md:py-10 space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <label className=" text-center block">Change Profile Picture</label>

        <label
          className="flex flex-col justify-center items-center  cursor-pointer  mb-20   rounded-full "
          htmlFor="fileUpload"
        >
          {
            <img
              src={
                selectedImage
                  ? URL.createObjectURL(selectedImage)
                  : `/uploads/${user.image}`
              }
              className="object-contain max-h-56  rounded-full  p-0.5"
            />
          }
        </label>

        <input
          type="file"
          className="hidden"
          id="fileUpload"
          onChange={handleImageChange}
        />

        <div className="flex flex-row justify-around w-full mb-8">
          <div className="flex flex-col w-full mr-4">
            <label className="mb-4 block"> First Name </label>
            <input
              className="w-full border border-gray-700 shadow shadow-blue-800 rounded p-2 bg-gray-800"
              defaultValue={user.firstName}
              {...register("firstName")}
            />
          </div>

          <div className="flex flex-col w-full">
            <label className="mb-4 block"> Last Name </label>
            <input
              className="w-full border border-gray-700 shadow shadow-blue-800 rounded p-2 bg-gray-800"
              defaultValue={user.lastName}
              {...register("lastName")}
            />
          </div>
        </div>

        <label className="mb-4 block"> User Name </label>
        <input
          className="w-full border border-gray-700 shadow shadow-blue-800 rounded p-2 bg-gray-800"
          defaultValue={user.userName}
          {...register("userName")}
        />

        {/* buttons */}

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

    // <section className="flex justify-center">
    //   <form className="flex justify-center mt-6 flex-col items-center max-w-md p-20  bg-[#0b0e22]  rounded-[6px] shadow shadow-indigo-900">
    //     <h1 className="font-medium text-3xl mb-6 items-center">Profile Edit</h1>
    //     <img
    //       className=" h-28 w-28 mb-4 rounded-full object-cover cursor-pointer"
    //       alt="Profile Preview"
    //       // src="/profilePlaceholder.png"
    //       src={`/uploads/${user.image}` || "/profilePlaceholder.png"}
    //     />

    //     <div className="flex flex-row justify-between gap-2 items-center">
    //       <input
    //         type="text"
    //         placeholder="First Name"
    //         className="border border-slate-800 py-2 px-2 w-full rounded-[10px] mb-4 focus:outline-none focus:ring-2 focus:ring-slate-800 focus:border-slate-900"
    //         name="firstName"
    //         value={user.firstName}
    //       />
    //       <input
    //         type="text"
    //         placeholder="last Name"
    //         className="border border-slate-800 py-2 px-2 w-full rounded-[10px] mb-4 focus:outline-none focus:ring-2 focus:ring-slate-800 focus:border-slate-900"
    //         name="lastName"
    //         value={user.lastName}
    //       />
    //     </div>

    //     <input
    //       type="text"
    //       className="border border-slate-800 py-2 px-2 w-full rounded-[10px] mb-4 focus:outline-none focus:ring-2 focus:ring-slate-800 focus:border-slate-900"
    //       placeholder="User Name"
    //       name="userName"
    //       value={user.userName}
    //     ></input>

    //     <button className="bg-slate-700 text-[18px] py-2 px-10 rounded-2xl shadow shadow-indigo-950 cursor-pointer">
    //       Edit
    //     </button>
    //   </form>
    // </section>
  );
}

export default EditForm;
