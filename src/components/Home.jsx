import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";


const Home = () => {
  return (
    <div id="home" name="home" className="w-full  h-screen  bg-transparent ">
      {/* Container */}
      <div
        id="user-detail-intro"
        className="max-w-[1000px]  mx-auto px-8 flex flex-col justify-center h-full"
      >
        <p className="text-pink-600">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Rinkesh
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          Full Stack Web Developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]"></p>
        <div>
          <Link to="experience" smooth={true} duration={1000}>
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
              View Experience
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3 " />
              </span>
            </button>
          </Link>
        </div>
      </div>
  
    </div>
  );
};

export default Home;
