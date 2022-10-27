import React from "react";
import Link from "next/link";
import Form from "./form/Form";
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();
  const {
    query: { isLogin, onClick }
  } = router;
  const IsLogin = (isLogin ==="true")
  console.log(IsLogin);
  // console.log(typeof onClick);
  
  




  
  return (
    <div className="flex flex-col justify-center h-screen items-center">
      <Form value="Sign in" isLogin={IsLogin}/>
      <div className="flex justify-center items-center m-5 px-3 border-2 border-gray-300 w-72 h-14 rounded-md ">
        New to page?
        <Link href="Signup">
          <button className=" border-2 border-gray-500 rounded-md mx-3 px-3 transition-all duration-200 hover:bg-stone-500 hover:text-white">
            Sign up
          </button>
        </Link>
      </div>
    </div>
  );
}
