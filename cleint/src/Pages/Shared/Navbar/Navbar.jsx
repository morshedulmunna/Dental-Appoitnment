import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebaseConfig";
import { signOut } from "firebase/auth";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const menu = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>

      <li>
        <Link to="/about">About</Link>
      </li>

      <li>
        <Link to="/appointment">Appointment</Link>
      </li>

      <li>
        <Link to="/reviews">Reviews</Link>
      </li>

      <li>
        <Link to="/contact">Contact us</Link>
      </li>
      <li className="border-l-[1px] border-slate-300 font-bold">
        {user ? (
          <Link
            className="text-red-800"
            onClick={() => signOut(auth)}
            to="/login"
          >
            Logut
          </Link>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </li>
    </>
  );
  return (
    <>
      <div className="navbar bg-base-100 flex justify-between sticky top-0 z-40 px-0 lg:px-28">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menu}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-xl font-bold uppercase">
            Doctor Portals
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{menu}</ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
