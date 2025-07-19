import { IconEdit } from "@tabler/icons-react";
import { IconHeart } from "@tabler/icons-react";

function Profile() {
  const usr = "userName";
  const post = "1 ";
  return (
    <>
      <div className="min-w-50 flex md:flex-row flex-col justify-between mb-30  md:px-50">
        <div className="flex flex-row justify-left">
          <img
            src="/profilePlaceholder.png"
            className="h-38 w-38 mb-4 rounded-full object-cover cursor-pointer"
          />
          <div className="pl-8 pt-6">
            <p className="text-3xl font-bold">Full Name</p>
            <p className="text-[18px] text-slate-500 font-medium mb-10">
              @{usr}
            </p>
            <p className="">
              <span className="text-sky-300">{post}</span>Posts
            </p>
          </div>
        </div>
        <button className="flex mt-6 bg-slate-700 text-[18px] py-2 px-6 rounded-2xl shadow shadow-indigo-950 cursor-pointer h-10 justify-center">
          {" "}
          <IconEdit stroke={2} /> Edit Profile
        </button>
      </div>
      {/* <div className="mx-50 w-90 h-87  border-none border-sky-400 rounded-3xl flex flex-col bg-[#192542] pb-20 relative">
        <img
          src="/post.png"
          className="object-cover rounded-3xl border-1 w-full border-sky-400"
        />

        <button className="absolute bottom-2 left-2 p-1 flex flex-row ">
          <IconHeart stroke={2} />
          <span className="text-[18px] pr-2"> &nbsp; 2</span>
        </button>
      </div> */}
    </>
  );
}
export default Profile;
