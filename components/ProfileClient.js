"use client";

import { IconEdit } from "@tabler/icons-react";
import { useState, useEffect } from "react";
import { IconPhoto } from "@tabler/icons-react";
import Link from "next/link";
import { allPosts } from "@/app/backend/db/actions/post";

function ProfileClient({ user, id }) {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const localData = localStorage.getItem("Current User");

    const storedId = JSON.parse(localData).id;

    console.log("this is backend " + id);
    console.log("this is localsotrage " + storedId);
    if (id === storedId) {
      setShowButton(true);
    }
  }, [id]);

  const post = "152 ";
  return (
    <section>
      <div className="min-w-50 flex md:flex-row flex-col justify-between mb-20 md:mt-0 mt-16 md:px-50">
        <div className="flex md:flex-row flex-col md:justify-left items-center justify-center ">
          <img
            src={`/uploads/${user.image}`}
            className="h-38 w-38 mt-4 mb-4 rounded-full object-cover cursor-pointer"
          />
          <div className="md:pl-8 pt-6 text-center">
            <p className="text-3xl font-bold">
              {user.firstName + " " + user.lastName}
            </p>
            <p className="text-[18px] text-slate-500 font-medium md:mb-10 md:text-left">
              @{user.userName}
            </p>
            <p className="">
              <span className="text-sky-300 ">{post}</span>Posts
            </p>
          </div>
        </div>

        {showButton && (
          <Link href={`/profile/edit/${id}`}>
            {" "}
            <button className="flex mt-6 bg-slate-700 text-[18px] py-2 px-6 rounded-2xl shadow shadow-indigo-950 cursor-pointer h-10 justify-center">
              {" "}
              <IconEdit stroke={2} /> Edit Profile
            </button>
          </Link>
        )}
      </div>

      <h1 className="flex  border border-indigo-500 px-4 py-2 w-fit mx-auto rounded mb-30">
        <IconPhoto stroke={2} />
        &nbsp;Posts
      </h1>
      <div className="mx-90  ">
        <img
          src="/post.png"
          className="object-none rounded-3xl border-1 w-50 h-87  border-sky-400"
        />
      </div>
    </section>
  );
}
export default ProfileClient;
