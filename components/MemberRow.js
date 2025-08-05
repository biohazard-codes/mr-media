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
      <tr>
        <td>
          <span
            className={`flex p-4 rounded-2xl mr-2  w-auto flex-row items-center `}
          >
            <img
              src={pfp}
              className=" rounded-full h-10 w-10 object-cover"
            ></img>
            <span className={"flex flex-col justify-center"}>
              <span>&nbsp; {props.firstName}</span>
              <span className="mt-[-44px] ml-2  text-gray-600">
                @{props.userName}
              </span>
            </span>
          </span>
        </td>

        <td className="flex flex-row text-indigo-500 gap-16">
          {" "}
          <button className="flex hover:cursor-pointer mt-6">
            <IconEye stroke={2} />
            <Link href={"products/view/" + props.id}> Preview</Link>
          </button>
        </td>
      </tr>
    </>
  );
}

export default MemberRow;
