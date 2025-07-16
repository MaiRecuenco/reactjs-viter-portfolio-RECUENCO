import React from "react";
import Header from "../../partials/Header";
import { FaBusinessTime, FaCode } from "react-icons/fa";
import { FaCodeMerge } from "react-icons/fa6";
import { IoLogoCodepen } from "react-icons/io";
import { MdOutlineGraphicEq } from "react-icons/md";
import { SiMinds } from "react-icons/si";

const Home = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-100 smooth-scroll">
        <Header />
        <main className="flex-grow">
          <div className="relative">
            {/* Hero Section */}
            <div className="relative h-screen">
              <div className="absolute inset-0 bg-black opacity-20"></div>
              <img
                src="./images/home-banner.webp"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center text-center px-4">
                <div>
                  <div className=" grid grid-cols-1 lg:grid-cols-[1.25fr_.50fr_1.25fr] text-center max-w-7xl mx-auto">
                    <div>
                      <h1 className="mt-4 text-lg md:text-[10rem] text-white drop-shadow-2xl font-bold mb-2">
                        DESIGNING
                      </h1>
                      <h2 className="text-5xl md:text-7xl text-orange-600 drop-shadow-2xl text-center font-black">
                        SOLUTIONS
                      </h2>
                    </div>
                    <div className="mt-4 text-lg md:text-2xl text-white drop-shadow-lg">
                      <p className="text-4xl">while</p>
                    </div>
                    <div>
                      <h1 className="mt-4 text-lg md:text-[10rem] text-white drop-shadow-2xl font-bold mb-2">
                        BUILDING
                      </h1>
                      <h2 className="text-5xl md:text-7xl text-orange-600 drop-shadow-2xl text-center ml-6 font-black">
                        WEBSITES
                      </h2>
                    </div>
                  </div>
                  <p className="text text-2xl md:text-3xl text-black/50 drop-shadow-lg mt-6 mt-20 max-w-3xl mx-auto text-center ">
                    I'm Jamaila, your partner in Front-End Development & Design{" "}
                  </p>
                </div>
              </div>
            </div>

            {/* About Me Section */}
            <section className="bg-[url(./images/home-banner.webp)] bg-cover bg-center bg-no-repeat h-screen">
              <div className="max-w-7xl mx-auto px-4 pt-16 sm:pt-24">
                <div>
                  <h2 className="text-6xl font-bold text-left mb-16 text-orange-600">
                    About Me
                  </h2>
                  <div className="flex text-left gap-20 ">
                    <img
                      src="./images/about.webp"
                      alt="About Me"
                      className="rounded-lg mb-6 max-w-md shadow-lg"
                    />
                    <div className="justify-center items-left flex flex-col">
                      <h3 className="text-3xl font-semibold mb-4 text-orange-600 max-w-3xl">
                        Hello! I'm Jamaila Recuenco - A Front-End Developer
                      </h3>
                      <p className="italic text-orange-500 ">
                        pag di pinalad taga-stapler na lang ng papers sa
                        munisipyo
                      </p>
                      <p className="text-lg text-gray-700 max-w-4xl mx-auto my-5">
                        A woman who is driven by a deep passion for the art of
                        visual communication. My journey began with a computer
                        science degree, which instilled in me a unique blend of
                        technical knowledge and constant creative spirit.
                      </p>
                      <p className="text-lg text-gray-700 max-w-4xl mx-auto my-5">
                        Whether it's designing a captivating social media
                        campaign or visualizing complex data in a meaningful
                        way, I'm dedicated to using my skills to create
                        experiences that leave a lasting impression. I'm always
                        eager to learn, evolve, and push the boundaries of
                        what's possible in the ever-changing landscape of
                        digital design.
                      </p>
                      <p className="text-lg text-gray-700 max-w-3xl mx-auto my-5 text-left font-bold">
                        So, let's go and know me more!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Skills */}
            <section className="relative h-screen">
              <div className="absolute inset-0 bg-[url(./images/home-banner.webp)] bg-cover bg-center bg-no-repeat -scale-y-100 "></div>

              <div className="max-w-7xl mx-auto px-4 pt-16 sm:py-24 relative z-10">
                <div>
                  <h2 className="text-6xl font-bold text-center mb-16 text-orange-600">
                    Skills
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center ">
                    <div className="">
                      <h3 className="text-2xl font-bold ">
                        Programming Language
                      </h3>
                      <div className="flex items-center space-x- mt-4 rounded-lg bg-gray-100 p-4 shadow-lg max-w-72">
                        <FaCode className="inline-block text-6xl text-orange-600 mr-2 bg-gray-300 rounded-full p-3 " />
                        <span className="text-2xl text-gray-700">HTML</span>
                      </div>
                      <div className="flex items-center space-x- mt-4 rounded-lg bg-gray-100 p-4 shadow-lg max-w-72">
                        <FaCode className="inline-block text-6xl text-orange-600 mr-2 bg-gray-300 rounded-full p-3 " />
                        <span className="text-2xl text-gray-700">CSS</span>
                      </div>
                      <div className="flex items-center space-x- mt-4 rounded-lg bg-gray-100 p-4 shadow-lg max-w-72">
                        <FaCode className="inline-block text-6xl text-orange-600 mr-2 bg-gray-300 rounded-full p-3 " />
                        <span className="text-2xl text-gray-700">C++</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mt-8">
                        Front-End Frameworks
                      </h3>
                      <div className="flex items-center space-x- mt-4 rounded-lg bg-gray-100 p-4 shadow-lg max-w-72">
                        <FaCode className="inline-block text-6xl text-orange-600 mr-2 bg-gray-300 rounded-full p-3 " />
                        <span className="text-2xl text-gray-700">React</span>
                      </div>
                      <div className="flex items-center space-x- mt-4 rounded-lg bg-gray-100 p-4 shadow-lg max-w-72">
                        <FaCode className="inline-block text-6xl text-orange-600 mr-2 bg-gray-300 rounded-full p-3 " />
                        <span className="text-2xl text-gray-700">
                          Tailwind CSS
                        </span>
                      </div>
                    </div>
                    <div>
                      <div>
                        <h3 className="text-2xl font-bold">Soft Skills</h3>
                        <div className="flex items-center space-x- mt-4 rounded-full bg-gray-100 p-4 shadow-lg max-w-72">
                          <MdOutlineGraphicEq className="inline-block text-6xl text-orange-600 mr-2 bg-gray-300 rounded-full p-2 " />
                          <span className="text-2xl text-gray-700">
                            Communication
                          </span>
                        </div>
                        <div className="flex items-center space-x- mt-4 rounded-full bg-gray-100 p-4 shadow-full max-w-72">
                          <FaBusinessTime className="inline-block text-6xl text-orange-600 mr-2 bg-gray-300 rounded-full p-3 " />
                          <span className="text-2xl text-gray-700">
                            Time-management
                          </span>
                        </div>
                        <div className="flex items-center space-x- mt-4 rounded-full bg-gray-100 p-4 shadow-full max-w-72">
                          <IoLogoCodepen className="inline-block text-6xl text-orange-600 mr-2 bg-gray-300 rounded-full p-3 " />
                          <span className="text-2xl text-gray-700">
                            Adaptability
                          </span>
                        </div>
                        <div className="flex items-center space-x- mt-4 rounded-full bg-gray-100 p-4 shadow-lg max-w-72">
                          <SiMinds className="inline-block text-6xl text-orange-600 mr-2 bg-gray-300 rounded-full p-3 " />
                          <span className="text-2xl text-gray-700">
                            Critical Thinking
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Education */}
            <section>
              <div className="max-w-7xl mx-auto px-4 pt-16 sm:py-24">
                <h2 className="text-6xl font-bold text-center mb-16 text-orange-600">
                  Education
                </h2>
                <div className="">
                  <div className="flex items-center space-x-4 max-w-2xl mx-auto">
                    <img
                      src="./images/bu-logo.webp"
                      alt="Education"
                      className="rounded-full mb-6 shadow-2xl w-32 h-32"
                    />
                    <div>
                      <h3 className="text-3xl font-semibold mb-4 text-orange-600 max-w-3xl">
                        BACHELOR DEGREE | 2022-2026{" "}
                      </h3>
                      <p className="text-lg text-gray-700 mx-auto font-bold text-left">
                        Bachelor of Science in Computer Science
                      </p>
                      <p className="text-gray-500">
                        {" "}
                        Bicol University Polangui
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;
