"use client";
import { redirect } from "next/navigation";
import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

function Logout() {
  useEffect(() => {
    const localData = localStorage.getItem("Current User");
    if (localData) {
      localStorage.removeItem("Current User");
      toast("Logging-Out!", {
        icon: "⏳",
      });
      redirect("sign-in");
    }
  }, []);

  return (
    <>
      <Toaster />
      <div className="text-center">Logingg Out....</div>
    </>
  );
}

export default Logout;
