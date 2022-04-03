import React from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimesCircle } from "react-icons/fa";
import { Fragment } from "react";

const Header = () => {
  const handleModal = (e) => {
    const menu = document.querySelector(".menu");

    // console.log(menu);
    // // const menuToggle = document.querySelector(".menu-toggle");
    menu.classList.toggle("md:block");
    menu.classList.toggle("md:hidden");

    // menu.addEventListener("click", function (e) {
    //   menu.classList.remove("md:block");
    // });
  };
  const handleClose = () => {
    const times = document.querySelector(".times");
    times.parentNode.parentNode.classList.add("md:hidden");
  };
  return (
    <Fragment>
      <div className="menu md:fixed md:inset-0 md:bg-[rgba(0,0,0,0.6)] z-10 md:hidden transition-transform">
        <div className="menu-toggle transition-all md:absolute md:top-0 md:bottom-0 md:left-0 md:bg-[#0B1E30] md:w-[160px] md:z-20 md:flex md:flex-col hidden">
          <button className="times">
            <FaTimesCircle
              className="md:absolute md:right-2 md:top-3 md:text-2xl md:mb-10"
              onClick={handleClose}
            />
          </button>

          <button className="md:bg-[#cf2122] md:ml-5 md:mr-5 md:mt-12 md:py-3 md:medium md:rounded-lg">
            Đăng nhập
          </button>
          <span className="md:mx-5 md:my-3 md:mt-5 md:font-semibold md:text-[1rem]">
            Đăng ký
          </span>
          <hr />
          <span className="md:mx-5 md:my-3 md:font-semibold md:text-[1rem]">
            Phim hot
          </span>
          <span className="md:mx-5 md:my-3 md:font-semibold md:text-[1rem]">
            Phim lẻ
          </span>
        </div>
      </div>
      <header className="flex items-center justify-start py-5 mb-2 px-5 header gap-x-5">
        <GiHamburgerMenu
          className="menu md:block md:text-2xl hidden"
          onClick={handleModal}
        />

        <img
          src="/images/logo-full.png"
          alt=""
          className="w-[112px] h-[28px] object-cover"
        />
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
