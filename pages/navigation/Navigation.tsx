import React from "react";
import { useRouter } from "next/router";

export default function Navigation({ href, children, isLogin, onClick }: any) {
  const router = useRouter();
  // console.log(typeof onClick);

  return (
    <>
      <a
        onClick={() => {
          router.push({
            pathname: href,
            query: {
              isLogin: isLogin,
              onClick: onClick(),
            },
          });
        }}
      >
        <button className="w-32 border-2 border-black rounded-md mx-5 transition-all duration-200 hover:bg-stone-500 hover:text-white">
          {children}
        </button>
      </a>
    </>
  );
}
