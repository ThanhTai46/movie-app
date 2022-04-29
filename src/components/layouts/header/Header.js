import { Link, NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimesCircle } from "react-icons/fa";
import { Fragment } from "react";
import Intro from "../../introVideo/Intro";
import { useScrollY } from "../../../hooks/useScrollY";

const Header = () => {
  const [scrollY] = useScrollY();
  const handleModal = (e) => {
    const menu = document.querySelector(".menu");

    menu.classList.toggle("md:block");
    menu.classList.toggle("md:hidden");
  };
  const handleClose = () => {
    const times = document.querySelector(".times");
    times.parentNode.parentNode.classList.add("md:hidden");
  };
  return (
    <Fragment>
      {/* Menu navbar for mobile */}
      <div className="z-50 menu md:fixed md:inset-0 md:bg-[rgba(0,0,0,0.6)] md:hidden transition-all">
        <div className=" menu-toggle transition-all md:absolute md:top-0 md:bottom-0 md:left-0 md:bg-[#0B1E30] md:w-[160px] md:z-20 md:flex md:flex-col hidden">
          <button className="times">
            <FaTimesCircle
              className="md:absolute md:right-2 md:top-3 md:text-2xl md:mb-10"
              onClick={handleClose}
            />
          </button>

          <button className="md:bg-[#cf2122] md:ml-5 md:mr-5 md:mt-12 md:py-3 md:medium md:rounded-lg">
            Sign in
          </button>
          <span className="md:mx-5 md:my-3 md:mt-5 md:font-semibold md:text-[1rem]">
            <NavLink to="/movies">Movies</NavLink>
          </span>
          <hr />
          <span className="md:mx-5 md:my-3 md:font-semibold md:text-[1rem]">
            <NavLink to="/faq">FAQ</NavLink>
          </span>
        </div>
      </div>
      <header
        style={
          scrollY < 50
            ? { backgroundColor: "transparent" }
            : { backgroundColor: "rgb(17, 17, 17)" }
        }
        className="fixed top-0 z-20 flex items-center justify-start w-full px-5 py-5 mb-2 transition-all bg-transparent header gap-x-5"
      >
        <GiHamburgerMenu
          className="hidden menu md:block md:text-2xl"
          onClick={handleModal}
        />

        <Link to="/">
          <img
            src="/images/logo-full.png"
            alt=""
            className="w-[112px] h-[28px] object-cover cursor-pointer"
          />
        </Link>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-lg text-primary md:hidden" : "md:hidden"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/movies"
          className={({ isActive }) =>
            isActive ? "text-lg text-primary md:hidden" : "md:hidden"
          }
        >
          Movies
        </NavLink>
        <NavLink
          to="/faq"
          className={({ isActive }) =>
            isActive ? "text-lg text-primary md:hidden" : "md:hidden"
          }
        >
          FAQ
        </NavLink>
      </header>
    </Fragment>
  );
};

export default Header;
