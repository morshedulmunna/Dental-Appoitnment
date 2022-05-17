import { Routes, Route } from "react-router-dom";
import {
  About,
  Appointment,
  Footer,
  Home,
  Login,
  Navbar,
  Reviews,
} from "./Pages/index";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/Reviews" element={<Reviews />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
