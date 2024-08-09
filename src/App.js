import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import backLogo from "./assets/herobg.png";
import Stats from "./components/Stats";
import Experience from "./components/Experience";


function App() {
  return (
    <div>
      <Navbar />
      <div className="relative min-h-screen">
        <img
          className="absolute -z-10 min-h-screen object-cover"
          src={backLogo}
          alt=""
        />
        <div className="z-2 ">
          <Home id="home" />
        </div>
      </div>

      <div className="bg-[#030519]">
        <About />
        <Skills />
        <Work />
        <Stats />
        <Experience/>
        <Contact />
      </div>
    </div>
  );
}

export default App;
