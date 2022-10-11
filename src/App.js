import AOS from "aos";
import "aos/dist/aos.css";

import Developers from "./components/Developers";

function App() {
  AOS.init();
  return (
    <div className="flex items-center justify-center pt-2rem  mr-1rem ml-1rem lg:mr-15rem lg:ml-15rem md:mr-5rem md:ml-5rem">
      <Developers />
    </div>
  );
}

export default App;
