import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home"
import Services from "../pages/Services";
import Contact from "../pages/Contact";
import Lease from "../pages/Lease";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path ="/home" element={<Home />} />
            <Route path ="/services" element={<Services />} />
            <Route path ="/contact" element={<Contact />} />
            <Route path ="/lease" element={<Lease />} />
        </Routes>
    )
}

export default AppRoutes;