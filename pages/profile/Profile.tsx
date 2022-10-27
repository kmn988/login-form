import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Profile() {
  const router = useRouter();
  const {
    query: {isLogin}
  } = router;
  const IsLogin = isLogin === "true";

  console.log( IsLogin);

  return (
    <div className="flex flex-col justify-center h-screen items-center">
      Profile
      <Link href="/">
        <button className=" border-2 border-black rounded-md m-7 px-3 transition-all duration-200 hover:bg-stone-500 hover:text-white">
          Back to home page
        </button>
      </Link>
    </div>
  );
}
