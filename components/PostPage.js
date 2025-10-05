"use client";
import { IconEdit } from "@tabler/icons-react";
import { IconTrash, IconHeart } from "@tabler/icons-react";
import { useState, useEffect } from "react";
import Modal from "react-modal";
import { deletePost } from "@/app/backend/db/actions/post";
import { redirect, RedirectType } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import Link from "next/link";

function PostPage({ Post, id }) {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-20%",
      transform: "translate(-50%, -50%)",
      radius: "8px",
      shadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    },
  };

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const localData = localStorage.getItem("Current User");

    const storedId = JSON.parse(localData).id;

    if (Post.author._id === storedId) {
      setShowButton(true);
    }
  }, [id]);

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleDelete = async () => {
    await deletePost(id);
    await redirect(`/profile/view/` + [Post.author._id], RedirectType.push);
    await toast.success("Post Deleted");
  };

  return (
    <div className="flex justify-center md:mt-4 mt-20 overflow-hidden ">
      <div className="  flex md:flex-row flex-col  rounded-[16px] w-full max-w-screen-md  ">
        <div className="bg-slate-950 rounded-tl-2xl md:rounded-bl-2xl rounded-tr-2xl md:rounded-tr-[0px] p-1 ">
          <img
            src={`/posts/${Post.image}`}
            className="w-full h-full max-h-96 object-cover rounded-2xl"
          />
        </div>

        <div className="flex flex-col border border-slate-800  bg-slate-800 p-4 md:rounded-tr-2xl rounded-bl-2xl md:rounded-bl-[0px] rounded-br-2xl">
          <div className="flex flex-row">
            <img
              src={`/uploads/${Post.author.image}`}
              className="size-12 rounded-full"
            />

            {/* parent div of profile header V */}

            <div className="grid grid-cols-2 gap-64">
              <div className="flex flex-row justify-between mb-6">
                {/* profile block */}
                <div className="flex flex-col px-2">
                  <p className="font-medium">{Post.author.firstName}</p>
                  <p className="text-gray-500">@{Post.author.userName}</p>
                </div>
              </div>

              {/* Edit and Delete block aka action */}
              {showButton && (
                <div className="flex flex-row gap-0.5  ">
                  <Link href={"/post/edit/" + id}>
                    <button className="flex cursor-pointer">
                      <span className="text-sky-500">
                        {" "}
                        <IconEdit stroke={2} />
                      </span>
                    </button>
                  </Link>
                  &nbsp;
                  <button
                    onClick={openModal}
                    className="text-red-500 flex cursor-pointer"
                  >
                    <IconTrash stroke={2} />{" "}
                  </button>
                </div>
              )}
              <Modal
                ariaHideApp={false}
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
              >
                <p className="text-3xl pt-10 mb-6 text-center">Are you sure?</p>
                <p className=" mb-8 w-[400px] text-center text-slate-500">
                  Do you really want to delete these records? This process can't
                  be undone!
                </p>
                <div className="text-center">
                  {" "}
                  <button
                    onClick={() => {
                      handleDelete();
                      closeModal();
                    }}
                    className="bg-red-400 rounded-[4px] px-8 py-2 text-white hover:cursor-pointer  mr-[20px]"
                  >
                    Delete
                  </button>
                  <button
                    onClick={closeModal}
                    className="bg-slate-300 rounded-[4px] px-8 py-2 text-white hover:cursor-pointer mb-10 "
                  >
                    Cancle
                  </button>
                </div>
              </Modal>
            </div>
          </div>

          <div className="flex flex-col border-t border-t-sky-600 md:w-md">
            <p className="mt-6">{Post.caption}</p>
            <p className="text-gray-400 md:mb-20 mb-4">{Post.tags}</p>
          </div>
          <span className="flex justify-start text-rose-500">
            <IconHeart stroke={2} />
          </span>
          {/* here */}
        </div>
      </div>
    </div>
  );
}
export default PostPage;
