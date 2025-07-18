import React from "react";

const Banner = () => {
  return (
    <>
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
              <div className="relative inline-block">
                <h1 className="mt-4 text-9xl md:text-[10rem] text-white drop-shadow-2xl font-bold inline-block">
                  DESIGNING
                </h1>
                <h2 className="absolute top-24 left-16 md:top-28 md:left-[4rem] transform text-6xl md:text-7xl text-orange-600 inline-block drop-shadow-2xl font-black">
                  SOLUTIONS
                </h2>
              </div>
              <div className=" mt-2 md:mt-20 md:text-2xl text-white drop-shadow-lg p-5">
                <p className=" text-2xl md:text-4xl">while</p>
              </div>
              <div className="relative inline-block">
                <h1 className="mt-4 text-9xl md:text-[10rem] text-white drop-shadow-2xl font-bold inline-block">
                  BUILDING
                </h1>
                <h2 className="absolute top-24 left-20 md:top-28 md:left-[5rem] transform text-6xl md:text-7xl text-orange-600 inline-block drop-shadow-2xl font-black">
                  WEBSITES
                </h2>
              </div>
            </div>
            <p className="text text-2xl md:text-3xl text-black/50 drop-shadow-lg mt-24 max-w-xl leading-10 mx-auto text-center ">
              I'm Jamaila, your partner in Front-End Development & Design{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
