import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Services from "./Pages/Services/Services";
import Cars from "./Pages/Cars/Cars";
import { useInView } from "react-intersection-observer";
import Logos from "./Pages/Logos/Logos";
import Footer from "./Pages/Footer/Footer";

function App() {
  const { ref, inView: intersect } = useInView();

  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/about" element={<About />} />
    //     <Route path="/services" element={<Services />} />
    //     <Route path="/cars" element={<Cars />} />
    //     {/* <Route path="/contact" element={<About />} /> */}
    //   </Routes>
    // </BrowserRouter>
    <div>
      <Home intersect={intersect} />
      <div ref={ref}>
        <About />
        <Services />
        <Cars />
        <Logos />
        <Footer />
      </div>
    </div>
  );
}

export default App;
