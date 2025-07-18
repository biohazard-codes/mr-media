import { IconEdit } from "@tabler/icons-react";

function Profile() {
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="flex justify-even border-none items-center flex-col p-10 bg-slate-500 rounded-2xl">
        <img
          src="profilePlaceholder.png"
          className="rounded-full object-cover h-16 w-16"
        />
        <p className="text-4xl ">FirstName LastName</p>
        <p className="text-2xl mb-2">@userName</p>
        <p className="mb-4">email@mail.com</p>
        <div className="flex flex-row justify-even  ">
          <button className="bg-slate-700 text-[16px] px-4 py-1 rounded-[10px] flex cursor-pointer">
            <IconEdit stroke={2} /> Edit
          </button>
        </div>
      </div>
    </div>
  );
}
export default Profile;
