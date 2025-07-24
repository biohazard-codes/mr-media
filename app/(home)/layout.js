"use client";
import {
  IconDeviceTvOld,
  IconLogout,
  IconCircleDashedPlus,
  IconUsers,
} from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const layout = ({ children }) => {
  const pathName = usePathname();

  const pathSegments = pathName.split("/");
  const basePath = `/${pathSegments[1]}`;

  const userName = "sky";
  return (
    <>
      <div className="flex flex-row  ">
        <main className="md:ml-70 flex-1 p-[8px] bg-slate-900 min-h-screen mb-10 md:mb-0 ">
          {children}
        </main>
        <div className=" min-h-screen md:fixed w-70 hidden md:block max-w-70">
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
                href="/members"
                className={`flex hover:bg-slate-900 p-4 rounded-2xl mr-2 ${
                  basePath === "/members" ? "font-bold" : ""
                } `}
              >
                {basePath === "/members" ? (
                  <IconUsers stroke={2} />
                ) : (
                  <IconUsers stroke={1} />
                )}{" "}
                &nbsp; Members
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
      {/* here for movile */}
      <div className="md:hidden flex flex-row bg-slate-950 fixed top-0 left-0 right-0 justify-around p-2 text-[10px]">
        <h1 className="font-medium text-[16px] mt-2 ">Mr Media</h1>

        <div className="flex flex-row justify-between text-right ml-40">
          <Link
            href="/logout"
            className={`flex flex-col  justify-center items-center ${
              basePath === "/logout" ? "font-bold" : ""
            } `}
          >
            {basePath === "/logout" ? (
              <IconLogout stroke={2} />
            ) : (
              <IconLogout stroke={1} />
            )}{" "}
            Log out
          </Link>

          <Link
            href="/profile/1"
            className="flex flex-col  justify-center pl-6 items-center"
          >
            <img
              src="/profilePlaceholder.png"
              className=" rounded-full h-6 w-6 object-cover"
            ></img>
            <p className={`  ${basePath === "/profile/1" ? "font-bold" : ""} `}>
              {" "}
              Profile
            </p>
          </Link>
        </div>
      </div>

      {/* bottom stuffs */}

      <div className="md:hidden flex flex-row bg-slate-950 fixed bottom-0 left-0 right-0 justify-around p-2 text-[10px]">
        <div>
          <Link
            href="/"
            className={`flex flex-col  justify-center items-center${
              basePath === "/" ? "font-bold" : ""
            } `}
          >
            {basePath === "/" ? (
              <IconDeviceTvOld stroke={2} />
            ) : (
              <IconDeviceTvOld stroke={1} />
            )}
            Home
          </Link>
        </div>

        <div>
          <Link
            href="/post"
            className={`flex flex-col  justify-center items-center ${
              basePath === "/post" ? "font-bold" : ""
            } `}
          >
            {basePath === "/post" ? (
              <IconCircleDashedPlus stroke={2} />
            ) : (
              <IconCircleDashedPlus stroke={1} />
            )}{" "}
            Post
          </Link>
        </div>

        <div>
          <Link
            href="/members"
            className={`flex flex-col  justify-center items-center ${
              basePath === "/members" ? "font-bold" : ""
            } `}
          >
            {basePath === "/members" ? (
              <IconUsers stroke={2} />
            ) : (
              <IconUsers stroke={1} />
            )}{" "}
            Members
          </Link>
        </div>
      </div>
    </>
  );
};
export default layout;
