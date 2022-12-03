import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Services from "./pages/Services";
import Home from "./pages/Home";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Clients from "./pages/Clients";
import Blogs from "./pages/Blogs";
import Blog from "./pages/Blog";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/Services/:id" element={<Services />} />
        <Route path="/Work" element={<Work />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="/Clients" element={<Clients />} />
        <Route path="/Blogs" element={<Blogs />} />
        <Route path="/Blogs/:id" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
