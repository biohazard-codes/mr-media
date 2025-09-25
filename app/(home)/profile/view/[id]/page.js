// // "use client";
// import { viewUser } from "@/app/backend/db/actions/signup";
// import { IconEdit } from "@tabler/icons-react";
// // import { useState, useEffect } from "react";
// import { IconPhoto } from "@tabler/icons-react";

// async function Profile({ params }) {
//   const { id } = params;
//   const user = await viewUser(id);

//   // const [userName, setUserName] = useState("userName");
//   // const [firstName, setFirstName] = useState("Full");
//   // const [lastName, setLastName] = useState("Name");
//   // const [image, setImage] = useState(null);
//   // const [userId, setUserId] = useState(null);

//   // useEffect(() => {
//   //   const localData = localStorage.getItem("Current User");
//   //   if (!localData) {
//   //     redirect("sign-in");
//   //   } else {
//   //     setUserName(JSON.parse(localData).userName);
//   //     setImage(JSON.parse(localData).image);
//   //     setFirstName(JSON.parse(localData).firstName);
//   //     setLastName(JSON.parse(localData).lastName);
//   //     setUserId(JSON.parse(localData).id);
//   //     //   //your code
//   //   }
//   // }, []);

//   const post = "1 ";
//   return (
//     <section>
//       <div className="min-w-50 flex md:flex-row flex-col justify-between mb-20 md:mt-0 mt-16 md:px-50">
//         <div className="flex md:flex-row flex-col md:justify-left items-center justify-center ">
//           <img
//             src={`/uploads/${user.image}`}
//             className="h-38 w-38 mt-4 mb-4 rounded-full object-cover cursor-pointer"
//           />
//           <div className="md:pl-8 pt-6 text-center">
//             <p className="text-3xl font-bold">
//               {user.firstName + " " + user.lastName}
//             </p>
//             <p className="text-[18px] text-slate-500 font-medium md:mb-10 md:text-left">
//               @{user.userName}
//             </p>
//             <p className="">
//               <span className="text-sky-300 ">{post}</span>Posts
//             </p>
//           </div>
//         </div>

//         <button className="flex mt-6 bg-slate-700 text-[18px] py-2 px-6 rounded-2xl shadow shadow-indigo-950 cursor-pointer h-10 justify-center">
//           {" "}
//           <IconEdit stroke={2} /> Edit Profile
//         </button>
//       </div>

//       <h1 className="flex  border border-indigo-500 px-4 py-2 w-fit mx-auto rounded mb-30">
//         <IconPhoto stroke={2} />
//         &nbsp;Posts
//       </h1>
//       {/* <div className="mx-50 w-90 h-87  border-none border-sky-400 rounded-3xl flex flex-col bg-[#192542] pb-20 relative">
//         <img
//           src="/post.png"
//           className="object-cover rounded-3xl border-1 w-full border-sky-400"
//         />

//         <button className="absolute bottom-2 left-2 p-1 flex flex-row ">
//           <IconHeart stroke={2} />
//           <span className="text-[18px] pr-2"> &nbsp; 2</span>
//         </button>
//       </div> */}
//     </section>
//   );
// }
// export default Profile;

import { viewUser } from "@/app/backend/db/actions/signup";
import ProfileClient from "@/components/ProfileClient";

async function Profile({ params }) {
  const sla = "hssi";
  const { id } = await params;
  const user = await viewUser(id);
  const plainUser = JSON.parse(JSON.stringify(user));

  return (
    <section>
      <ProfileClient user={plainUser} id={id} />
    </section>
  );
}

export default Profile;
