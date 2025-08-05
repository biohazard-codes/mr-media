"use server";
import toast, { Toaster } from "react-hot-toast";
import Link from "next/link";
import { allUsers } from "@/app/backend/db/actions/signup";
import MemberRow from "@/components/MemberRow";
async function People() {
  const allDataUser = await allUsers();
  return (
    <section className="px-4">
      <Toaster />
      <div className="[&_td]:text-left text-left">
        <table className="  bg-slate-800  [&_th]:px-8 [&_th]:py-2 [&_td]:p-6 w-[100%] [&_th]:text-slate-400 [&_td]:text-center rounded-[4px]">
          <thead>
            <tr>
              <th>User</th>

              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="[&_tr]:hover:bg-indigo-950 [&_tr]:odd:bg-slate-700">
            {allDataUser.map((p) => (
              <MemberRow
                key={p.id}
                id={p.id}
                userName={p.userName}
                firstName={p.firstName}
                image={p.image}
              />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default People;
