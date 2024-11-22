"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <div>
      <nav className="flex justify-between w-full h-auto  md:h-14 p-2 px-8 bg-[#865d36]">
        <h1 className="text-2xl md:text-3xl font-bold font-mono text-center md:mx-12 text-[#3e362e]">
          Nimra Rasheed
        </h1>

        {/* Hamburger Icon */}
        <div
          className="flex text-black text-2xl cursor-pointer md:hidden items-center"
          onClick={toggleSidebar}
        >
          <FontAwesomeIcon icon={faBars} size="lg" className="text-xl" />
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex gap-20 items-center">
          <a href="#about">
            <li className="navlinks">About</li>
          </a>
          <a href="#skills">
            <li className="navlinks">Skills</li>
          </a>
          <a href="#projects">
            <li className="navlinks">Projects</li>
          </a>
          <a href="#contact">
            <li className="navlinks">Contact</li>
          </a>
        </ul>
      </nav>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#3e362e] text-white z-50 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300`}
      >
        <div className="flex justify-between items-center p-4 bg-[#865d36]">
          <h2 className="text-lg font-bold">Menu</h2>
          {/* Close Icon */}
          <div
            className="text-white text-2xl cursor-pointer"
            onClick={toggleSidebar}
          >
            <FontAwesomeIcon icon={faTimes} />
          </div>
        </div>
        <ul className="flex flex-col gap-4 p-4">
          <a href="#about">
            <li className="hover:bg-[#865d36] p-2 rounded">About</li>
          </a>
          <a href="#skills">
            <li className="hover:bg-[#865d36] p-2 rounded">Skills</li>
          </a>
          <a href="#projects">
            <li className="hover:bg-[#865d36] p-2 rounded">Projects</li>
          </a>
          <a href="#contact">
            <li className="hover:bg-[#865d36] p-2 rounded">Contact</li>
          </a>
        </ul>
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
}
