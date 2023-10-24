import { About } from "./pages/About";
import { Careers } from "./pages/Careers";
import { Contact } from "./pages/Contact";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";

const App = () => {

  return(
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/contact-us" element={<Contact />} />
    </Routes>
    
  )
}

export default App; 