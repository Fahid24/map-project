import React from "react"
// import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import logo from "../../static/logos/map-logo-removebg-preview 1.png"
import styled from "styled-components"

const Navbar = () => {
  return (
    <div className="navbar fixed shadow-xl lg:px-20 flex space-x-80 lg:justify-center top-0 z-10 bg-base-100">
      <Wrapper className="">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            tabIndex={0}
            className=" py-5 dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li className=" text-md pl-4 font-bold-md">
              <Link to="/">Home</Link>
            </li>
            <li className="text-md pl-4 font-bold-md">
              <Link to="/events">Events</Link>
            </li>
            <li className="text-md pl-4 font-bold-md">
              <Link to="/updates">Updates</Link>
            </li>
            <li className="text-md pl-4 font-bold-md">
              <Link to="/about">About Us</Link>
            </li>
            <li className="text-md pl-4 font-bold-md">
              <Link to="/contact">Contact Us </Link>
            </li>
          </ul>
        </div>
        <Link to="/" className="">
          <img className="w-20" src={logo} alt="" />
        </Link>
        <Button
          to="/members"
          className="btn ml-16 btn-sm btn- text-white rounded-full text-md font-bold-md bg-[#ED8F1D]"
        >
          Become a Member
        </Button>
      </Wrapper>

      <div className="navbar-center gap-10 hidden lg:flex">
        <Items className=" gap-6 menu-horizontal px-1">
          <Item className="text-md font-bold-md">
            <Link to="/">Home</Link>
          </Item>
          <Item className="text-md font-bold-md">
            <Link to="/events">Events</Link>
          </Item>
          <Item className="text-md font-bold-md">
            <Link to="/updates">Updates</Link>
          </Item>
          <Item className="text-md font-bold-md">
            <Link to="/about">About Us</Link>
          </Item>
          <Item className="text-md font-bold-md">
            <Link to="/contact">Contact Us</Link>
          </Item>
        </Items>
        <Link
          to="/members"
          className="btn btn-sm  text-white rounded-full text-md font-bold-md bg-[#ED8F1D]"
        >
          Become a Member
        </Link>
      </div>
    </div>
  )
}

const Wrapper = styled.div`
  /* flex justify-around items-center */
  display: flex;
  justify-content: space-around;
  align-items: center;
  div {
    ul {
      display: grid;
      gap: 20px;
    }
  }
`
const Items = styled.ul`
  display: flex;
`
const Item = styled.li`
  transition: background-color 1s ease !important;
  border-radius: 10px !important;
  padding: 10px 10px;

  &:active {
    color: white !important;
    background-color: #ed8f1d !important;
    border-radius: 10px !important;
    z-index: 99 !important;
    transition: background-color 0s !important;
  }
`
const Button = styled(Link)`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
  }
`

export default Navbar
