
import React from "react";
import Header from "./common/Header";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Header />

      <div className="flex flex-col gap-7 mt-[10%]">
        <div className="text-5xl">Make your resume more <br /> <div className="mt-4 font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500 font-mono">AI-Full.</div></div>

        <div className="text-3xl bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 bg-[length:100%_6px] bg-no-repeat bg-bottom w-fit">
          Let AI do the heavy lifting – your dream job is just a click away!
        </div>
        <div>
          <Link to={"/dashboard"}>
            <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
              <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 text-lg font-bold">
                Get started
              </span>
            </button>

          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
