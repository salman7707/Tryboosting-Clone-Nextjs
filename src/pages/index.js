import React from "react";
import { IoMenu } from "react-icons/io5";
import { PiCaretUpBold, PiCaretDownBold } from "react-icons/pi";
import Trustbg from "../../public/images/trust.png";
import { IoClose } from "react-icons/io5";
import BG from "../../public/images/bg.jpg";
import { useEffect, useState, useRef } from "react";
import Servicesection from "../components/servicesection";
import Featured from "@/components/featured";
import Gamesection from "@/components/gamesection";
import Boostingmanual from "@/components/boostingmanual";
import Testimonial from "@/components/testimonial";
import Faqs from "@/components/faqs";
import Paymentmethod from "@/components/paymentmethod";
import Blogs from "@/components/blogs";
import Footer from "@/components/footer";
import { useRouter } from "next/navigation";
const Home = () => {
  const Router = useRouter();
  const [handleBtn, sethandleBtn] = useState(false);
  const [handleBg, sethandleBg] = useState("");
  const [menuselect, setMenuselect] = useState(false);
  const refer = useRef(null)
  const handleClickOutside = (e) => {
     if(refer.current && !refer.current.contains(e.target)){
       sethandleBtn(false)
     }
  }
  useEffect(() => {
    if (handleBtn) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleBtn]);

  useEffect(() => {
    const scrollhandle = () => {
      if (window.scrollY > 20) {
        sethandleBg("bg-black backdrop-blur fixed  ");
      } else {
        sethandleBg("transparent");
      }
    };
    window.addEventListener("scroll", scrollhandle);
    return () => window.removeEventListener("scroll", scrollhandle);
  });
  function menu() {
    setMenuselect(!menuselect);
  }
  return (
    <div className={`font-neusharp overflow-x-hidden relative`}>
      <section className="">
        <div
          className={` relative overflow-x-hidden flex md:w-screen xs:h-[400px] md:h-[450px] lg:w-screen bg-cover bg-center bg-no-repeat lg:h-[570px]`}
          style={{ backgroundImage: `url(${BG.src})` }}
        >
          <div className="container w-full m-0 p-0 mx-auto flex relative z-0">

            <div className=" md:w-[70%] lg:w-[40%] flex-col md:mt-12 lg:mt-28 pt-11 xs:pl-4 xs:pr-0 lg:pl-4 md:pl-8">
              <h1 className="md:text-[40px] xs:text-4xl lg:pt-0 xs:pt-14 lg:text-5xl leading-normal xs:leading-none font-my-custom font-bold">
                CHOOSE YOUR BATTLES WISELY
              </h1>
              <h2 className="md:text-[1.5rem] xs:text-lg xs:font-semibold xs:mt-4 lg:text- md:mt-5 lg:mt-6 font-my-custom2">
                MORE THAN JUST A BOOSTING SERVICE.
              </h2>
              <div>
                <div className="md:pl-9 md:text-2xl xs:pt-3 xs:pl-3 xs:text-base xs:mb-1 md:pt-4 lg:text-[15px] lg:pl-6 lg:pt-6">
                  <span>We're on</span>
                </div>
                <div className="flex items-center mt-[-12px] xs:ml-0 xs:mb-4">
                  <img
                    src={`${Trustbg.src}`}
                    className="md:w-7 md:ml-5 md:h-7 sm:w-4 xs:w-5 xs:h-auto sm:h-4 lg:ml-2 lg:w-[20px] lg:h-[20px]"
                  />
                  <span className="items-center lg:text-[15px] font-semibold pt-1 pl-1 md:text-lg">
                    Trustpilot
                  </span>
                </div>
                <div className="absolute top-[430px] left-10 z-40 py-3">
          <div
            ref={refer}
            onClick={() => sethandleBtn(!handleBtn)}
            className="flex relative left-0 flex-col py-2 cursor-pointer border-2 border-white rounded-lg justify-between font-semibold bg-[#0b0c10] w-[280px]"
          >
            <div className="flex justify-between px-6">
              <div className="">
                <p className=" ml-0">SELECT GAME</p>
              </div>
              <div className="">
                <PiCaretDownBold className="text-xl" />
              </div>
            </div>
            <div>
              {handleBtn && (
                <div className="">
                  <div className="border-t-2 w-[100%] mt-2"></div>
                  <div className="pl-[23px] items-center">
                    <button className=" border-b border-[#c9e8f7] w-[90%] text-start pb-3 mt-2 mb-1">
                      Black Desert Online
                    </button>
                  </div>
                  <div className="pl-[23px] items-center">
                    <button className=" border-b pb-3 w-[90%] border-[#c9e8f7] text-start mt-1 mb-1">
                      League Of Legends
                    </button>
                  </div>
                  <div className="pl-[23px] items-center">
                    <button className=" border-b pb-3 w-[90%] border-[#c9e8f7] text-start mt-1 mb-1">
                      Final Fantasy XIV
                    </button>
                  </div>
                  <div className="pl-[23px] items-center">
                    <button className=" border-b pb-3 relative w-[90%] border-[#c9e8f7] text-start mt-1 mb-2">
                      Valorant <span className="absolute left-16 top-0 text-xs text-[#66fcf1]">Coming Soon</span>
                    </button>
                  </div>
                  <div className="pl-[23px] items-center">
                    <button className=" border-b pb-3 relative w-[90%] border-[#c9e8f7] text-start mt-1 mb-2">
                      Dota 2 <span className="absolute left-[52px] top-0 text-xs text-[#66fcf1]">Coming Soon</span>
                    </button>
                  </div>
                  <div className="pl-[23px] items-center">
                    <button className=" border-b pb-3 relative w-[90%] border-[#c9e8f7] text-start mt-1 mb-2">
                      Apex Legends <span className="absolute left-[110px] top-0 text-xs text-[#66fcf1]">Coming Soon</span>
                    </button>
                  </div>
                  <div className="pl-[23px] items-center">
                    <button className=" border-b pb-3 relative w-[90%] border-[#c9e8f7] text-start mt-1 mb-2">
                      PUBG <span className="absolute left-11 top-0 text-xs text-[#66fcf1]">Coming Soon</span>
                    </button>
                  </div>
                  <div className="pl-[23px] items-center">
                    <button className=" border-b pb-3 relative w-[90%] border-[#c9e8f7] text-start mt-1 mb-2">
                      Call Of Duty <span className="absolute left-[88px] top-0 text-xs text-[#66fcf1]">Coming Soon</span>
                    </button>
                  </div>
                  <div className="pl-[23px] items-center">
                    <button className=" border-b pb-3 relative w-[90%] border-[#c9e8f7] text-start mt-1 mb-2">
                      Ranbow Six Siege <span className="absolute left-[133px] top-0 text-xs text-[#66fcf1]">Coming Soon</span>
                    </button>
                  </div>
                  <div className="pl-[23px] items-center">
                    <button className=" border-b pb-3 relative w-[90%] border-[#c9e8f7] text-start mt-1 mb-2">
                      Rocket League <span className="absolute left-28 top-0 text-xs text-[#66fcf1]">Coming Soon</span>
                    </button>
                  </div>
                  <div className="pl-[23px] items-center">
                    <button className=" border-b pb-3 relative w-[90%] border-[#c9e8f7] text-start mt-1 mb-2">
                      World Of Warcraft <span className="absolute left-36 top-0 text-xs text-[#66fcf1]">Coming Soon</span>
                    </button>
                  </div>
                  <div className="pl-[23px] items-center">
                    <button className=" border-b pb-3 relative w-[90%] border-[#c9e8f7] text-start mt-1 mb-2">
                      COD: Mobile <span className="absolute left-24 top-0 text-xs text-[#66fcf1]">Coming Soon</span>
                    </button>
                  </div>
                  <div className="pl-[23px] items-center">
                    <button className="  pb-3 relative w-[90%] text-start mt-1 mb-0">
                      TeamFight Tactics <span className="absolute left-32 top-0 text-xs text-[#66fcf1]">Coming Soon</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
              </div>
            </div>

            <div className="flex items-center md:block xs:hidden lg:w-[50%] md:w-[30%]">
              <div className="w-[355px] ">
                <img
                  src="https://tryboosting.com/assets/images/ezgif.com-gif-maker_1.gif"
                  className="md:w-[260px] lg:w-[350px] absolute md:right-32 md:top-28 lg:top-28 lg:right-40 xl:right-80 animate-moveup h-auto object-cover "
                  alt="animated-gif"
                />
                <img
                  src="https://tryboosting.com/assets/images/saf%20asdfg%20asdgf%20asdg.gif"
                  className="md:w-[380px] lg:w-[521px] h-auto absolute lg:right-36
                  md:right-12 md:top-[305px] lg:top-[375px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-[#0B0C10] z-0 relative ">
        <div className="container p-0 m-0 mx-auto max-w-screen-2xl ">
        <Servicesection />

        <Featured />

        <Gamesection />

        <Boostingmanual />

        <Testimonial />

        <Faqs />

        <Paymentmethod />

        <Blogs />

        <Footer />
        </div>
      </div>
    </div>
  );
};
export default Home;
