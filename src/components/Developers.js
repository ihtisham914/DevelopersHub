import React, { useState } from "react";
import AddForm from "./AddForm";
import "../index.css";

// get data from local storage
const getLocalData = () => {
  const dev = localStorage.getItem("devs");

  if (dev) {
    return JSON.parse(dev);
  } else {
    return [];
  }
};

// window.localStorage.clear();
const Developers = () => {
  const [showdevs, setShowDevs] = useState(true);
  const [dev, setDev] = useState(getLocalData());
  const [openForm, setOpenForm] = useState(false);

  const className = !openForm ? "" : "redcolor";

  return (
    <div className="flex flex-col justify-center">
      <div className="flex items-center justify-between gap-10rem p-0.5rem pl-1rem pr-1rem border-rounded mb-2rem bg-green-100 w-60rem">
        <h2 className="text-green-600">
          <span className="text-green-500">Dev</span>Hub
        </h2>
        <div className="flex gap-2rem">
          <button
            className={`${className} border-rounded bg-green-500 text-sm border-green w-8rem p-0.5rem text-white hover:bg-green-400 transition  cursor-pointer`}
            onClick={() => {
              openForm ? setOpenForm(false) : setOpenForm(true);
            }}
          >
            {openForm ? "Close Form" : "Add Developer"}
          </button>
          <button
            className="border-rounded bg-white  text-sm  p-0.5rem border-green w-9rem hover:bg-green-400 hover:text-white transition  cursor-pointer"
            onClick={() => {
              showdevs ? setShowDevs(false) : setShowDevs(true);
            }}
          >
            {showdevs ? "Hide Developers" : "Show Developers"}
          </button>
        </div>
      </div>
      {openForm ? (
        <AddForm dev={dev} setDev={setDev} setOpenForm={setOpenForm} />
      ) : (
        ""
      )}

      <div>
        {showdevs ? (
          <div className="grid grid-cols-3 gap-2rem pb-2rem">
            {dev.map((person, index) => (
              <div
                className="p-2rem shadow-xl w-15rem"
                key={person.id}
                data-aos="fade-left"
                data-aos-delay={60 * index}
              >
                <span className="p-sm bg-gray-100 b-rd-30% text-gray-400 font-bold">
                  {index + 1}
                </span>
                <h2 className="mt-2rem text-gray-600">{person.name}</h2>
                <span className="text-0.8rem text-Gray-600 font-semibold">
                  Skill: <span className="text-green-500">{person.skill}</span>
                </span>
                <p>{person.desc}</p>
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
