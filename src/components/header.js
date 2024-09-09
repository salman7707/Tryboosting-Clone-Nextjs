
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function header() {
  const Router = useRouter();
  const { pathname } = Router;
  const [handleBtn, sethandleBtn] = useState(false);
  const [handleBg, sethandleBg] = useState(false);
  const [menuselect, setMenuselect] = useState(false);
  useEffect(() => {
    const scrollhandle = () => {
      if (window.scrollY > 20) {
        sethandleBg(true);
      } else {
        sethandleBg(false);
      }
    }
    window.addEventListener('scroll', scrollhandle);
    return () => {
       window.removeEventListener('scroll', scrollhandle)
    }
  })
  function menu() {
    setMenuselect(!menuselect);
  }
  return (
    <div>
      <header
        className={`container  w-full max-w-screen-2xl
           mx-auto fixed top-0 bg-opacity-50 right-0 left-0 z-50 pt-[10px] lg:pb-2 md:pb-[60px] xs:pb-[45px] flex m-0 items-center justify-between ${handleBg && "backdrop-blur bg-black"} md:flex-col lg:flex-row`}
      >   
        <div className="md:pl-8 md:flex xs:flex md:justify-between md:items-center">
          <span className="cursor-pointer" onClick={()=>Router.push("/")}>
            <img
              src="https://tryboosting.com/assets/images/logo.webp"
              className="md:w-auto xs:absolute xs:w-48 xs:top-1 xs:left-[18px] md:absolute md:top-0 md:right-0 md:left-0 md:pl-6 md:pt-3 "
            />
          </span>
          <span
            onClick={menu}
            className={`cursor-pointer lg:relative xs:absolute xs:top-1 xs:right-0 md:absolute md:top-4 md:right-2 text-[40px] lg:hidden`}
          >
            {menuselect ? <IoClose /> : <IoMenu />}
          </span>
        </div>
        <nav>
          <ul
            className={`flex lg:flex-row lg:bg-transparent md:pb-20 lg:pb-2 lg:items-center lg:relative lg:top-0 lg:left-0 lg:right-0 md:absolute xs:absolute ${
              menuselect
                ? "md:top-0 xs:top-0 xs:w-[60%] md:w-[33%] xs:h-[500px] md:h-[500px] lg:h-auto lg:w-auto transition-all ease-in-out"
                : "md:top-[-400px] xs:top-[-400px]"
            } md:right-0 md:left-0 xs:right-0 xs:left-0 xs:bg-[#15161a] xs:flex-col md:bg-[#15161a] md:flex-col lg:my-0 pr-8`}
          >
            {menuselect ? (
              <li>
                <div>
                  <div className="ml-2 w-[180px]">
                    <img
                      src="https://tryboosting.com/assets/images/logo.webp"
                      className="lg:w-0 xs:pt-2 md:pl-6 md:pt-3 md:pb-6"
                    />
                  </div>
                  <span className="md:absolute xs:absolute lg:mt-0 lg:pt-0 xs:pl-48 xs:border-r xs:top-0 xs:h-[450px] lg:relative md:pl-[252px] lg:pl-0 md:top-0 md:border-r lg:border-[0px] lg:h-0 md:h-[500px]"></span>
                </div>
              </li>
            ) : (
              ""
            )}
            <li
              className={`text-lg md:pb-3 lg:pb-0 ${pathname == '/' ? "font-bold":""} lg:pt-0 xs:pt-5 hover:text-slate-300 ml-8`}
              onClick={()=>Router.push("/")}
            >
              HOME
              {menuselect ? (
                <div className="md:border-b md:pt-2 md:w-[252px] xs:pt-2 xs:border-b lg:w-[0px] lg:border-[0px] xs:relative xs:top-0 md:relative md:top-0 xs:-left-8 xs:w-[193px] md:-left-8"></div>
              ) : (
                ""
              )}{" "}
            </li>
            <li className="text-lg md:pb-3 lg:pb-0 lg:pt-0 xs:pt-5 active:font-bold hover:text-slate-300 ml-8">
              BOOSTERS
              {menuselect ? (
                <div className="md:border-b md:pt-2 md:w-[252px] xs:border-b xs:pt-2 lg:w-[0px] xs:relative lg:border-[0px] md:relative md:top-0 xs:-left-8 xs:w-[193px] md:-left-8"></div>
              ) : (
                ""
              )}
            </li>
            <li className="lg:text-lg xs:text-[16.4px] lg:pt-0 active:font-bold md:pb-3  xs:pt-5 lg:pb-0 hover:text-slate-300 ml-8">
              LOYALTY POINTS
              {menuselect ? (
                <div className="md:border-b md:pt-2 md:w-[252px] xs:border-b xs:pt-2 lg:w-[0px] xs:relative lg:border-[0px] md:relative md:top-0 xs:-left-8 xs:w-[193px] md:-left-8"></div>
              ) : (
                ""
              )}{" "}
            </li>
            <li className="text-lg active:font-bold md:pb-3 lg:pt-0 xs:pt-5 lg:pb-0 hover:text-slate-300 ml-8">
              SUPPORT
              {menuselect ? (
                <div className="md:border-b xs:pt-5 md:pt-2 md:w-[252px] lg:w-[0px] lg:border-[0px] md:relative md:top-0 md:-left-8"></div>
              ) : (
                ""
              )}{" "}
            </li>
            <button
              onClick={() => Router.push("/login")}
              className="md:text-lg xs:text-xs  hover:text-slate-300  ml-8 px-5 font-bold py-1 rounded-lg border-2 border-[#c9e8f7] bg-gray-950"
            >
              MEMBER AREA
            </button>
          </ul>
        </nav>
      </header>
    </div>
  );
}
