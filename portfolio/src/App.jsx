import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Project from "./Pages/Projects/Project";
// Fixed the import name here to match your JSX below
import ProjectDetails from "./Pages/ProjectDetails/ProjectDetails"; 
import Contact from "./Pages/Contact/Contact";
import NotFound from "./Pages/NotFound/NotFound";

function App() { 
  return ( 
    <BrowserRouter> 
      <NavBar /> 
      <Routes> 
        <Route path="/" element={<Home />} /> 
        <Route path="/about" element={<About />} /> 
        <Route path="/projects" element={<Project />} /> 
        {/* Now this matches the import perfectly */}
        <Route path="/projects/:id" element={<ProjectDetails />} /> 
        <Route path="/contact" element={<Contact />} /> 
        <Route path="*" element={<NotFound />} /> 
      </Routes> 
      <Footer /> 
    </BrowserRouter> 
  ); 
} 

export default App;
