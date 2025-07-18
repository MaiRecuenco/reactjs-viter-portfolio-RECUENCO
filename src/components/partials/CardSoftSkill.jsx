import React from "react";

const CardSoftSkill = ({ icon: Icon, title }) => {
  return (
    <>
      <div className="flex items-center space-x- mt-4 rounded-full bg-gray-100 p-4 shadow-lg max-w-72">
        <Icon className="inline-block text-6xl text-orange-600 mr-2 bg-gray-300 rounded-full p-2 " />
        <span className="text-2xl text-gray-700">{title}</span>
      </div>
    </>
  );
};

export default CardSoftSkill;
