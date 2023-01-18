import React from "react"
// import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { Link } from "gatsby"
import logo from "../../static/logos/map-logo-removebg-preview 1.png"

const Navbar = () => {
  return (
    // <MainWrapper>
    //   <StaticImage
    //     src="../images/MMBA_Banner_2018.jpeg"
    //     loading="eager"
    //     quality={95}
    //     width={850}
    //     formats={["auto", "webp", "avif"]}
    //     alt=""
    //     style={{ marginBottom: `var(--space-3)` }}
    //   />
    //   <SocialWrapper>
    //     <StaticImage
    //       src="../images/default_facebook.png"
    //       loading="eager"
    //       quality={95}
    //       width={50}
    //       formats={["auto", "webp", "avif"]}
    //       alt=""
    //       style={{ marginBottom: `var(--space-3)` }}
    //     />
    //     <StaticImage
    //       src="../images/default_youtube.png"
    //       loading="eager"
    //       quality={95}
    //       width={50}
    //       formats={["auto", "webp", "avif"]}
    //       alt=""
    //       style={{ marginBottom: `var(--space-3)` }}
    //     />
    //     <StaticImage
    //       src="../images/default_instagram (1).png"
    //       loading="eager"
    //       quality={95}
    //       width={50}
    //       formats={["auto", "webp", "avif"]}
    //       alt=""
    //       style={{ marginBottom: `var(--space-3)` }}
    //     />
    //   </SocialWrapper>
    //   <NavItems>
    //     <Link to="/">
    //       <ItemLink to="/">Home</ItemLink>
    //     </Link>

    //     <Link to="/">
    //       <ItemLink to="events">Events</ItemLink>
    //     </Link>

    //     <Link to="/">
    //       <Items>मराठी शाळा (Shala)</Items>
    //     </Link>

    //     <Link to="/">
    //       <Items>Membership</Items>
    //     </Link>

    //     <Link to="/">
    //       <Items>जेष्ठ (Seniors)</Items>
    //     </Link>

    //     <Link to="/">
    //       <Items>Spartan Pathak</Items>
    //     </Link>

    //     <Link to="/">
    //       <Items>ग्रंथालय</Items>
    //     </Link>

    //     <Items style={{ cursor: "pointer", border: "none" }}>
    //       <BsSearch size={20} />
    //     </Items>
    //   </NavItems>
    //   <StaticImage
    //     src="../images/Maharashtrafloat.png"
    //     loading="eager"
    //     quality={95}
    //     width={1100}
    //     formats={["auto", "webp", "avif"]}
    //     alt=""
    //     style={{ marginBottom: `var(--space-3)` }}
    //   />
    // </MainWrapper>

    <div className="navbar fixed shadow-xl px-20 flex justify-center top-0 z-10 bg-base-100">
      <div className="navbar-start">
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
              <Link>Contact Us</Link>
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
        <a className="">
          <img className="w-20" src={logo} alt="" />
        </a>
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
            <Link>Contact Us</Link>
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

const NavItems = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0px;
`
const MainWrapper = styled.nav`
  display: grid;
  justify-items: center;
  gap: 20px;
`
const SocialWrapper = styled.div`
  cursor: pointer;
  display: flex;
  gap: 20px;
  position: fixed;
  z-index: 1;
  right: 30px;
  top: 35px;
`

const Items = styled.li`
  color: black;
  padding: 10px 30px;
  border-right: 1px solid lightgray;
  justify-self: center;
  text-align: center;
  &:hover {
    color: #2991d6;
    border-bottom: 2px solid #2991d6;
  }
`

export default Navbar
