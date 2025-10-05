"use server";
import toast, { Toaster } from "react-hot-toast";
import Link from "next/link";
import { allUsers } from "@/app/backend/db/actions/signup";
import MemberRow from "@/components/MemberRow";
export const dynamic = "force-dynamic";
async function People() {
  const allDataUser = await allUsers();
  return (
    <>
      <h1 className="font-medium text-3xl flex justify-center md:justify-start md:pl-20 md:mt-8 mt-16">
        All Members
      </h1>
      {/* <section className="grid grid-cols-1  md:grid-cols-3 gap-10 justify-items-center p-10"> */}
      <section className="flex flex-wrap justify-center  gap-6 p-10">
        <Toaster />

        {allDataUser.map((p) => (
          <MemberRow
            key={p.id}
            id={p.id}
            userName={p.userName}
            firstName={p.firstName}
            image={p.image}
          />
        ))}
      </section>
    </>
  );
}

export default People;
