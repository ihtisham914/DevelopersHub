import React, { useEffect, useState } from "react";
import AddForm from "./AddForm";
import "../index.css";
import HeroSection from "./HeroSection";

// get data from local storage
// const getLocalData = () => {
//   const dev = localStorage.getItem("devs");

//   if (dev) {
//     return JSON.parse(dev);
//   } else {
//     return [];
//   }
// };

// window.localStorage.clear();
const Developers = ({ devs }) => {
  const [showdevs, setShowDevs] = useState(true);
  const [dev, setDev] = useState(devs);
  const [openForm, setOpenForm] = useState(false);

  useEffect(() => {
    document.title = `DevHub (${dev.length})`;
  }, [dev]);

  const className = !openForm ? "" : "redcolor";

  return (
    <div className="flex flex-col justify-center ">
      <div className="flex items-center justify-between gap-2rem p-0.5rem pl-1rem pr-1rem border-rounded mb-2rem bg-green-100 ">
        <h2 className="text-green-600">
          <span className="text-green-500">Dev</span>Hub
        </h2>
        <div className="flex gap-0.5rem md:gap-2rem lg:gap-2rem">
          <button
            className={`${className} border-rounded bg-green-500 text-sm border-green  p-0.5rem text-white hover:bg-green-400 transition  cursor-pointer`}
            onClick={() => {
              openForm ? setOpenForm(false) : setOpenForm(true);
            }}
          >
            {openForm ? "Close" : "Add Dev"}
          </button>
          <button
            className="border-rounded bg-white  text-sm  p-0.5rem border-green  hover:bg-green-400 hover:text-white transition  cursor-pointer"
            onClick={() => {
              showdevs ? setShowDevs(false) : setShowDevs(true);
            }}
          >
            {showdevs ? "Hide Devs" : "Show Devs"}
          </button>
        </div>
      </div>
      {openForm ? (
        <AddForm dev={dev} setDev={setDev} setOpenForm={setOpenForm} />
      ) : (
        ""
      )}

      <HeroSection
        openForm={openForm}
        setOpenForm={setOpenForm}
        className={className}
      />

      <div>
        {showdevs ? (
          <div className="grid grid-cols-1 gap-2rem pb-2rem md:grid-cols-2 lg:grid-cols-3">
            {dev.map((person, index) => (
              <div
                className="p-2rem shadow-xl hover:shadow-2xl cursor-pointer"
                key={person.id}
                data-aos="fade-left"
                data-aos-delay={60 * index}
              >
                <span className="p-sm bg-gray-100 b-rd-30% text-gray-400 font-bold">
                  {index + 1}
                </span>
                <h2 className="text-2xl mt-2rem text-gray-600">
                  {person.name}
                </h2>
                <span className="text-xl text-Gray-600 font-semibold ">
                  Skill: <span className="text-green-500">{person.skill}</span>
                </span>
                <p className="text-xl">{person.desc}</p>
              </div>
            ))}
          </div>
        ) : (
          ""
        )}
        {(length) =>
          0 ? (
            <div className="text-gray-500 text-center">
              <h2>No developers to show</h2>
              <p>Please add some</p>
            </div>
          ) : (
            ""
          )
        }
      </div>
    </div>
  );
};

export default Developers;
