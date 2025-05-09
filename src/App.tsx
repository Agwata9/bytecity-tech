
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Training from "./pages/Training";
import Store from "./pages/Store";
import Careers from "./pages/Careers";
import ContactUs from "./pages/ContactUs";
import NavbarComponent from "./components/NavbarComponent";
import Footer from "./components/Footer";
import AboutUs from "./pages/AboutUs";
import WebDesignPage from "./pages/WebDesignPage";
import GraphicDesignPage from "./pages/GraphicDesignPage";
import SocialMediaManagementPage from "./pages/SocialMediaManagementPage";

const App: React.FC = () => {
  // Function to handle the submitted data from the modal

  return (
    <Router>
      <NavbarComponent />
      <div className="container text-center my-3">
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/training" element={<Training />} />
        <Route path="/store" element={<Store />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/web-design" element={<WebDesignPage />} />
        <Route path="/graphic-design" element={<GraphicDesignPage />} />
        <Route path="/social-media-management" element={<SocialMediaManagementPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
