import React from "react";
import Navigation from "./navigation/Navigation";
import { useLocalStorage } from "./useLocalStorage";

export default function App() {
  const [isLogin, setIsLogin] = useLocalStorage("isLogin", false);
  console.log(isLogin);
  const handleClick = () => {
    setIsLogin(true);
  };

  return (
    <div className="flex h-screen items-center justify-center ">
      {/* {!isLogin && (
        <> */}
      <Navigation
        href="page-form/Login"
        isLogin={isLogin}
        onClick={handleClick}
      >
        Login
      </Navigation>
      <Navigation
        href="page-form/Signup"
        isLogin={isLogin}
        onClick={handleClick}
      >
        Sign up
      </Navigation>
      {/* </>
      )} */}
      {/* {isLogin && (
        <button
          onClick={() => {
            setIsLogin(false);
          }}
          className=" border-2 border-black rounded-md m-7 px-3 transition-all duration-200 hover:bg-stone-500 hover:text-white"
        >
          Sign out
        </button>
      )} */}
    </div>
  );
}
