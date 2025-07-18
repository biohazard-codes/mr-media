"use client";
import {
  IconDeviceTvOld,
  IconUserCircle,
  IconLogout,
  IconCircleDashedPlus,
  IconBrandSafari,
} from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const layout = ({ children }) => {
  const pathName = usePathname();

  const pathSegments = pathName.split("/");
  const basePath = `/${pathSegments[1]}`;

  const userName = "sky";
  return (
    <div className="flex flex-row justify-left ">
      <div className=" min-h-screen border fixed border-slate-950 w-70 ">
        <div className=" flex flex-col pl-4 [&_span]:pb-10 ">
          <h1 className="font-bold text-3xl py-6 ">Mr Media</h1>

          <span className="item-center pb-[-100px]">
            <Link
              href="/profile"
              className={`flex hover:bg-slate-900 p-4 rounded-2xl mr-2 ${
                basePath === "/profile" ? "font-bold" : ""
              } `}
            >
              <img
                src="/profilePlaceholder.png"
                className=" rounded-full h-10 w-10 object-cover"
              ></img>
              <span className="flex flex-col justify-center mb-[-50px]">
                <span>&nbsp; Profile</span>
                <span className="mt-[-50px] ml-2 font-thin">@{userName}</span>
              </span>
            </Link>
          </span>

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
              href="/post"
              className={`flex hover:bg-slate-900 p-4 rounded-2xl mr-2 ${
                basePath === "/post" ? "font-bold" : ""
              } `}
            >
              {basePath === "/post" ? (
                <IconCircleDashedPlus stroke={2} />
              ) : (
                <IconCircleDashedPlus stroke={1} />
              )}{" "}
              &nbsp; Post
            </Link>
          </span>

          <span>
            <Link
              href="/discover"
              className={`flex hover:bg-slate-900 p-4 rounded-2xl mr-2 ${
                basePath === "/discover" ? "font-bold" : ""
              } `}
            >
              {basePath === "/Discover" ? (
                <IconBrandSafari stroke={2} />
              ) : (
                <IconBrandSafari stroke={1} />
              )}{" "}
              &nbsp; Discover
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

      <div className="ml-70 flex-1  p-6 bg-slate-900 min-h-screen">
        {children}
      </div>
    </div>
  );
};
export default layout;
