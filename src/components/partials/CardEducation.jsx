import React from "react";

const CardEducation = ({logo, alt, level, course, school}) => {
  return (
    <>
      <div className="flex flex-col md:flex-shrink items-center text-center md:text-left space-x-4 mb-6 rounded-2xl bg-white/50 px-5 py-4 mx-auto w-full md:w-[26rem]">
        <img
          src={logo}
          alt={alt}
          className="rounded-full mb-6 shadow-2xl w-32 h-32 p-3"
        />
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-orange-600 max-w-3xl">
            {level}{" "}
          </h3>
          <p className="text-lg text-gray-700 mx-auto font-bold text-center md:text-left">
            {course}
          </p>
          <p className="text-gray-500">{school}</p>
        </div>
      </div>
    </>
  );
};

export default CardEducation;
