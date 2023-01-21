import React from "react"
// import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import logo from "../../static/logos/map-logo-removebg-preview 1.png"

const Navbar = () => {
  return (
    <div className="navbar fixed shadow-xl px-20 flex justify-center top-0 z-10 bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label htmlFor="svg" className="btn btn-ghost lg:hidden">
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
            id="svg"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li className="text-md font-bold-md">
              <Link to="/">Home</Link>
            </li>
            <li className="text-md font-bold-md">
              <Link to="/events">Events</Link>
            </li>
            <li className="text-md font-bold-md">
              <Link to="/updates">Updates</Link>
            </li>
            <li className="text-md font-bold-md">
              <Link to="/about">About Us</Link>
            </li>
            <li className="text-md font-bold-md">
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link
                to="/members"
                className="btn btn-sm text-white rounded-full text-md hover:bg-orange-300 font-bold-md bg-[#ED8F1D]"
              >
                Become a Member
              </Link>
            </li>
          </ul>
        </div>
        <Link to="/" className="">
          <img className="w-20" src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center gap-10 hidden lg:flex">
        <ul className="menu gap-6 menu-horizontal px-1">
          <li className="text-md font-bold-md">
            <Link to="/">Home</Link>
          </li>
          <li className="text-md font-bold-md">
            <Link to="/events">Events</Link>
          </li>
          <li className="text-md font-bold-md">
            <Link to="/updates">Updates</Link>
          </li>
          <li className="text-md font-bold-md">
            <Link to="/about">About Us</Link>
          </li>
          <li className="text-md font-bold-md">
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
        <Link
          to="/members"
          className="btn btn-sm btn- text-white rounded-full text-md font-bold-md bg-[#ED8F1D]"
        >
          Become a Member
        </Link>
      </div>
    </div>
  )
}

export default Navbar
