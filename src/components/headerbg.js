import React from "react";
import { IoMenu } from "react-icons/io5";
import { PiCaretUpBold, PiCaretDownBold } from "react-icons/pi";
import Trustbg from "../../public/images/trust.png";
import { IoClose } from "react-icons/io5";
import BG from "../../public/images/bg.jpg";
import { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Servicesection  from "../components/servicesection"
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
const Home = () => {
  const [handleBtn, sethandleBtn] = useState(false);
  const [dropbtn, setDropbtn] = useState(false);
  const [dropbtn2, setDropbtn2] = useState(false);
  const [dropbtn3, setDropbtn3] = useState(false);
  const [dropbtn4, setDropbtn4] = useState(false);
  const [dropbtn5, setDropbtn5] = useState(false);
  const [dropbtn6, setDropbtn6] = useState(false);
  const [handleBg, sethandleBg] = useState("");
  const [menuselect, setMenuselect] = useState(false);
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
    <div className="overflow-x-hidden">
      <div>
        <div
          className="relative overflow-x-hidden flex md:w-[1175px] md:h-[450px] lg:w-screen bg-cover bg-center bg-no-repeat lg:h-[570px]"
          style={{ backgroundImage: `url(${BG.src})` }}
        >
          <div className="bg-black flex w-[100%] z-0 relative bg-opacity-65">
            <div className=" md:w-[70%] lg:w-[50%] flex-col md:mt-20 lg:mt-24 pt-11 pl-8">
              <h1 className="md:text-[40px] lg:text-[58px] font-sans leading-none font-bold">
                CHOOSE YOUR BATTLES WISELY
              </h1>
              <h2 className="md:text-[1.7rem] lg:text-[25px] md:mt-3 lg:mt-6">
                MORE THAN JUST A BOOSTING SERVICE.
              </h2>
              <div>
                <div className="md:pl-9 md:text-2xl md:pt-4 lg:text-[15px] lg:pl-6 lg:pt-6">
                  <span>We're on</span>
                </div>
                <div className="flex items-center mt-[-12px]">
                  <img
                    src={`${Trustbg.src}`}
                    className="md:w-7 md:ml-5 md:h-7 lg:ml-2 lg:w-[20px] lg:h-[20px]"
                  />
                  <span className="items-center lg:text-[15px] font-semibold pt-1 pl-1 md:text-lg">
                    Trustpilot
                  </span>
                </div>
              </div>
              <div className="md:pt-5 lg:pt-10">
                <div
                  onClick={() => sethandleBtn(!handleBtn)}
                  className="flex cursor-pointer justify-between py-2 pl-4 w-3 pr-52 border-[2px] rounded-lg border-white text-center font-semibold items-center bg-[#0b0c10]"
                >
                  <button className="">
                    SELECT<span className="pl-1 text-center">GAME</span>
                  </button>
                  <div className="pl-[70px]">
                    {handleBtn === true ? (
                      <PiCaretUpBold className="text-xl" />
                    ) : (
                      <PiCaretDownBold className="text-xl" />
                    )}
                  </div>
                </div>
                {handleBtn && (
                  <div className="absolute cursor-pointer justify-between items-center pr-[45px] border-[2px] rounded-b-lg text-center font-semibold bg-[#0b0c10]">
                    <div className="pl-[37px] items-center">
                      <button className=" border-b-2 pb-3 mt-2 mb-2">
                        Black Desert Online
                      </button>
                    </div>
                    <div className="pl-[37px] items-center">
                      <button className=" border-b-2 pb-3 mt-2 mb-2">
                        League Of Legends
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="flex items-center lg:w-[50%] md:w-[30%]">
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

        <header
          className={`fixed top-0 bg-opacity-50 right-0 left-0 z-50 pt-[10px] lg:pb-2 md:pb-[60px] flex w-auto m-0 items-center justify-between ${handleBg} md:flex-col lg:flex-row`}
        >
          <div className="md:pl-8 md:flex md:justify-between md:items-center">
            <span className="cursor-pointer">
              <img
                src="https://tryboosting.com/assets/images/logo.webp"
                className="md:w-auto md:absolute md:top-0 md:right-0 md:left-0 md:pl-6 md:pt-3 "
              />
            </span>
            <span
              onClick={menu}
              className={`cursor-pointer lg:relative md:absolute md:top-4 md:right-2 text-[40px] lg:hidden`}
            >
              {menuselect ? <IoMenu /> : <IoClose />}
            </span>
          </div>
          <nav>
            <ul
              className={`flex lg:flex-row  lg:bg-transparent md:pb-20 lg:pb-2 lg:items-center lg:relative lg:top-0 lg:left-0 lg:right-0 md:absolute ${
                menuselect
                  ? "md:top-[-400px]"
                  : "md:top-0 md:w-[33%] md:h-[500px] lg:h-auto lg:w-auto transition-all ease-in-out"
              } md:right-0 md:left-0  md:bg-[#15161a] md:flex-col lg:my-0 pr-8`}
            >
              {!menuselect ? (
                <li>
                  <div>
                    <img
                      src="https://tryboosting.com/assets/images/logo.webp"
                      className="lg:w-0 md:pl-6 md:pt-3  md:pb-6"
                    />
                    <span className="md:absolute lg:relative md:pl-[252px] lg:pl-0 md:top-0 md:border-r lg:border-[0px] lg:h-0 md:h-[500px]"></span>
                  </div>
                </li>
              ) : (
                ""
              )}
              <li
                className={`md:pb-3 lg:pb-0 md:text-lg active:font-bold font-bold hover:text-slate-300 ml-8`}
              >
                HOME
                {!menuselect ? (
                  <div className="md:border-b md:pt-2  md:w-[252px] lg:w-[0px] lg:border-[0px] md:relative md:top-0 md:-left-8"></div>
                ) : (
                  ""
                )}{" "}
              </li>
              <li className="text-lg md:pb-3 lg:pb-0 active:font-bold hover:text-slate-300 ml-8">
                BOOSTERS
                {!menuselect ? (
                  <div className="md:border-b md:pt-2  md:w-[252px] lg:w-[0px] lg:border-[0px] md:relative md:top-0 md:-left-8"></div>
                ) : (
                  ""
                )}
              </li>
              <li className="text-lg active:font-bold md:pb-3 lg:pb-0 hover:text-slate-300 ml-8">
                LOYALTY POINTS
                {!menuselect ? (
                  <div className="md:border-b md:pt-2  md:w-[252px] lg:w-[0px] lg:border-[0px] md:relative md:top-0 md:-left-8"></div>
                ) : (
                  ""
                )}{" "}
              </li>
              <li className="text-lg active:font-bold md:pb-3 lg:pb-0 hover:text-slate-300 ml-8">
                SUPPORT
                {!menuselect ? (
                  <div className="md:border-b md:pt-2  md:w-[252px] lg:w-[0px] lg:border-[0px] md:relative md:top-0 md:-left-8"></div>
                ) : (
                  ""
                )}{" "}
              </li>
              <button className="text-lg hover:text-slate-300  ml-8 px-5 font-bold py-1 rounded-lg border-2 border-[#c9e8f7] bg-gray-950">
                MEMBER AREA
              </button>
            </ul>
          </nav>
        </header>
      </div>

      <div className="bg-[#0B0C10] pb-60 z-0 relative ">
        {/* <section>
          <div className="flex justify-center items-center pt-10 pb-2 ">
            <img
              src="https://tryboosting.com/assets/images/In-Game%20Services-01.png"
              className="h-[67px] w-[52px] mr-3"
            />
            <div className="flex flex-col">
              <p className="text-[24px] font-sans mt-0 font-medium ">
                IN-GAME SERVICES
              </p>
              <p className="text-[34px] font-bold mt-[-10px]">GOT SIMPLER</p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className=" border-b-2 w-[3%] mr-2"></div>
            <div className=" border-b-2 w-[14%]"></div>
            <div className=" border-b-2 w-[3%] ml-2"></div>
          </div>
        </section>

        <section>
          <Swiper
            spaceBetween={1}
            slidesPerView={4}
            loop={true}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1366: {
                slidesPerView: 4,
              },
              1440: {
                slidesPerView: 4,
              },
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={false}
            modules={[Autoplay, Navigation]}
            className="mySwiper flex items-center mt-10 w-[83%] mx-auto justify-center"
          >
            <SwiperSlide>
              <div className=" flex flex-col ml-8 pl-9 pr-9 pb-3 pt-3 items-center justify-center rounded-xl bg-[#15161a] w-[247px] h-[340px]">
                <img
                  src="https://tryboosting.com/assets/images/New%201-05.svg"
                  className=" w-36 h-36"
                />
                <h2 className="text-2xl font-bold">VPN</h2>
                <p className="leading-tight pt-3 text-sm text-center">
                  Our platform recognizes the buyer's country, and the booster
                  uses this information to set up their VPNs to the same
                  location before accessing the client's account.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" flex flex-col ml-8 pl-9 pr-9 pb-6 pt-6 items-center justify-center rounded-xl bg-[#15161a] w-[247px] h-[340px]">
                <img
                  src="https://tryboosting.com/assets/images/New%201-06.svg"
                  className=" w-36 h-36"
                />
                <h2 className="text-2xl font-bold">FAIR PRICE</h2>
                <p className="leading-tight pt-1 text-sm text-center">
                  Try Boosting aims to provide the lowest possible costs to its
                  clients. No matter what game you choose, we offer
                  cost-effective boosting services for all the popular games.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" flex flex-col ml-8 pl-9 pr-9 pb-6 pt-6 items-center justify-center rounded-xl bg-[#15161a] w-[247px] h-[340px]">
                <img
                  src="https://tryboosting.com/assets/images/New%201-03.svg"
                  className=" w-36 h-36"
                />
                <h2 className="text-2xl font-bold">SUPPORT</h2>
                <p className="leading-tight text-sm pt-2 text-center">
                  Our online support team is always ready to answer your queries
                  regarding your order or anything else. Don’t hesitate to
                  contact us via live chats, email, and social media.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" flex flex-col ml-8 pl-6 pr-6 pb-6 pt-6 items-center justify-center rounded-xl bg-[#15161a] w-[247px] h-[340px]">
                <img
                  src="https://tryboosting.com/assets/images/New%201-04.svg"
                  className=" w-36 h-36"
                />
                <h2 className="text-2xl pt-3 font-bold">ACCOUNT</h2>
                <p className="leading-tight text-sm pt-1 text-center">
                  Other than using VPN, we further ensure the security of your
                  account. We only work with the highest-rated and most credible
                  boosters to ensure that we don’t compromise your account’s
                  security.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" flex flex-col ml-8 pl-6 pr-6 pb-6 pt-6 items-center justify-center rounded-xl bg-[#15161a] w-[247px] h-[340px]">
                <img
                  src="https://tryboosting.com/assets/images/New%201-02.svg"
                  className=" w-36 h-36"
                />
                <h2 className="text-2xl pt-3 font-bold">EXPERIENCE</h2>
                <p className="leading-tight text-sm pt-1 text-center">
                  All of our boosting services benefit from our highly
                  experienced team. We have the best players in all the games.
                  We screen our professionals to ensure quality performance and
                  professional attitude.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" flex flex-col ml-8 pl-6 pr-6 pb-6 pt-6 items-center justify-center rounded-xl bg-[#15161a] w-[247px] h-[340px]">
                <img
                  src="https://tryboosting.com/assets/images/New%201-01.svg"
                  className=" w-36 h-36"
                />
                <h2 className="text-2xl pt-3 font-bold">NO BOTTING</h2>
                <p className="leading-tight text-sm pt-1 text-center">
                  We don’t use bots for any of our services because we know how
                  it can compromise the quality of the output. Delivering
                  quality work is our only aim, and we would never compromise on
                  that.
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </section>

        <section>
          <div className="flex items-center mt-16 justify-center">
            <div className="border-b-2 w-[2%] mr-3"></div>
            <div className="border-b-2 w-[17%]"></div>
            <div className="border-b-2 w-[2%] ml-3"></div>
          </div>
        </section> */}
        <Servicesection/>
        <section>
          <div className="flex items-center mt-14 justify-center">
            <div className="flex flex-col items-center w-[83%] mx-auto lg:h-[800px] md:h-auto  bg-[#15161a] rounded-2xl">
              <h2 className="text-4xl font-bold text-center m-5">
                Any special needs? We are here to meet them.
              </h2>
              <p className="w-[60%] text-center text-lg leading-tight">
                We understand the variety of preferences that each gamer has and
                elo-boost.net is already prepared to face up to any of them. To
                guarantee perfectly suited settings for your gaming habits is
                one of our priorities. In order to do so we offer a variety of
                features, some of which can be seen below.
              </p>
              <div className="mt-12 border-b w-[95%] border-white"></div>

              <div className="flex lg:flex-row md:flex-col  justify-between mt-10 w-auto">
                <div className="flex-col ml-10 lg:w-[30%] md:w-auto">
                  <div className="flex flex-wrap flex-col">
                    <h2 className="text-[#5d5d5d] text-2xl font-medium">
                      Step 1
                    </h2>
                    <p className="text-[#5d5d5d] pt-10 pb-10 pl-7 pr-10 font-medium leading-tight">
                      This section allows you to keep track of every match
                      played during the boosting process. Stay up to date with
                      your order!
                    </p>
                    <div className="border-b border-white pt-8 w-[90%]"></div>
                  </div>
                  <div className="flex flex-wrap mt-4 flex-col">
                    <h2 className="text-[#5d5d5d] text-2xl font-medium">
                      Step 2
                    </h2>
                    <p className="text-[#5d5d5d] pt-10 pb-10 pl-7 pr-10 font-medium leading-tight">
                      This section allows you to keep track of every match
                      played during the boosting process. Stay up to date with
                      your order!
                    </p>
                  </div>
                </div>

                <Swiper
                  direction={"vertical"}
                  slidesPerView={3}
                  loop={true}
                  pagination={{
                    clickable: true,
                  }}
                  autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                  }}
                  navigation={false}
                  modules={[Autoplay, Navigation]}
                  className="flex flex-col md:m-5 h-[490px] lg:mr-4 overflow-hidden justify-center lg:w-[60%] md:w-auto rounded-2xl z-50"
                >
                  {/* first */}
                  <SwiperSlide>
                    <div className="flex w-auto bg-[#1e363a] py-5 mt-[2px] pr-0 pl-2">
                      <div className="flex flex-col">
                        <img
                          src="https://tryboosting.com/storage/2023/Apr/Lux_166.png"
                          className=" w-20 h-auto rounded-md"
                        />
                        <p className="text-[10px] pt-1">
                          186 CS - 45% Kills P.
                        </p>
                      </div>
                      <div className="flex flex-col">
                        <img
                          src="https://tryboosting.com/assets/images/lol-icons/spell-icons/Barrier.webp"
                          className="w-[38px] h-auto rounded-md"
                        />
                        <img
                          src="https://tryboosting.com/assets/images/lol-icons/spell-icons/Flash.webp"
                          className="w-[38px] h-auto rounded-md mt-1 "
                        />
                      </div>
                      <div className="flex">
                        <div className=" ml-4">
                          <p className="w-14 py-1 text-center bg-[#222327] text-[#00bba3] text-sm font-semibold rounded">
                            Victory
                          </p>
                          <p className="text-sm mt-[2px]">
                            <span className="font-semibold">K/D/A: </span>7 / 1
                            / 15
                          </p>
                          <p className="text-sm mt-[2px]">
                            <span className="font-semibold">Duration: </span>
                            31min 41s
                          </p>
                          <p className="text-sm mt-[2px]">
                            <span className="font-semibold">Mode: </span>Normal
                            (DP)
                          </p>
                          <p className="text-sm mt-[2px]">2 days ago</p>
                        </div>
                      </div>
                      <div className="flex flex-col w-auto">
                        <div className="flex">
                          <img
                            src="https://tryboosting.com/storage/2023/May/thumb19201155007_127.png"
                            className="w-12 p-[2px] h-12 mr-1 rounded-lg"
                          />
                          <img
                            src="https://tryboosting.com/storage/2023/Apr/SpectresCowl_576.webp"
                            className="w-12 p-[2px] h-12 mr-1 rounded-lg"
                          />
                          <img
                            src="https://tryboosting.com/storage/2023/Apr/Kindlegemitem_255.png"
                            className="w-12 p-[2px] h-12 mr-1 rounded-lg"
                          />
                        </div>
                        <div className="flex mt-2">
                          <img
                            src="https://tryboosting.com/storage/2023/Apr/SunfireAegisitem_564.png"
                            className=" w-12 p-[2px] mr-1 h-12 rounded-lg"
                          />
                          <img
                            src="https://tryboosting.com/storage/2023/Apr/RadiantVirtueitem_670.png"
                            className=" w-12 p-[2px] h-12 mr-1 rounded-lg"
                          />
                          <img
                            src="https://tryboosting.com/storage/2023/May/MercenaryUpgrades_573.webp"
                            className=" w-12 p-[2px] h-12 mr-1 rounded-lg"
                          />
                        </div>
                      </div>
                      <div className="mt-6">
                        <img
                          src="https://tryboosting.com/storage/2023/Apr/OracleLensitem_188.png"
                          className=" w-12 p-[2px] h-12 rounded-lg ml-1"
                        />
                      </div>

                      <div className="flex flex-col w-[8%] ml-3">
                        <div className="flex items-center">
                          <p className="text-[10px] mb-2 mr-2">Kyri...</p>
                          <img
                            src="https://tryboosting.com/storage/2023/Apr/Garen_369.png"
                            className="w-4  h-4 ml-[4px]"
                          />
                        </div>
                        <div className="flex items-center">
                          <p className="text-[10px] mb-2 text-ellipsis mr-1">
                            Semi...
                          </p>
                          <img
                            src="https://tryboosting.com/storage/2023/Apr/Rumble_272.png"
                            className="w-4 h-4 ml-[3px]"
                          />
                        </div>
                        <div className="flex items-center">
                          <p className="text-[10px] mb-2 text-ellipsis mr-1">
                            Péss...
                          </p>
                          <img
                            src="https://tryboosting.com/storage/2023/Apr/Zed_348.png"
                            className="w-4 h-4 ml-1"
                          />
                        </div>
                        <div className="flex items-center">
                          <p className="text-[10px] mb-2 text-ellipsis mr-1">
                            Toxy...
                          </p>
                          <img
                            src="https://tryboosting.com/storage/2023/Apr/Jinx_759.png"
                            className="w-4 h-4 ml-1"
                          />
                        </div>
                        <div className="flex items-center">
                          <p className="text-[10px] mb-2 text-ellipsis mr-1">
                            Coff...
                          </p>
                          <img
                            src="https://tryboosting.com/storage/2023/Apr/Braum_159.png"
                            className="w-4 h-4 ml-[5px]"
                          />
                        </div>
                      </div>

                      <div className="overflow-hidden flex flex-col w-[8%] ml-2">
                        <div className="flex items-center">
                          <img
                            src="https://tryboosting.com/storage/2023/Apr/Gragas_305.png"
                            className="w-4  h-4 ml-1"
                          />
                          <p className="text-[10px] mb-2 ml-2">dja...</p>
                        </div>
                        <div className="flex items-center">
                          <img
                            src="https://tryboosting.com/storage/2023/Apr/Volibear_94.png"
                            className="w-4 h-4 ml-1"
                          />
                          <p className="text-[10px] mb-2 text-ellipsis ml-1">
                            DRG...
                          </p>
                        </div>
                        <div className="flex items-center">
                          <img
                            src="https://tryboosting.com/storage/2023/Apr/Vladimir_619.png"
                            className="w-4 h-4 ml-1"
                          />
                          <p className="text-[10px] mb-2 text-ellipsis ml-1">
                            Vuln...
                          </p>
                        </div>
                        <div className="flex items-center">
                          <img
                            src="https://tryboosting.com/storage/2023/Apr/Xayah_869.png"
                            className="w-4 h-4 ml-1"
                          />
                          <p className="text-[10px] mb-2 text-ellipsis ml-1">
                            Gabi...
                          </p>
                        </div>
                        <div className="flex items-center">
                          <img
                            src="https://tryboosting.com/storage/2023/Apr/Karma_694.png"
                            className="w-4 h-4 ml-1"
                          />
                          <p className="text-[10px] mb-2 text-ellipsis ml-1">
                            Demi...
                          </p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  {/* second */}
                  <SwiperSlide>
                    <div className="flex w-auto  bg-[#1e363a] py-5 -mt-1 pr-0 pl-2">
                      <div className="flex flex-col">
                        <img
                          src="https://tryboosting.com/storage/2023/Apr/Zac_553.png"
                          className=" w-20 h-auto rounded-md"
                        />
                        <p className="text-[10px] pt-1">
                          186 CS - 45% Kills P.
                        </p>
                      </div>
                      <div className="flex flex-col">
                        <img
                          src="https://tryboosting.com/assets/images/lol-icons/spell-icons/Smite.webp"
                          className="w-[38px] h-auto rounded-md"
                        />
                        <img
                          src="https://tryboosting.com/assets/images/lol-icons/spell-icons/Flash.webp"
                          className="w-[38px] h-auto rounded-md mt-1 "
                        />
                      </div>
                      <div className="flex">
                        <div className=" ml-4">
                          <p className="w-14 py-1 text-center bg-[#222327] text-[#00bba3] text-sm font-semibold rounded">
                            Victory
                          </p>
                          <p className="text-sm mt-[2px]">
                            <span className="font-semibold">K/D/A: </span>13 / 5
                            / 12
                          </p>
                          <p className="text-sm mt-[2px]">
                            <span className="font-semibold">Duration: </span>
                            33min 22s
                          </p>
                          <p className="text-sm mt-[2px]">
                            <span className="font-semibold">Mode: </span>
                            Soloqueue
                          </p>
                          <p className="text-sm mt-[2px]">7 hours ago</p>
                        </div>
                      </div>
                      <div className="flex flex-col w-auto">
                        <div className="flex">
                          <img
                            src="https://tryboosting.com/storage/2023/Apr/RabadonsDeathcap_855.webp"
                            className="w-12 p-[2px] h-12 mr-1 rounded-lg"
                          />
                          <img
                            src="https://tryboosting.com/storage/2023/Apr/Kindlegemitem_255.png"
                            className="w-12 p-[2px] h-12 mr-1 rounded-lg"
                          />
                          <img
                            src="https://tryboosting.com/storage/2023/Apr/MejaisSoulstealer_460.webp"
                            className="w-12 p-[2px] h-12 mr-1 rounded-lg"
                          />
                        </div>
                        <div className="flex mt-2">
                          <img
                            src="https://tryboosting.com/storage/2023/Apr/LiandrysAnguish_511.webp"
                            className=" w-12 p-[2px] mr-1 h-12 rounded-lg"
                          />
                          <img
                            src="https://tryboosting.com/storage/2023/Apr/LudensTempest_656.webp"
                            className=" w-12 p-[2px] h-12 mr-1 rounded-lg"
                          />
                          <img
                            src="https://tryboosting.com/storage/2023/Apr/Sorcerer27sShoesitem_636.png"
                            className=" w-12 p-[2px] h-12 mr-1 rounded-lg"
                          />
                        </div>
                        <div className="flex">
                          <p className="">
                            <span className="font-bold">LP:</span>+28LP
                          </p>
                        </div>
                      </div>
                      <div className="mt-6">
                        <img
                          src="https://tryboosting.com/storage/2023/Apr/FarsightAlterationitem_992.png"
                          className=" w-12 p-[2px] h-12 rounded-lg ml-1"
                        />
                      </div>

                      <div className="flex flex-col w-[8%] ml-3">
                        <div className="flex items-center">
                          <p className="text-[10px] mb-2 mr-2">dja...</p>
                          <img
                            src="https://tryboosting.com/storage/2023/Apr/Gragas_305.png"
                            className="w-4  h-4 ml-[7px]"
                          />
                        </div>
                        <div className="flex items-center">
                          <p className="text-[10px] mb-2 text-ellipsis mr-1">
                            DRG...
                          </p>
                          <img
                            src="https://tryboosting.com/storage/2023/Apr/Volibear_94.png"
                            className="w-4 h-4 ml-1"
                          />
                        </div>
                        <div className="flex items-center">
                          <p className="text-[10px] mb-2 text-ellipsis mr-1">
                            Vuln...
                          </p>
                          <img
                            src="https://tryboosting.com/storage/2023/Apr/Vladimir_619.png"
                            className="w-4 h-4 ml-1"
                          />
                        </div>
                        <div className="flex items-center">
                          <p className="text-[10px] mb-2 text-ellipsis mr-1">
                            Gabi...
                          </p>
                          <img
                            src="https://tryboosting.com/storage/2023/Apr/Xayah_869.png"
                            className="w-4 h-4 ml-1"
                          />
                        </div>
                        <div className="flex items-center">
                          <p className="text-[10px] mb-2 text-ellipsis mr-1">
                            Demi...
                          </p>
                          <img
                            src="https://tryboosting.com/storage/2023/Apr/Karma_694.png"
                            className="w-4 h-4 ml-[1px]"
                          />
                        </div>
                      </div>

                      <div className="overflow-hidden flex flex-col w-[8%] ml-2">
                        <div className="flex items-center">
                          <img
                            src="https://tryboosting.com/storage/2023/Apr/Gragas_305.png"
                            className="w-4  h-4 ml-1"
                          />
                          <p className="text-[10px] mb-2 ml-2">dja...</p>
                        </div>
                        <div className="flex items-center">
                          <img
                            src="https://tryboosting.com/storage/2023/Apr/Volibear_94.png"
                            className="w-4 h-4 ml-1"
                          />
                          <p className="text-[10px] mb-2 text-ellipsis ml-1">
                            DRG...
                          </p>
                        </div>
                        <div className="flex items-center">
                          <img
                            src="https://tryboosting.com/storage/2023/Apr/Vladimir_619.png"
                            className="w-4 h-4 ml-1"
                          />
                          <p className="text-[10px] mb-2 text-ellipsis ml-1">
                            Vuln...
                          </p>
                        </div>
                        <div className="flex items-center">
                          <img
                            src="https://tryboosting.com/storage/2023/Apr/Xayah_869.png"
                            className="w-4 h-4 ml-1"
                          />
                          <p className="text-[10px] mb-2 text-ellipsis ml-1">
                            Gabi...
                          </p>
                        </div>
                        <div className="flex items-center">
                          <img
                            src="https://tryboosting.com/storage/2023/Apr/Karma_694.png"
                            className="w-4 h-4 ml-1"
                          />
                          <p className="text-[10px] mb-2 text-ellipsis ml-1">
                            Demi...
                          </p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  {/* third */}
                  <SwiperSlide>
                    <div className="flex w-auto bg-[#523138] mt-[2px] mb-0 py-5 pr-0 pl-2">
                      <div className="flex flex-col">
                        <img
                          src="https://tryboosting.com/storage/2023/Apr/Soraka_381.png"
                          className=" w-20 h-auto rounded-md"
                        />
                        <p className="text-[10px] pt-1">
                          186 CS - 45% Kills P.
                        </p>
                      </div>
                      <div className="flex flex-col">
                        <img
                          src="https://tryboosting.com/assets/images/lol-icons/spell-icons/Smite.webp"
                          className="w-[38px] h-auto rounded-md"
                        />
                        <img
                          src="https://tryboosting.com/assets/images/lol-icons/spell-icons/Flash.webp"
                          className="w-[38px] h-auto rounded-md mt-1 "
                        />
                      </div>
                      <div className="flex">
                        <div className=" ml-4">
                          <p className="w-14 py-1 text-center bg-[#222327] text-[#e84057] text-sm font-semibold rounded">
                            Defeat
                          </p>
                          <p className="text-sm mt-[2px]">
                            <span className="font-semibold">K/D/A: </span>0 / 8
                            / 15
                          </p>
                          <p className="text-sm mt-[2px]">
                            <span className="font-semibold">Duration: </span>
                            35min 42s
                          </p>
                          <p className="text-sm mt-[2px]">
                            <span className="font-semibold">Mode: </span>
                            Soloqueue
                          </p>
                          <p className="text-sm mt-[2px]">3 days ago</p>
                        </div>
                      </div>
                      <div className="flex flex-col w-auto">
                        <div className="flex">
                          <img
                            src="https://tryboosting.com/storage/2023/Apr/ShardofTrueIceitem_640.png"
                            className="w-12 p-[2px] h-12 mr-1 rounded-lg"
                          />
                          <img
                            src="https://tryboosting.com/storage/2023/Apr/ShardofTrueIceitem_640.png"
                            className="w-12 p-[2px] h-12 mr-1 rounded-lg"
                          />
                          <img
                            src="https://tryboosting.com/storage/2023/Apr/MejaisSoulstealer_460.webp"
                            className="w-12 p-[2px] h-12 mr-1 rounded-lg"
                          />
                        </div>
                        <div className="flex mt-2">
                          <img
                            src="https://tryboosting.com/storage/2023/Apr/LiandrysAnguish_511.webp"
                            className=" w-12 p-[2px] mr-1 h-12 rounded-lg"
                          />
                          <img
                            src="https://tryboosting.com/storage/2023/Apr/AmplifyingTomeitem_753.png"
                            className=" w-12 p-[2px] h-12 mr-1 rounded-lg"
                          />
                          <img
                            src="https://tryboosting.com/storage/2023/Apr/Sorcerer27sShoesitem_636.png"
                            className=" w-12 p-[2px] h-12 mr-1 rounded-lg"
                          />
                        </div>
                        <div className="flex">
                          <p className="">
                            <span className="font-bold">LP:</span>+24LP
                          </p>
                        </div>
                      </div>
                      <div className="  mt-6">
                        <img
                          src="https://tryboosting.com/storage/2023/Apr/FarsightAlterationitem_992.png"
                          className=" w-12 p-[2px] h-12 rounded-lg ml-1"
                        />
                      </div>

                      <div className="flex flex-col w-[8%] ml-3">
                        <div className="flex items-center">
                          <p className="text-[10px] mb-2 mr-2">dja...</p>
                          <img
                            src="https://tryboosting.com/storage/2023/Apr/Gragas_305.png"
                            className="w-4  h-4 ml-[7px]"
                          />
                        </div>
                        <div className="flex items-center">
                          <p className="text-[10px] mb-2 text-ellipsis mr-1">
                            DRG...
                          </p>
                          <img
                            src="https://tryboosting.com/storage/2023/Apr/Volibear_94.png"
                            className="w-4 h-4 ml-1"
                          />
                        </div>
                        <div className="flex items-center">
                          <p className="text-[10px] mb-2 text-ellipsis mr-1">
                            Vuln...
                          </p>
                          <img
                            src="https://tryboosting.com/storage/2023/Apr/Vladimir_619.png"
                            className="w-4 h-4 ml-1"
                          />
                        </div>
                        <div className="flex items-center">
                          <p className="text-[10px] mb-2 text-ellipsis mr-1">
                            Gabi...
                          </p>
                          <img
                            src="https://tryboosting.com/storage/2023/Apr/Xayah_869.png"
                            className="w-4 h-4 ml-1"
                          />
                        </div>
                        <div className="flex items-center">
                          <p className="text-[10px] mb-2 text-ellipsis mr-1">
                            Demi...
                          </p>
                          <img
                            src="https://tryboosting.com/storage/2023/Apr/Karma_694.png"
                            className="w-4 h-4 ml-[1px]"
                          />
                        </div>
                      </div>

                      <div className="overflow-hidden flex flex-col w-[8%] ml-2">
                        <div className="flex items-center">
                          <img
                            src="https://tryboosting.com/storage/2023/Apr/Gragas_305.png"
                            className="w-4  h-4 ml-1"
                          />
                          <p className="text-[10px] mb-2 ml-2">dja...</p>
                        </div>
                        <div className="flex items-center">
                          <img
                            src="https://tryboosting.com/storage/2023/Apr/Volibear_94.png"
                            className="w-4 h-4 ml-1"
                          />
                          <p className="text-[10px] mb-2 text-ellipsis ml-1">
                            DRG...
                          </p>
                        </div>
                        <div className="flex items-center">
                          <img
                            src="https://tryboosting.com/storage/2023/Apr/Vladimir_619.png"
                            className="w-4 h-4 ml-1"
                          />
                          <p className="text-[10px] mb-2 text-ellipsis ml-1">
                            Vuln...
                          </p>
                        </div>
                        <div className="flex items-center">
                          <img
                            src="https://tryboosting.com/storage/2023/Apr/Xayah_869.png"
                            className="w-4 h-4 ml-1"
                          />
                          <p className="text-[10px] mb-2 text-ellipsis ml-1">
                            Gabi...
                          </p>
                        </div>
                        <div className="flex items-center">
                          <img
                            src="https://tryboosting.com/storage/2023/Apr/Karma_694.png"
                            className="w-4 h-4 ml-1"
                          />
                          <p className="text-[10px] mb-2 text-ellipsis ml-1">
                            Demi...
                          </p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  {/* fourth */}
                  <SwiperSlide>
                    <div className="flex w-auto bg-[#523138] py-5 mt-2 pr-0 pl-2">
                      <div className="flex flex-col">
                        <img
                          src="https://tryboosting.com/storage/2023/Apr/Zilean_711.png"
                          className=" w-20 h-auto rounded-md"
                        />
                        <p className="text-[10px] pt-1">
                          186 CS - 45% Kills P.
                        </p>
                      </div>
                      <div className="flex flex-col">
                        <img
                          src="https://tryboosting.com/assets/images/lol-icons/spell-icons/Ignite.webp"
                          className="w-[38px] h-auto rounded-md"
                        />
                        <img
                          src="https://tryboosting.com/assets/images/lol-icons/spell-icons/Flash.webp"
                          className="w-[38px] h-auto rounded-md mt-1 "
                        />
                      </div>
                      <div className="flex">
                        <div className=" ml-4">
                          <p className="w-14 py-1 text-center bg-[#222327] text-[#e84057] text-sm font-semibold rounded">
                            Defeat
                          </p>
                          <p className="text-sm mt-[2px]">
                            <span className="font-semibold">K/D/A: </span>2 / 4
                            / 14
                          </p>
                          <p className="text-sm mt-[2px]">
                            <span className="font-semibold">Duration: </span>
                            26min 16s
                          </p>
                          <p className="text-sm mt-[2px]">
                            <span className="font-semibold">Mode: </span>
                            Normal (DP)
                          </p>
                          <p className="text-sm mt-[2px]">2 days ago</p>
                        </div>
                      </div>
                      <div className="flex flex-col w-auto">
                        <div className="flex">
                          <img
                            src="https://tryboosting.com/storage/2023/Apr/ShardofTrueIceitem_640.png"
                            className="w-12 p-[2px] h-12 mr-1 rounded-lg"
                          />
                          <img
                            src="https://tryboosting.com/storage/2023/Apr/NeedlesslyLargeRoditem_141.png"
                            className="w-12 p-[2px] h-12 mr-1 rounded-lg"
                          />
                          <img
                            src="https://tryboosting.com/storage/2023/Apr/ShurelyasBattlesong_231.webp"
                            className="w-12 p-[2px] h-12 mr-1 rounded-lg"
                          />
                        </div>
                        <div className="flex mt-2">
                          <img
                            src="https://tryboosting.com/storage/2023/Apr/TearoftheGoddessitem_777.png"
                            className=" w-12 p-[2px] mr-1 h-12 rounded-lg"
                          />
                          <img
                            src="https://tryboosting.com/storage/2023/Apr/Kindlegemitem_255.png"
                            className=" w-12 p-[2px] h-12 mr-1 rounded-lg"
                          />
                          <img
                            src="https://tryboosting.com/storage/2023/Apr/Sorcerer27sShoesitem_636.png"
                            className=" w-12 p-[2px] h-12 mr-1 rounded-lg"
                          />
                        </div>
                      </div>
                      <div className="  mt-6">
                        <img
                          src="https://tryboosting.com/storage/2023/Apr/FarsightAlterationitem_992.png"
                          className=" w-12 p-[2px] h-12 rounded-lg ml-1"
                        />
                      </div>

                      <div className="flex flex-col w-[8%] ml-3">
                        <div className="flex items-center">
                          <p className="text-[10px] mb-2 mr-2">dja...</p>
                          <img
                            src="https://tryboosting.com/storage/2023/Apr/Gragas_305.png"
                            className="w-4  h-4 ml-[7px]"
                          />
                        </div>
                        <div className="flex items-center">
                          <p className="text-[10px] mb-2 text-ellipsis mr-1">
                            DRG...
                          </p>
                          <img
                            src="https://tryboosting.com/storage/2023/Apr/Volibear_94.png"
                            className="w-4 h-4 ml-1"
                          />
                        </div>
                        <div className="flex items-center">
                          <p className="text-[10px] mb-2 text-ellipsis mr-1">
                            Vuln...
                          </p>
                          <img
                            src="https://tryboosting.com/storage/2023/Apr/Vladimir_619.png"
                            className="w-4 h-4 ml-1"
                          />
                        </div>
                        <div className="flex items-center">
                          <p className="text-[10px] mb-2 text-ellipsis mr-1">
                            Gabi...
                          </p>
                          <img
                            src="https://tryboosting.com/storage/2023/Apr/Xayah_869.png"
                            className="w-4 h-4 ml-1"
                          />
                        </div>
                        <div className="flex items-center">
                          <p className="text-[10px] mb-2 text-ellipsis mr-1">
                            Demi...
                          </p>
                          <img
                            src="https://tryboosting.com/storage/2023/Apr/Karma_694.png"
                            className="w-4 h-4 ml-[1px]"
                          />
                        </div>
                      </div>

                      <div className="overflow-hidden flex flex-col w-[8%] ml-2">
                        <div className="flex items-center">
                          <img
                            src="https://tryboosting.com/storage/2023/Apr/Gragas_305.png"
                            className="w-4  h-4 ml-1"
                          />
                          <p className="text-[10px] mb-2 ml-2">dja...</p>
                        </div>
                        <div className="flex items-center">
                          <img
                            src="https://tryboosting.com/storage/2023/Apr/Volibear_94.png"
                            className="w-4 h-4 ml-1"
                          />
                          <p className="text-[10px] mb-2 text-ellipsis ml-1">
                            DRG...
                          </p>
                        </div>
                        <div className="flex items-center">
                          <img
                            src="https://tryboosting.com/storage/2023/Apr/Vladimir_619.png"
                            className="w-4 h-4 ml-1"
                          />
                          <p className="text-[10px] mb-2 text-ellipsis ml-1">
                            Vuln...
                          </p>
                        </div>
                        <div className="flex items-center">
                          <img
                            src="https://tryboosting.com/storage/2023/Apr/Xayah_869.png"
                            className="w-4 h-4 ml-1"
                          />
                          <p className="text-[10px] mb-2 text-ellipsis ml-1">
                            Gabi...
                          </p>
                        </div>
                        <div className="flex items-center">
                          <img
                            src="https://tryboosting.com/storage/2023/Apr/Karma_694.png"
                            className="w-4 h-4 ml-1"
                          />
                          <p className="text-[10px] mb-2 text-ellipsis ml-1">
                            Demi...
                          </p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="flex flex-col items-center justify-center w-[80%] mx-auto mt-10">
            <div className=" mb-20 ">
              <h2 className="text-4xl font-bold">CHOOSE YOUR GAME</h2>
            </div>

            <div className="flex-col">
              {/* First */}
              <div className="flex md:items-center lg:flex-row md:flex-col w-[100%]">
                <div className="lg:w-[35%] md:w-[100%] mr-3 h-auto">
                  <div className="bg-[#222327]  rounded-3xl">
                    <div className="flex items-center pl-4 pr-6 py-2">
                      <img
                        src="https://tryboosting.com/assets/images/Game-Icon-08.svg"
                        className="w-20 rounded-xl p-[6px] h-20 bg-[#0b0c10]"
                      />
                      <p className="pl-4 leading-none text-3xl font-medium">
                        Black Desert Online
                      </p>
                    </div>
                  </div>
                </div>

                <div className="lg:w-[35%] md:w-[100%] md:mt-5 lg:mt-0 lg:ml-3 mr-3 h-auto">
                  <div className="bg-[#222327]  rounded-3xl">
                    <div className="flex items-center pl-4 pr-6 py-2">
                      <img
                        src="https://tryboosting.com/assets/images/Game-Icon-04.svg"
                        className="w-20 rounded-xl p-[6px] h-20 bg-[#0b0c10]"
                      />
                      <p className="pl-4 leading-none text-3xl font-medium">
                        League of Legends
                      </p>
                    </div>
                  </div>
                </div>

                <div className="lg:w-[35%] md:w-[100%] md:mt-5 lg:mt-0 lg:ml-3 md:mr-3 lg:mr-0 h-auto">
                  <div className="bg-[#222327]  rounded-3xl">
                    <div className="flex items-center p-[6px] pl-4 pr-6 py-2">
                      <img
                        src="https://tryboosting.com/assets/images/Game-Icon-01.svg"
                        className="w-20 rounded-xl h-20 bg-[#0b0c10]"
                      />
                      <p className="pl-4 leading-none text-3xl font-medium">
                        Valorant
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Second Row */}

              <div className="flex mt-5 md:items-center lg:flex-row md:flex-col w-[100%]">
                <div className="lg:w-[35%] md:w-[100%] mr-3 h-auto">
                  <div className="bg-[#222327]  rounded-3xl">
                    <div className="flex items-center pl-4 pr-6 py-2">
                      <img
                        src="https://tryboosting.com/assets/images/Game-Icon-02.svg"
                        className="w-20 rounded-xl p-[6px] h-20 bg-[#0b0c10]"
                      />
                      <p className="pl-4 leading-none text-3xl font-medium">
                        Dota 2
                      </p>
                    </div>
                  </div>
                </div>

                <div className="lg:w-[35%] md:w-[100%] md:mt-5 lg:mt-0 lg:ml-3 mr-3 h-auto">
                  <div className="bg-[#222327]  rounded-3xl">
                    <div className="flex items-center pl-4 pr-6 py-2">
                      <img
                        src="https://tryboosting.com/assets/images/Game-Icon-03.svg"
                        className="w-20 rounded-xl p-[6px] h-20 bg-[#0b0c10]"
                      />
                      <p className="pl-4 leading-none text-3xl font-medium">
                        Apex Legends
                      </p>
                    </div>
                  </div>
                </div>

                <div className="lg:w-[35%] md:w-[100%] md:mt-5 lg:mt-0 md:mr-3 lg:mr-0 lg:ml-3 h-auto">
                  <div className="bg-[#222327]  rounded-3xl">
                    <div className="flex p-[6px] items-center pl-4 pr-6 py-2">
                      <img
                        src="https://tryboosting.com/assets/images/Game-Icon-05.svg"
                        className="w-20 rounded-xl h-20 bg-[#0b0c10]"
                      />
                      <p className="pl-4 leading-none text-3xl font-medium">
                        PUBG
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Third Row */}

              <div className="flex mt-5 md:items-center lg:flex-row md:flex-col w-[100%]">
                <div className="lg:w-[35%] md:w-[100%] mr-3 h-auto">
                  <div className="bg-[#222327]  rounded-3xl">
                    <div className="flex items-center pl-4 pr-6 py-2">
                      <img
                        src="https://tryboosting.com/assets/images/Game-Icon-06.svg"
                        className="w-20 rounded-xl h-20 p-[6px] bg-[#0b0c10]"
                      />
                      <p className="pl-4 leading-none text-3xl font-medium">
                        Call Of Duty
                      </p>
                    </div>
                  </div>
                </div>

                <div className="lg:w-[35%] md:w-[100%] md:mt-5 lg:mt-0 lg:ml-3 mr-3 h-auto">
                  <div className="bg-[#222327]  rounded-3xl">
                    <div className="flex items-center pl-4 pr-6 py-2">
                      <img
                        src="https://tryboosting.com/assets/images/Game-Icon-07.svg"
                        className="w-20 rounded-xl h-20 p-[6px] bg-[#0b0c10]"
                      />
                      <p className="pl-4 leading-none text-3xl font-medium">
                        Rainbow Six Siege
                      </p>
                    </div>
                  </div>
                </div>

                <div className="lg:w-[35%] md:w-[100%] md:mt-5 lg:mt-0 md:mr-3 lg:mr-0 lg:ml-3 h-auto">
                  <div className="bg-[#222327]  rounded-3xl">
                    <div className="flex items-center pl-4 pr-6 py-2">
                      <img
                        src="https://tryboosting.com/assets/images/Game-Icon-09.svg"
                        className="w-20 rounded-xl h-20 p-[6px] bg-[#0b0c10]"
                      />
                      <p className="pl-4 leading-none text-3xl font-medium">
                        Rocket League
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Fourth Row */}
              <div className="flex mt-5 md:items-center lg:flex-row md:flex-col w-[100%]">
                <div className="lg:w-[35%] md:w-[100%] mr-3 h-auto">
                  <div className="bg-[#222327]  rounded-3xl">
                    <div className="flex items-center pl-4 pr-6 py-2">
                      <img
                        src="https://tryboosting.com/assets/images/Game-Icon-10.svg"
                        className="w-20 rounded-xl p-[6px] h-20 bg-[#0b0c10]"
                      />
                      <p className="pl-4 leading-none text-3xl font-medium">
                        World Of Warcraft
                      </p>
                    </div>
                  </div>
                </div>

                <div className="lg:w-[35%] md:w-[100%] md:mt-5 lg:mt-0 lg:ml-3 mr-3 h-auto">
                  <div className="bg-[#222327]  rounded-3xl">
                    <div className="flex items-center pl-4 pr-6 py-2">
                      <img
                        src="https://tryboosting.com/assets/images/Game-Icon-11.svg"
                        className="w-20 rounded-xl p-[6px] h-20 bg-[#0b0c10]"
                      />
                      <p className="pl-4 leading-none text-3xl font-medium">
                        COD: Mobile
                      </p>
                    </div>
                  </div>
                </div>

                <div className="lg:w-[35%] md:w-[100%] md:mt-5 lg:mt-0 md:mr-3 lg:mr-0 lg:ml-3 h-auto">
                  <div className="bg-[#222327]  rounded-3xl">
                    <div className="flex items-center pl-4 pr-6 py-2">
                      <img
                        src="https://tryboosting.com/assets/images/Game-Icon-12.svg"
                        className="w-20 rounded-xl p-[6px] h-20 bg-[#0b0c10]"
                      />
                      <p className="pl-4 leading-none text-3xl font-medium">
                        Team Fight Tactics
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="flex flex-col items-center justify-center mt-24 w-[95%] mx-auto">
            <div className="flex flex-col">
              <h2 className="text-4xl font-bold">BOOSTING MANUAL</h2>
              <p className="font-normal mt-3 text-center text-sm">
                Our Trouble-free Boosting Process
              </p>
            </div>

            <div className="flex justify-between mt-20 w-[100%]">
              <div className="flex justify-center w-[33.3%] ">
                <img
                  src="https://tryboosting.com/assets/images/Step_1-01.png"
                  className="w-10 h-10"
                />
                <h2 className="text-2xl pl-2 font-semibold">Select Service</h2>
              </div>

              <div className="flex justify-center w-[33.3%]">
                <img
                  src="https://tryboosting.com/assets/images/Step_2-01.png"
                  className="w-10 h-10"
                />
                <h2 className="lg:text-2xl md:text-xl pl-2 font-bold">
                  Complete Payment
                </h2>
              </div>

              <div className="flex justify-center w-[33.3%]">
                <img
                  src="https://tryboosting.com/assets/images/Step_3-01.png"
                  className="w-10 h-10"
                />
                <h2 className="text-2xl font-semibold">Boost Now</h2>
              </div>
            </div>

            <div className="w-full mt-3">
              <div class="border-b-2 animate-borderscroll"></div>
            </div>
            <Swiper
              autoplay={{
                delay: 1900,
                disableOnInteraction: false,
              }}
              loop="true"
              pagination={{
                clickable: false,
              }}
              effect={"fade"}
              fadeEffect={{ crossFade: true }}
              navigation={false}
              modules={[Autoplay, Navigation]}
              className="flex items-center mt-10 w-[97%]"
            >
              <SwiperSlide>
                <div className="flex">
                  <div className="w-[50%]">
                    <img
                      src="https://tryboosting.com/assets/images/Service_Selection_Neue-01.png"
                      className=""
                    />
                  </div>
                  <div className="flex flex-col pl-12 w-[50%] ">
                    <div className="flex">
                      <h2 className="text-2xl pb-8 font-bold ">
                        Choose Your Desired Service
                      </h2>
                    </div>
                    <h2 className="pb-6 text-lg font-normal">
                      Looking to buy Tryboosting’s services for the games?
                    </h2>
                    <p className="text-lg pb-8 font-normal">
                      Well, all you need to do is select your desired boost type
                      and customize it according to your needs. Then proceed to
                      pay and choose from various payment methods that suit you
                      best.
                    </p>
                    <p className="text-lg pb-8 font-normal">
                      We are always here to assist you through all your
                      difficulties. So, stay in touch!
                    </p>
                    <button className="text-xl font-semibold border-2 rounded-lg mt-5 justify-center w-24 pb-1">
                      NEXT
                    </button>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex">
                  <div className="w-[50%]">
                    <img
                      src="https://tryboosting.com/assets/images/Payment_Neue-01.png"
                      className=""
                    />
                  </div>
                  <div className="flex flex-col pl-12 w-[50%] ">
                    <div className="flex">
                      <h2 className="text-2xl pb-8 font-bold ">
                        Easy Payment Procedure
                      </h2>
                    </div>
                    <h2 className="pb-6 text-base font-normal">
                      As soon as you select your desired services, proceed with
                      the payment that’s being processed instantly.
                    </h2>

                    <p className="text-lg pb-8 font-medium">
                      You can pay though:
                    </p>
                    <ol className="text-lg pb-8 font-normal">
                      <li>● PayPal.</li>
                      <li>● Credit/Debit cards.</li>
                      <li>● Cryptocurrencies.</li>
                    </ol>
                    <button className="text-xl font-semibold border-2 rounded-lg mt-5 justify-center w-24 pb-1">
                      NEXT
                    </button>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex">
                  <div className="w-[50%]">
                    <img
                      src="https://tryboosting.com/assets/images/Boost_-_Rank_Up_Neue-01.png"
                      className=""
                    />
                  </div>
                  <div className="flex flex-col pl-12 w-[50%] ">
                    <div className="flex">
                      <h2 className="text-2xl pb-8 font-bold ">
                        Follow The Progress
                      </h2>
                    </div>
                    <h2 className="pb-6 text-base font-normal">
                      Now that you’ve all set, leave everything else to us. You
                      can chat with your booster or agent to track the progress
                      of your order.
                    </h2>

                    <ol className="text-lg pb-8 font-normal">
                      <li>● Get live support..</li>
                      <li>● Chat directly with the booster.</li>
                      <li>● Track your order live.</li>
                    </ol>
                    <button className="text-xl font-semibold border-2 rounded-lg mt-5 justify-center w-24 pb-1">
                      NEXT
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>

        <section>
          <div className="flex items-center w-[95%] mx-auto mt-28 justify-center">
            <div className="flex-col">
              <div className="mb-10">
                <h2 className="text-4xl text-center font-bold">
                  WHAT CLIENTS SAY
                </h2>
              </div>
              <div className="flex items-center justify-between w-[100%]">
                <div className=" flex flex-col justify-between w-[24%] border-t-2 rounded-md h-[200px] bg-[#202833] pt-6">
                  <div className="flex">
                    <div className="pl-5 pt-2">
                      <img
                        src="https://tryboosting.com/assets/images/icon-2.webp"
                        className=" w-8 h-3"
                      />
                    </div>
                    <p className="text-sm pl-3 pr-4">
                      The booster and the agent both were polite and
                      professional.
                    </p>
                  </div>
                  <div className="flex flex-col items-center mb-5">
                    <p className="font-bold text-xl">Jackson.</p>
                    <p className="font-semibold text-base">
                      BLACK DESERT ONLINE
                    </p>
                  </div>
                </div>

                <div className="flex flex-col justify-between w-[24%] border-t-2 rounded-md h-[200px] bg-[#202833] pt-6">
                  <div className="flex">
                    <div className="pl-5 pt-2">
                      <img
                        src="https://tryboosting.com/assets/images/icon-2.webp"
                        className=" w-8 h-3"
                      />
                    </div>
                    <p className="text-sm pl-3 pr-4">
                      The booster and the agent both were polite and
                      professional.
                    </p>
                  </div>
                  <div className="flex flex-col items-center mb-5">
                    <p className="font-bold text-xl">Huiqing.</p>
                    <p className="font-semibold text-base">
                      BLACK DESERT ONLINE
                    </p>
                  </div>
                </div>

                <div className="flex flex-col justify-between w-[24%] border-t-2 rounded-md h-[200px] bg-[#202833] pt-6">
                  <div className="flex">
                    <div className="pl-5 pt-2">
                      <img
                        src="https://tryboosting.com/assets/images/icon-2.webp"
                        className=" w-8 h-3"
                      />
                    </div>
                    <p className="text-sm pl-3 pr-4">
                      The booster and the agent both were polite and
                      professional.
                    </p>
                  </div>
                  <div className="flex flex-col items-center mb-5">
                    <p className="font-bold text-xl">Oliver.</p>
                    <p className="font-semibold text-base">
                      BLACK DESERT ONLINE
                    </p>
                  </div>
                </div>

                <div className="flex flex-col justify-between w-[24%] border-t-2 rounded-md h-[200px] bg-[#202833] pt-6">
                  <div className="flex">
                    <div className="pl-5 pt-2">
                      <img
                        src="https://tryboosting.com/assets/images/icon-2.webp"
                        className=" w-8 h-3"
                      />
                    </div>
                    <p className="text-sm pl-3 pr-4">
                      The booster and the agent both were polite and
                      professional.
                    </p>
                  </div>
                  <div className="flex flex-col items-center mb-5">
                    <p className="font-bold text-xl">Oliver.</p>
                    <p className="font-semibold text-base">
                      BLACK DESERT ONLINE
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="flex flex-col items-center w-[90%] mx-auto mt-16 justify-center">
            <div className="flex">
              <p className="text-4xl font-bold">FAQs</p>
            </div>

            <div className="flex mt-8 flex-col">
              <div
                onClick={() => setDropbtn(!dropbtn)}
                className="flex flex-col justify-between bg-black border border-white rounded-md w-[650px] py-3"
              >
                <div className="flex justify-between w-auto">
                  <p className="pl-4 text-base font-semibold">
                    How can I ensure you won’t spoil or steal my data?
                  </p>
                  <div className="pr-4 ">
                    <PiCaretDownBold className="text-xl" />
                  </div>
                </div>
                <div>
                  {dropbtn && (
                    <div className="mt-4">
                      <div className="border-b border-white w-[95%] mx-auto"></div>
                      <div>
                        <p className="pl-4 pr-1 pt-4 text-base ">
                          You can view your progress on twitch as we provide a
                          private stream there. Our top priority is ensuring
                          your safety because we want 100% feedback from our
                          clients.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div
                onClick={() => setDropbtn2(!dropbtn2)}
                className="flex mt-5 flex-col justify-between bg-black border border-white rounded-md w-[650px] py-3"
              >
                <div className="flex justify-between w-auto">
                  <p className="pl-4 text-base font-semibold">
                    How can I track my order?
                  </p>
                  <div className="pr-4 ">
                    <PiCaretDownBold className="text-xl" />
                  </div>
                </div>
                <div>
                  {dropbtn2 && (
                    <div className="mt-4">
                      <div className="border-b border-white w-[95%] mx-auto"></div>
                      <div>
                        <p className="pl-4 pr-1 pt-4 text-base ">
                          For all our boosting services, we offer live order
                          tracking. You can easily log in to your account’s
                          member area, where you can track your order. While
                          placing an order, you can choose from various tracking
                          options to know the progress of your order.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div
                onClick={() => setDropbtn3(!dropbtn3)}
                className="flex mt-5 flex-col justify-between bg-black border border-white rounded-md w-[650px] py-3"
              >
                <div className="flex justify-between w-auto">
                  <p className="pl-4 text-base font-semibold">
                    How can I get a discount?
                  </p>
                  <div className="pr-4 ">
                    <PiCaretDownBold className="text-xl" />
                  </div>
                </div>
                <div>
                  {dropbtn3 && (
                    <div className="mt-4">
                      <div className="border-b border-white w-[95%] mx-auto"></div>
                      <div>
                        <p className="pl-4 pr-1 pt-4 text-base ">
                        We have special offers, weekly discounts, and discounts for our regular customers. If you need a discount, contact the operator before purchasing.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div
                onClick={() => setDropbtn4(!dropbtn4)}
                className="flex mt-5 flex-col justify-between bg-black border border-white rounded-md w-[650px] py-3"
              >
                <div className="flex justify-between w-auto">
                  <p className="pl-4 text-base font-semibold">
                  How soon do you start working after purchase?
                  </p>
                  <div className="pr-4 ">
                    <PiCaretDownBold className="text-xl" />
                  </div>
                </div>
                <div>
                  {dropbtn4 && (
                    <div className="mt-4">
                      <div className="border-b border-white w-[95%] mx-auto"></div>
                      <div>
                        <p className="pl-4 pr-1 pt-4 text-base ">
                        Booster will start working within 30 minutes after you provide us with all your account details.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
               
              <div
                onClick={() => setDropbtn5(!dropbtn5)}
                className="flex mt-5 flex-col justify-between bg-black border border-white rounded-md w-[650px] py-3"
              >
                <div className="flex justify-between w-auto">
                  <p className="pl-4 text-base font-semibold">
                  What are the payment methods?
                  </p>
                  <div className="pr-4 ">
                    <PiCaretDownBold className="text-xl" />
                  </div>
                </div>
                <div>
                  {dropbtn5 && (
                    <div className="mt-4">
                      <div className="border-b border-white w-[95%] mx-auto"></div>
                      <div>
                        <p className="pl-4 pr-1 pt-4 text-base ">
                         We accept the following payment methods:
                        </p>
                        <ul className="pl-4 pr-1 pt-4 text-base" >
                        <li>●	PayPal.</li>
                        <li>● Credit/Debit cards.</li>
                        <li>● Cryptocurrencies.</li>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div
                onClick={() => setDropbtn6(!dropbtn6)}
                className="flex mt-5 flex-col justify-between bg-black border border-white rounded-md w-[650px] py-3"
              >
                <div className="flex justify-between w-auto">
                  <p className="pl-4 text-base font-semibold">
                  Does booster reply to my chats?
                  </p>
                  <div className="pr-4 ">
                    <PiCaretDownBold className="text-xl" />
                  </div>
                </div>
                <div>
                  {dropbtn6 && (
                    <div className="mt-4">
                      <div className="border-b border-white w-[95%] mx-auto"></div>
                      <div>
                        <p className="pl-4 pr-1 pt-4 text-base ">
                        No, he will never reply to your chats. He will either ignore them or go on busy mode so he won’t get any messages.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default Home;
