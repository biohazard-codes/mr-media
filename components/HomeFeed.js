import { IconHeart } from "@tabler/icons-react";
import { IconEdit } from "@tabler/icons-react";
function HomeFeed(props) {
  const usr = "userName";
  return (
    <div className="border border-sky-800 shadow-md max-w-[470px] rounded-[16px] p-[10px] transition-all bg-[#192542] mb-10">
      <div className=" flex flex-row mb-4 justify-between">
        <div className=" flex flex-row mb-4">
          <img
            src="profilePlaceholder.png"
            className="h-12 w-12 rounded-full object-cover"
          />

          <div className="flex flex-col">
            <p className="ml-2 font-bold">FirstName</p>
            <p className="ml-2 text-gray-500">@{usr}</p>
          </div>
        </div>
        <span className=" cursor-pointer">
          <IconEdit stroke={2} />
        </span>
      </div>

      <div className="mb-4">
        <p> Mr Media -Coming Soon !!</p>
        <p className="text-gray-400">#mrmedia #soon #Bio #Ryomen</p>
      </div>
      <div className="flex justify- flex-col items-center">
        <img
          src={props.image}
          className=" w-full rounded-2xl object-cover mb-4"
        />
      </div>
      <p className="">
        <button className="cursor-pointer">
          <IconHeart stroke={2} />
        </button>
      </p>
    </div>
  );
}
export default HomeFeed;
