import { useState, useEffect } from "react";
import ReactGA from "react-ga4";
import Footer from "../Components/Footer";
import JoinMentra from "../Components/JoinMentra";
import "../Components/AboutComponents/about.css";
import OurStory from "../Components/AboutComponents/OurStory";
import Mission from "../Components/AboutComponents/Missions";
import Vission from "../Components/AboutComponents/Vision";
// import Team from "../Components/AboutComponents/Team";
import Team from "../Components/AboutComponents/Team";
import Career from "../Components/AboutComponents/Career";
import { AnimatePresence } from "framer-motion";
import Title from "../Components/Title";

const About = () => {
  const [activeLink, setActiveLink] = useState(0);

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);

  const handleLinkClick = (index) => {
    setActiveLink(index);
  };
  return (
    <div>
      <Title title={"About"} />
      <div className="flex flex-col items-center bg-[#FFFDF2] pb-0 tablet:pb-10 pt-[7rem] tablet:pt-[130px] laptop:pt-[6rem] w-full tablet:px-[5vw] laptop:px-[15%]">
        {/* <div className="text-center mt-10">
          <h1 className="philosopher text-[56px] font-bold max-[768px]:text-[34px] leading-[65px] max-[768px]:leading-[40px]">
            Unveiling the <br /> Heartbeat of Mentra
          </h1>
          <h1 className="text-[18px] mt-[3%] max-[768px]:text-[14px]">
            Journey with us as we share our story, mission, <br />
            and vision, revealing the essence that drives <br />
            Mentra to redefine the landscape of mental <br />
            well-being.
          </h1>
        </div> */}
        <div className="max-[768px]:w-[90%] tablet:w-full ">
          <div
            style={{
              transition: "background-color 0.3s ease-in-out", // Add transition for background color change
              ...(activeLink === 0
                ? { backgroundColor: "#C7D69F" }
                : activeLink === 1
                ? { backgroundColor: "#99BEB7" }
                : activeLink === 2
                ? { backgroundColor: "#FBEDB1" }
                : activeLink === 3
                ? { backgroundColor: "#FAE19D" }
                : activeLink === 4
                ? { backgroundColor: "#E5E5E7" }
                : { display: "none" }),
            }}
            className="w-full z-[-2]   px-2 max-w-[600px] mx-auto   h-[50px] tablet:h-[60px] rounded-[9999px]"
          >
            <div className="flex relative  items-center text-[12px] duo:text-[14px] tablet:text-[16px] bg-transparent h-full w-full font-semibold">
              <button
                onClick={() => handleLinkClick(0)}
                className="w-1/5 z-[2] text-center"
              >
                Our story
              </button>
              <button
                onClick={() => handleLinkClick(1)}
                className="w-1/5 z-[2] text-center"
              >
                Mission
              </button>
              <button
                onClick={() => handleLinkClick(2)}
                className="w-1/5 z-[2] text-center"
              >
                Vision
              </button>
              <button
                onClick={() => handleLinkClick(3)}
                className="w-1/5 z-[2] text-center"
              >
                Our team
              </button>
              <button
                onClick={() => handleLinkClick(4)}
                className="w-1/5 z-[2] text-center"
              >
                Careers
              </button>
              <div
                className={`bg-white transition-all duration-500 ease-in-out z-[1] top-1/2 transform -translate-y-1/2 absolute rounded-[2000px] `}
                style={{
                  width: "20%",
                  height: "calc(100% - 1rem)",
                  left: `calc(${activeLink * 20}%)`,
                }}
              ></div>
            </div>
          </div>
        </div>
        <div
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            transition: "background-color 0.3s ease-in-out", // Add transition for background color change
            ...(activeLink === 0
              ? { backgroundColor: "#C7D69F" }
              : activeLink === 1
              ? { backgroundColor: "#99BEB7" }
              : activeLink === 2
              ? { backgroundColor: "#FBEDB1" }
              : activeLink === 3
              ? { backgroundColor: "#FAE19D" }
              : activeLink === 4
              ? { backgroundColor: "#FFF" }
              : { display: "none" }),
          }}
          className=" overflow-y-scroll overscroll-none mt-[3%] w-full mx-[5vw] tablet:mx-0  laptop:mx-0 tablet:rounded-[40px] px-[5%] pt-5 pb-10 overflow-hidden  max-[768px]:pb-12"
        >
          <AnimatePresence mode="wait">
            {activeLink === 0 ? (
              <OurStory />
            ) : activeLink === 1 ? (
              <Mission />
            ) : activeLink === 2 ? (
              <Vission />
            ) : activeLink === 3 ? (
              <Team />
            ) : activeLink === 4 ? (
              <Career />
            ) : null}
          </AnimatePresence>
        </div>
      </div>
      <div className="">
        <JoinMentra />
        <Footer />
      </div>
    </div>
  );
};

export default About;
