import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill, BsPhone } from "react-icons/bs";

import { Link } from "react-scroll";
import Resume from "../assets/resume.pdf";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  function handleNewPage() {
    // console.log("YES");
    window.open(
      `https://drive.google.com/file/d/14VgJuZ_uCFUXsmEmKbEP27_Zfm0S3hF3/view?usp=sharing`,
      "_blank"
    );
  }

  return (
    <div
      id="nav-menu"
      className="fixed w-full h-[80px] flex justify-between items-center z-10 px-4 bg-[#030519] text-gray-300"
    >
      <div className="flex justify-center items-center font-extrabold">
      
        <div id="user-detail-name">Rinkesh</div>
      </div>

      {/* menu */}
      <ul className="hidden md:flex">
        <li className="nav-link home">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="nav-link about">
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="nav-link skills">
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="nav-link projects">
          <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="nav-link contact">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
        <li id="resume-button-1" className="nav-link resume">
          <a id="resume-link-1" href={Resume} download={"Rinkesh-Resume"} onClick={handleNewPage}>
            Resume
          </a>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#030519] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
        <li className="nav-link resume py-6 text-4xl">
          <a href={Resume} onClick={handleNewPage} download={"Rinkesh-Resume"}>
            Resume
          </a>
        </li>
      </ul>

      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/rinkesh-b489961a8/"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/Rinkesh375"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="mailto:rinkeshujjwal16@gmail.com"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li
            id="resume-link-2"
            className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]"
          >
            <a
              id="resume-link-2"
              className="flex justify-between items-center w-full text-gray-300"
              href={Resume}
              download={"Rinkesh-Resume"}
              onClick={handleNewPage}
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#f87171]">
            <a
              id="resume-button-2"
              className="flex justify-between items-center w-full text-gray-300"
              href="tel:8505821018"
            >
              Call <BsPhone size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
