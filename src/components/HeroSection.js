import React from "react";

const HeroSection = ({ openForm, setOpenForm, className }) => {
  return (
    <div className="p-2rem md:p-4rem lg:p-4rem bg-green-50 mb-20 ">
      <h1 className="text-green-600 text-center md:text-start lg:text-start">
        <span className="text-green-500">Dev</span>Hub
      </h1>
      <p className="text-xl md:text-3xl lg:text-3xl text-center md:text-start lg:text-start">
        <span className="text-green-600">Dev</span>
        <span className="text-green-500 ">Hub</span> is a platfrom where you can
        find the best developers and Software Engineers as well as Freelancers,
        You can add yourself too. Just hit the button and add one 🙌
      </p>
      <button
        className={`${className}  border-rounded bg-green-500 text-sm border-green  p-0.5rem text-white hover:bg-green-400 transition  cursor-pointer`}
        onClick={() => {
          openForm ? setOpenForm(false) : setOpenForm(true);
        }}
      >
        {openForm ? "Close" : "Add Dev"}
      </button>
    </div>
  );
};

export default HeroSection;
