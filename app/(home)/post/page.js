import { IconPhotoPlus } from "@tabler/icons-react";
import { IconLibraryPhoto } from "@tabler/icons-react";

function Post() {
  return (
    <section className="md:px-96">
      <h1 className=" flex font-medium text-3xl text-left md:mb-10 md:mt-8 mt-16 pl-2 mb-4">
        <IconPhotoPlus stroke={2} className="text-3xl mt-2" /> &nbsp; Create
        Post
      </h1>
      <form className="md:p-10 space-y-6">
        <label className="mb-4 block"> Caption </label>
        <textarea className="h-40 w-full border border-gray-700 shadow shadow-blue-800 rounded   bg-gray-800"></textarea>

        <label className="  block">Add Photos</label>

        <label
          className="flex flex-col justify-center items-center bg-gray-800 md:py-24 cursor-pointer rounded-2xl shadow shadow-blue-800 py-10 "
          htmlFor="fileUpload"
        >
          <IconLibraryPhoto stroke={1} size={120} className=" mb-2" />

          <p className="mb-2">Drag Photo here</p>
          <p className="text-gray-500">PNG, JPG, JPEG</p>
        </label>

        <input type="file" className="hidden" id="fileUpload" />
        <label className="  block">Add Tags (seperated by " , ")</label>
        <input
          type="text"
          placeholder="Skill, Art, Code"
          className="p-2 w-full  border-gray-700 shadow shadow-blue-800 rounded   bg-gray-800"
        ></input>
        <div className="flex flex-row text-left justify-left ">
          <button className="rounded bg-gray-950  px-8 py-2 cursor-pointer">
            Post
          </button>
          <button className="rounded bg-gray-700 ml-6  px-8 py-2 cursor-pointer">
            Cancel
          </button>
        </div>
      </form>
    </section>
  );
}
export default Post;
