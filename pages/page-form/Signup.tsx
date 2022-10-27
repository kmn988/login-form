import React from "react";
import Link from "next/link";
import Form from "./form/Form";

export default function Signup() {
  return (
    <div className="flex flex-col justify-center h-screen items-center">
      <Form value="Sign up" username={true}/>
      
      <Link href="/">
        <button className=" border-2 border-black rounded-md m-7 px-3 transition-all duration-200 hover:bg-stone-500 hover:text-white">
          Back to home page
        </button>
      </Link>
    </div>
  );
}
