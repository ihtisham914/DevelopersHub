import { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Developers from "./components/Developers";

function App() {
  AOS.init();
  const person = [
    {
      id: 1,
      name: "Ihtisham ul haq",
      skill: "Nuxtjs",
      desc: "Nuxtjs developer Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, libero labore dolore accusamus excepturi neque ",
    },
    {
      id: 2,
      name: "Umair ahmad khan",
      skill: "Flutter",
      desc: "Flutter developer Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, libero labore dolore accusamus excepturi neque ",
    },
    {
      id: 3,
      name: "Hikmat Bangash",
      skill: "Full Stack",
      desc: "Full stack developer Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, libero labore dolore accusamus excepturi neque ",
    },
    {
      id: 4,
      name: "Masab Gull",
      skill: "Andriod",
      desc: "Andriod developer Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, libero labore dolore accusamus excepturi neque ",
    },
  ];

  const [data, setData] = useState(person);

  return (
    <div className="flex items-center justify-center pt-2rem pl-5rem pr-5rem  w-80rem">
      <Developers />
    </div>
  );
}

export default App;
