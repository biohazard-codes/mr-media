"use client";
import toast, { Toaster } from "react-hot-toast";
import React, { useEffect, useState } from "react";
import Link from "next/link";

import { IconEye } from "@tabler/icons-react";

function MemberRow(props) {
  const [pfp, setPfp] = useState(null);

  useEffect(() => {
    // Your code here (side effect)
    setPfp("/uploads/" + props.image);
  }, []);

  return (
    <>
      <div className="flex flex-col items-center space-y-2 p-6 border border-slate-800 rounded-2xl w- max-w-[100%] min-w-[30%] bg-gray-800">
        <img src={pfp} className="rounded-full h-16 w-16 object-cover" />
        <div>&nbsp; {props.firstName}</div>
        <div className="text-gray-600"> @{props.userName}</div>
        <button className="rounded bg-sky-600 px-8 py-2 text-white">
          <Link href={`/profile/view/${props.id}`}>View</Link>
        </button>
      </div>
    </>
  );
}

export default MemberRow;
