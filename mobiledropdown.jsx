import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/Images/logo.png";
import menuIcon from "../../assets/Images/menu.png";
import facebook from "../../assets/Images/facebook.png";
import instagram from "../../assets/Images/instagram.png";
import x from "../../assets/Images/x.png";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  menuOpen
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "");

  function handleMenu() {
    setMenuOpen(!menuOpen);
  }

  function handleMenuClose() {
    setMenuOpen(false);
  }

  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",

        staggerChildren: 0.15,
        delayChildren: 0.25,
        staggerDirection: 1,
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        when: "afterChildren",
        staggerChildren: 0.05,
        delayChildren: 0.01,
        staggerDirection: 1,
      },
    },
  };

  const linkVars = {
    initial: {
      x: "10vw",
      y: 0,
      opacity: 0,
    },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
      },
    },
    exit: {
      y: "2vh",
      opacity: 0,
    },
  };

  const bgVars = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 0.85,
      transition: {
        ease: "easeInOut",
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        ease: "easeInOut",
        delay: 0.4,
        duration: 0.5,
      },
    },
  };

  return (
    <div className="z-50 sticky top-0">
      <div className="w-full   bg-white flex justify-between items-center px-[5vw] laptop:px-[8vw] py-4 shadow-navbar">
        <div className="flex  justify-start tablet:justify-between laptop:justify-start items-center gap-[100px] tablet:w-full laptop:w-fit">
          <Link to="/">
            <img
              onClick={handleMenuClose}
              src={logo}
              className="w-4 tablet:w-6"
              alt="brand guide logo"
            />
          </Link>
          <div className="  hidden tablet:flex justify-center items-center gap-10 *:font-medium *:text-[0.9rem] *:leading-[18.2px] *:transition-all *:ease-linear *:duration-200 *:transform  *:capitalize">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${
                  isActive
                    ? " text-primary-main scale-110"
                    : " text-secondary-second"
                } hover:scale-110`
              }
            >
              About us
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `${
                  isActive
                    ? " text-primary-main scale-110"
                    : " text-secondary-second"
                } hover:scale-110`
              }
            >
              our services
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `${
                  isActive
                    ? " text-primary-main scale-110"
                    : " text-secondary-second"
                } hover:scale-110`
              }
            >
              our projects
            </NavLink>
            <NavLink
              to="/blogs"
              className={({ isActive }) =>
                `${
                  isActive
                    ? " text-primary-main scale-110"
                    : " text-secondary-second"
                } hover:scale-110`
              }
            >
              Blogs
            </NavLink>
          </div>
        </div>
        <button onClick={handleMenu} className="block tablet:hidden">
          <img src={menuIcon} className="w-6" alt="open navigation menu" />
        </button>
        <div className="hidden laptop:flex justify-center items-center gap-6 *:w-[30px] *:transition-all *:ease-linear *:duration-200 *:transform">
          <a
            className="hover:scale-110"
            href="http://"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="w-full" src={facebook} alt="facebook link" />
          </a>
          <a
            className="hover:scale-110"
            href="http://"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="w-full" src={x} alt="facebook link" />
          </a>
          <a
            className="hover:scale-110"
            href="http://"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="w-full" src={instagram} alt="facebook link" />
          </a>
        </div>

        {/* mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              variants={menuVars}
              key="menu"
              initial="initial"
              animate="animate"
              exit="exit"
              className="absolute flex tablet:hidden top-[98%] z-50  py-4 right-0 h-fit origin-top w-full bg-white  *:px-[5vw]  justify-start flex-col items-start gap-4 *:font-medium *:text-[0.938rem] *:leading-[18.2px] *:transition-all *:ease-linear *:duration-200 *:transform  *:capitalize"
            >
              <motion.div variants={linkVars}>
                <NavLink
                  onClick={handleMenuClose}
                  to="/about"
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? " text-primary-main "
                        : " text-secondary-second"
                    } `
                  }
                >
                  About us
                </NavLink>
              </motion.div>
              <motion.div variants={linkVars}>
                <NavLink
                  onClick={handleMenuClose}
                  to="/services"
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? " text-primary-main "
                        : " text-secondary-second"
                    } `
                  }
                >
                  our services
                </NavLink>
              </motion.div>
              <motion.div variants={linkVars}>
                <NavLink
                  onClick={handleMenuClose}
                  to="/projects"
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? " text-primary-main "
                        : " text-secondary-second"
                    } `
                  }
                >
                  our projects
                </NavLink>
              </motion.div>
              <motion.div variants={linkVars}>
                <NavLink
                  onClick={handleMenuClose}
                  to="/blogs"
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? " text-primary-main "
                        : " text-secondary-second"
                    } `
                  }
                >
                  Blogs
                </NavLink>
              </motion.div>

              <hr
                // variants={hrVars}
                className="h-[1px] w-full border-none bg-secondary-main"
              />
              <motion.div
                variants={linkVars}
                className="flex px-[5vw] justify-start items-center gap-6 *:w-[30px] *:transition-all *:ease-linear *:duration-200 *:transform"
              >
                <a
                  className="hover:scale-110"
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="w-full" src={facebook} alt="facebook link" />
                </a>
                <a
                  className="hover:scale-110"
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="w-full" src={x} alt="facebook link" />
                </a>
                <a
                  className="hover:scale-110"
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="w-full" src={instagram} alt="facebook link" />
                </a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            onClick={handleMenuClose}
            variants={bgVars}
            initial="initial"
            animate="animate"
            exit="exit"
            key="bg"
            className="absolute block tablet:hidden  top-0  h-[150vh] w-full right-0 opacity-80 z-[-1] bg-[#161616]"
          ></motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Header;
