import { Routes, Route } from "react-router-dom";
import Toaster from "react-hot-toast";
import {
  About,
  Appointment,
  Footer,
  Home,
  Login,
  Navbar,
  Reviews,
  Signup,
} from "./Pages/index";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/Reviews" element={<Reviews />} />
      </Routes>
      <Footer />

      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}

export default App;
