"use client";

import { IconEdit } from "@tabler/icons-react";
import { useState, useEffect } from "react";
import { IconPhoto } from "@tabler/icons-react";
import Link from "next/link";

function ProfileClient({ user, id, posts }) {
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

  const post = posts.length;
  return (
    <section>
      <div className="min-w-50 flex md:flex-row flex-col justify-between mb-20 md:mt-0 mt-16 md:px-50">
        <div className="flex md:flex-row flex-col md:justify-left items-center justify-center min-w-80">
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
            <p className="md:mr-10">
              <span className="text-sky-300">{post} &nbsp; </span>Posts
            </p>
          </div>
        </div>
        <div className=" md:ml-0 md:mr-0 ml-auto mx-16 mr-auto">
          {showButton && (
            <Link href={`/profile/edit/${id}`}>
              {" "}
              <button className="flex mt-6 bg-slate-700  text-[18px] py-2 px-6 h-auto rounded-2xl shadow shadow-indigo-950 cursor-pointer  justify-center">
                {" "}
                <IconEdit stroke={2} /> Edit Profile
              </button>
            </Link>
          )}
        </div>
      </div>

      <h1 className="flex   border border-indigo-500 px-4 py-2 w-fit md:mx-[14%] mx-auto rounded mb-10">
        <IconPhoto stroke={2} />
        &nbsp;Posts
      </h1>

      {/*   dummy post  done by user */}
      <div className="md:mx-[14%]  grid grid-rows-1 justify-center md:grid-cols-3 gap-10 mx-auto mb-4 ">
        {posts.length === 0 ? (
          <p className="text-center text-slate-400">No Posts</p>
        ) : (
          posts.map((p) => (
            <Link href={`/post/view/${p._id}`} key={p._id}>
              <img
                key={p._id}
                src={`/posts/${p.image}`}
                alt="Post"
                className="object-cover rounded-3xl border-1 w-full  h-87 border-sky-400  "
              />
            </Link>
          ))
        )}
      </div>
    </section>
  );
}
export default ProfileClient;
