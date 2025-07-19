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
    <div className="flex flex-row  ">
      <main className="md:ml-70 flex-1  p-[8px] bg-slate-900 min-h-screen ">
        {children}
      </main>
      <div className=" min-h-screen fixed w-70 hidden md:block ">
        {/* this line ^ */}

        <div className=" flex md:flex-col flex-row pl-4 [&_span]:pb-10 w-full">
          {/* this line ^ */}
          <h1 className="font-bold text-3xl py-6 ">Mr Media</h1>

          <span className="">
            <Link
              href="/profile/1"
              className={`flex hover:bg-slate-900 p-4 rounded-2xl mr-2  w-auto flex-row items-center `}
            >
              <img
                src="/profilePlaceholder.png"
                className=" rounded-full h-10 w-10 object-cover"
              ></img>
              <span
                className={`flex flex-col justify-center mb-[-80px] ${
                  basePath === "/profile/1" ? "font-bold" : ""
                } `}
              >
                <span>&nbsp; Profile</span>
                <span className="mt-[-50px] ml-2  text-gray-600">
                  @{userName}
                </span>
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
    </div>
  );
};
export default layout;
