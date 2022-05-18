import { Routes, Route } from "react-router-dom";
import Toaster from "react-hot-toast";
import RequireAuth from "./Pages/Shared/RequireAuth";
import {
  About,
  Appointment,
  Dashboard,
  Footer,
  Home,
  Login,
  MyAppointment,
  MyHistory,
  MyReview,
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
        <Route path="/reviews" element={<Reviews />} />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<MyAppointment />} />
          <Route path="review" element={<MyReview />} />
          <Route path="history" element={<MyHistory />} />
        </Route>
      </Routes>
      <Footer />

      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}

export default App;
