import React from "react";
import { FaBusinessTime, FaCode } from "react-icons/fa";
import { IoLogoCodepen } from "react-icons/io";
import { MdOutlineGraphicEq } from "react-icons/md";
import { SiMinds } from "react-icons/si";
import CardSkill from "../../../partials/CardSkill";
import CardSoftSkill from "../../../partials/CardSoftSkill";

const Skills = () => {
  return (
    <>
      {/* Skills */}
      <section className="relative py-10">
        <div className="absolute inset-0 bg-[url(./images/home-banner.webp)] bg-cover bg-center bg-no-repeat -scale-y-100 "></div>

        <div className="max-w-7xl mx-auto px-4 pt-16 sm:py-24 relative z-10">
          <div>
            <h2 className="text-6xl font-bold text-center mb-16 text-orange-600">
              Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 justify-items-center mb-5">
              <div className="">
                <h3 className="text-2xl font-bold ">Programming Language</h3>
                <CardSkill icon={FaCode} title={"HTML"} />
                <CardSkill icon={FaCode} title={"CSS"} />
                <CardSkill icon={FaCode} title={"C++"} />
              </div>

              {/* Front-End Frameworks */}
              <div>
                <h3 className="text-2xl font-bold mt-8">
                  Front-End Frameworks
                </h3>
                  <CardSkill icon={FaCode} title={"Tailwind"} />
                  <CardSkill icon={FaCode} title={"React JS"} />
              </div>
              <div>
                <div>
                  <h3 className="text-2xl font-bold text-center">Soft Skills</h3>
                    <CardSoftSkill 
                    icon={MdOutlineGraphicEq}
                    title={"Communication"}
                    />
                    <CardSoftSkill 
                    icon={FaBusinessTime}
                    title={"Time-management"}
                    />
                    <CardSoftSkill 
                    icon={IoLogoCodepen}
                    title={"Adaptability"}
                    />
                    <CardSoftSkill 
                    icon={SiMinds}
                    title={"Critical Thinking"}
                    />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
