"use client";
import {
  IconDeviceTvOld,
  IconUserCircle,
  IconLogout,
  IconDeviceTvOldFilled,
} from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const layout = ({ children }) => {
  const pathName = usePathname();

  const pathSegments = pathName.split("/");
  const basePath = `/${pathSegments[1]}`;

  return (
    <div className="flex flex-row justify-left">
      <div className="  min-h-screen border  border-slate-950 w-70 ">
        <div className=" flex flex-col pl-4 [&_span]:pb-10 ">
          <h1 className="font-bold text-3xl py-6 mb-6">Mr Media</h1>
          <span>
            {" "}
            <Link
              href="/"
              className={`flex hover:bg-slate-900 p-4 rounded-2xl mr-2 ${
                basePath === "/" ? "font-bold" : ""
              } `}
            >
              {basePath === "/" ? (
                <IconDeviceTvOld stroke={2} />
              ) : (
                <IconDeviceTvOld stroke={1} />
              )}
              &nbsp; Home
            </Link>
          </span>

          <span>
            <Link
              href="/profile"
              className={`flex hover:bg-slate-900 p-4 rounded-2xl mr-2 ${
                basePath === "/profile" ? "font-bold" : ""
              } `}
            >
              {basePath === "/profile" ? (
                <IconUserCircle stroke={2} />
              ) : (
                <IconUserCircle stroke={1} />
              )}
              &nbsp; Profile
            </Link>
          </span>

          <span>
            <Link
              href="/logout"
              className={`flex hover:bg-slate-900 p-4 rounded-2xl mr-2 ${
                basePath === "/logout" ? "font-bold" : ""
              } `}
            >
              {basePath === "/logout" ? (
                <IconLogout stroke={2} />
              ) : (
                <IconLogout stroke={1} />
              )}{" "}
              &nbsp; Log out
            </Link>
          </span>
        </div>
      </div>
      <div className="flex-1 p-6 bg-slate-900">{children}</div>
    </div>
  );
};
export default layout;
