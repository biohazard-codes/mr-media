import { IconEdit } from "@tabler/icons-react";
import { IconTrash, IconHeart } from "@tabler/icons-react";

function PreviewPost() {
  return (
    <div className="flex justify-center md:mt-4 mt-20 overflow-hidden ">
      <div className="  flex md:flex-row flex-col  rounded-[16px] w-full max-w-screen-md  ">
        <div className="bg-slate-950 rounded-tl-2xl md:rounded-bl-2xl rounded-tr-2xl md:rounded-tr-[0px] p-1 ">
          <img
            src="/mr.png"
            className="w-full h-full max-h-96 object-cover rounded-2xl"
          />
        </div>

        <div className="flex flex-col border border-slate-800  bg-slate-800 p-4 md:rounded-tr-2xl rounded-bl-2xl md:rounded-bl-[0px] rounded-br-2xl">
          <div className="flex flex-row">
            <img
              src="/profilePlaceholder.png"
              className="size-12 rounded-full"
            />

            {/* parent div of profile header V */}

            <div className="flex flex-row justify-between mb-6">
              {/* profile block */}
              <div className="flex flex-col px-2">
                <p className="font-medium">profile</p>
                <p className="text-gray-500">@userName</p>
              </div>
            </div>

            {/* Edit and Delete block aka action */}
            <div className="flex flex-row gap-0.5 md:pl-50 pl-20">
              <button className="flex cursor-pointer">
                <span className="text-sky-500">
                  {" "}
                  <IconEdit stroke={2} />
                </span>
              </button>
              &nbsp;
              <button className="text-red-500 flex cursor-pointer">
                <IconTrash stroke={2} />{" "}
              </button>
            </div>
          </div>

          <div className="flex flex-col border-t border-t-sky-600 md:w-md">
            <p className="mt-6"> Mr Media -Coming Soon !!</p>
            <p className="text-gray-400 md:mb-20 mb-4">
              #mrmedia #soon #Bio #Ryomen
            </p>
          </div>
          <span className="flex justify-start text-rose-500">
            {" "}
            <IconHeart stroke={2} />{" "}
          </span>
          {/* here */}
        </div>
      </div>
    </div>
  );
}
export default PreviewPost;
