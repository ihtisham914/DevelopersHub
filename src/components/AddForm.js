import { React, useState } from "react";

const AddForm = ({ dev, setDev, setOpenForm }) => {
  const [inputText, setInputText] = useState("");
  const [skill, setSkill] = useState("");
  const [desc, setDesc] = useState("");
  const [show, setShow] = useState(true);

  const onSubmit = (event) => {
    event.preventDefault();

    if (!inputText || !skill || !desc) alert("Please fill all the fields");
    else {
      const newDev = {
        id: new Date().getTime().toString(),
        name: inputText,
        skill: skill,
        desc: desc,
      };
      setDev([...dev, newDev]);

      setInputText("");
      setSkill("");
      setDesc("");
      setShow(false);
      setOpenForm(false);
    }
  };

  // saving data in local storage
  // useEffect(() => {
  //   localStorage.setItem("devs", JSON.stringify(dev));
  // }, [dev]);

  return (
    <div>
      {show ? (
        <form
          className="flex flex-col  gap-2rem p-3rem shadow-md mb-3rem "
          onSubmit={onSubmit}
          data-aos="fade-down"
        >
          <div className="flex items-center justify-center  gap-2rem">
            <input
              className="p-0.5rem  outline-indigo-2px focus:outline-green border-red w-100% text-xl"
              type="text"
              placeholder="Enter name"
              value={inputText}
              onChange={(event) => setInputText(event.target.value)}
            />
          </div>
          <div className="flex items-center justify-center gap-2rem">
            <input
              className="p-0.5rem  outline-indigo-2px focus:outline-green border-red w-100% text-xl"
              type="text"
              value={skill}
              onChange={(event) => setSkill(event.target.value)}
              placeholder="Enter Skill"
            />
          </div>
          <div className="flex items-center justify-center gap-2rem">
            <input
              className="p-0.5rem  outline-indigo-2px focus:outline-green border-red w-100% text-xl"
              type="text"
              value={desc}
              onChange={(event) => setDesc(event.target.value)}
              placeholder="Add a short description"
            />
          </div>

          <button className="border-none bg-green-500 p-0.5rem text-xl text-white hover:bg-green-400 transition  cursor-pointer">
            Add Developer
          </button>
        </form>
      ) : (
        <div />
      )}
    </div>
  );
};

export default AddForm;
