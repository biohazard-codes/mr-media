import { IconHeart } from "@tabler/icons-react";

function ProfileFeed(props) {
  return (
    <>
      <div className="mx-50 w-90 h-87  border-none border-sky-400 rounded-3xl flex flex-col bg-[#192542] pb-20 relative">
        <img
          src={props.image}
          //   /post.png is og just in case else a lot is here
          className="object-cover rounded-3xl border-1 w-full border-sky-400"
        />

        <button className="absolute bottom-2 left-2 p-1 flex flex-row ">
          <IconHeart stroke={2} />
          <span className="text-[18px] pr-2"> &nbsp; 2</span>
        </button>
      </div>
    </>
  );
}
export default ProfileFeed;
