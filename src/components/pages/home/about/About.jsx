import React from "react";
import CardEducation from "../../../partials/CardEducation";

const About = () => {
  return (
    <>
      {/* About Me Section */}
      <section className="bg-[url(./images/home-banner.webp)] bg-cover bg-center bg-no-repeat">
        <div className="max-w-7xl mx-auto px-4 pt-16 sm:pt-24">
          <div>
            <h2 className="text-6xl font-bold text-left mb-16 text-orange-600">
              About Me
            </h2>
            <div className=" text-left gap-20 flex flex-col md:flex-row">
              <div className="flex justify-center items-center">
                <img
                  src="./images/about.webp"
                  alt="About Me"
                  className="rounded-lg mb-6 max-w-sm md:max-w-md shadow-lg "
                />
              </div>

              <div className="justify-center items-left flex flex-col">
                <h3 className="text-3xl font-semibold mb-4 text-orange-600 max-w-3xl">
                  Hello! I'm Jamaila Recuenco - A Front-End Developer
                </h3>
                <p className="italic text-orange-500 ">
                  pag di pinalad taga-stapler na lang ng papers sa munisipyo
                </p>
                <p className=" text-lg text-gray-700 max-w-4xl mx-auto my-5">
                  A woman who is driven by a deep passion for the art of visual
                  communication. My journey began with a computer science
                  degree, which instilled in me a unique blend of technical
                  knowledge and constant creative spirit.
                </p>
                <p className="text-lg text-gray-700 max-w-4xl mx-auto my-5">
                  Whether it's designing a captivating social media campaign or
                  visualizing complex data in a meaningful way, I'm dedicated to
                  using my skills to create experiences that leave a lasting
                  impression. I'm always eager to learn, evolve, and push the
                  boundaries of what's possible in the ever-changing landscape
                  of digital design.
                </p>
                <p className="text-lg text-gray-700 max-w-3xl mx-auto my-5 text-left font-bold">
                  So, let's go and know me more!
                </p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="py-10">
            <h3 className="text-4xl font-bold text-center mb-10 text-orange-600">
              Education
            </h3>
            <div className="flex flex-col md:flex-row lg:gap-0 ">
              {/* Card Education Items */}
              <CardEducation
                logo={"./images/snhs-logo.webp"}
                alt={"SNHS logo"}
                level={" HIGH SCHOOL | 2016-2020"}
                course={"TVL - Computer System Servicing"}
                school={"Saban National High School"}
              />

              <CardEducation
                logo={"./images/bu-logo.webp"}
                alt={"Bicol University logo"}
                level={"BACHELOR DEGREE | 2022-2026"}
                course={"Bachelor of Science in Computer Science"}
                school={"Bicol University Polangui"}
              />
              {/* <div className="flex flex-col md:flex-shrink items-center text-center md:text-left space-x-4 mx-auto mb-6 rounded-2xl bg-white/50 px-5 py-4">
                <img
                  src="./images/snhs-logo.webp"
                  alt="Education"
                  className="rounded-full mb-6 shadow-2xl w-32 h-32 p-3"
                />
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-orange-600 max-w-3xl">
                    HIGH SCHOOL | 2016-2020{" "}
                  </h3>
                  <p className="text-lg text-gray-700 mx-auto font-bold text-center md:text-left">
                    Bachelor of Science in Computer Science
                  </p>
                  <p className="text-gray-500"> Bicol University Polangui</p>
                </div>
              </div> */}
              {/* <div className="flex flex-col md:flex-shrink items-center text-center md:text-left space-x-4  mx-auto mb-6 rounded-2xl bg-white/50 px-5 py-4">
                <img
                  src="./images/bu-logo.webp"
                  alt="Education"
                  className="rounded-full mb-6 shadow-2xl w-32 h-32"
                />
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-orange-600 max-w-3xl">
                    BACHELOR DEGREE | 2022-2026{" "}
                  </h3>
                  <p className="text-lg text-gray-700 mx-auto font-bold text-left">
                    Bachelor of Science in Computer Science
                  </p>
                  <p className="text-gray-500"> Bicol University Polangui</p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
