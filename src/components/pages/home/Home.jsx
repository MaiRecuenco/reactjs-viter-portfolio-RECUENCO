import React from "react";
import Header from "../../partials/Header";
import { FaBusinessTime, FaCode } from "react-icons/fa";
import { FaCodeMerge } from "react-icons/fa6";
import { IoLogoCodepen } from "react-icons/io";
import { MdOutlineGraphicEq } from "react-icons/md";
import { SiMinds } from "react-icons/si";
import Banner from "./banner/Banner";
import About from "./about/About";
import Skills from "./skills/Skills";

const Home = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-100 flex flex-col smooth-scroll">
        <Header />
        <main className="flex-grow">
          <div className="relative">
            <Banner />
            <About />
            <Skills />

            {/* Education */}
            <section></section>
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;
