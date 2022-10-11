import AOS from "aos";
import "aos/dist/aos.css";

import Developers from "./components/Developers";

function App() {
  AOS.init();
  return (
    <div className="flex items-center justify-center pt-2rem pl-5rem pr-5rem  w-80rem">
      <Developers />
    </div>
  );
}

export default App;
