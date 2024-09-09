import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
export default function featured() {
  const [swiperState, setSwiperState] = useState();
  const handleslidechange = (swiper) => {
    setSwiperState(swiper.activeIndex);
  };
  return (
    <>
      <section>
        <div className="flex items-center mt-14 justify-center">
          <div className="flex flex-col items-center w-[83%] mx-auto lg:h-[900px] xs:h-[1770px] xl:h-[800px] md:h-[1200px] overflow-hidden  bg-[#15161a] rounded-2xl">
            <h2 className="text-4xl font-bold text-center m-5">
              Any special needs? We are here to meet them.
            </h2>
            <p className="w-[60%] text-center text-lg leading-tight">
              We understand the variety of preferences that each gamer has and
              elo-boost.net is already prepared to face up to any of them. To
              guarantee perfectly suited settings for your gaming habits is one
              of our priorities. In order to do so we offer a variety of
              features, some of which can be seen below.
            </p>
            <div className="mt-12 border-b w-[95%] border-white"></div>

            <div className="flex lg:flex-row md:flex-col xs:flex-col md:h-[850px] xs:h-[2000px] w-[100%]">
              <Swiper
                direction={"vertical"}
                slidesPerView={1}
                onSlideChange={handleslidechange}
                breakpoints={{
                  320:{
                    slidesPerView:1,
                  },
                  640:{
                    slidesPerView:1,
                  },
                   768:{
                    slidesPerView:1,
                   },
                   1024:{
                     slidesPerView:1,
                   },              
                }}
                loop={true}
                pagination={{
                  clickable: true,
                }}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                }}
                navigation={false}
                modules={[Autoplay, Navigation]}
                className="flex flex-col pl-10 lg:w-[39%] lg:h-[800px] md:h-[600px] xs:h-[600px] xl:h-[520px] overflow-hidden md:w-auto"
              >
                <SwiperSlide>
                  <div
                    className={`flex flex-col mt-5 ml-0 mr-10 mb-0 mx-auto pt-8 pb-8 pl-10 pr-10 h-auto w-auto
                    ${swiperState === 0 ? " rounded-lg mt-0" : ""} `}
                  >
                    <div
                      className={`pl-[1.5rem] pr-[1.5rem] pt-[1rem] pb-[1rem] ${
                        swiperState === 0 ? "bg-[#424242] rounded-t-lg text-white pl-[1.5rem] pr-[1.5rem] pt-[1.5rem] pb-[1.5rem]" : ""
                      }`}
                    >
                      <h2 className={`text-2xl ${swiperState === 0 ? "text-white text-2xl":""} text-[#5d5d5d] text-xl font-medium`}>
                        Step 1: Explore Try Boosting Website
                      </h2>
                    </div>
                    <div
                      className={`pl-[3rem] pr-[3rem] pt-[2.5rem] pb-[2.5rem] ${swiperState === 0 ? "rounded-b-lg pl-[3rem] pr-[3rem] pt-[3rem] pb-[3rem] bg-[#c9e8f7]" : ""}`}
                    >
                      <p className={`text-[#5d5d5d] font-medium md:leading-normal xs:leading-none lg:leading-tight xl:leading-relaxed ${swiperState === 0 ? "text-black xs:leading-none md:leading-relaxed" : ""}`}>
                      Begin your journey by exploring the intuitive and informative Try Boosting website, where you can easily find the perfect game boosting service to level up your gameplay.
                      </p>
                    </div>
                  </div>
                  <div className="border-b border-white ml-9 mt-0 w-[85%]"></div>
                </SwiperSlide>
                {/* second */}
                <SwiperSlide>
                  <div
                    className={`flex flex-col mt-5 ml-0 mr-10 mb-0 pt-8 pb-8 pl-10 pr-10 h-auto w-auto
                    ${swiperState === 1 ? " rounded-lg mt-0" : ""} `}
                  >
                    <div
                      className={` pl-[1.5rem] pr-[1.5rem] pt-[1rem] pb-[1rem] ${
                        swiperState === 1 ? "bg-[#424242] rounded-t-lg text-white pl-[1.5rem] pr-[1.5rem] pt-[1.5rem] pb-[1.5rem]" : ""
                      }`}
                    >
                      <h2 className={`text-2xl ${swiperState === 1 ? "text-white text-2xl":""} text-[#5d5d5d] text-xl font-medium`}>
                        Step 2: Select a Specific Game Boost Service
                      </h2>
                    </div>
                    <div
                      className={`pl-[3rem] pr-[3rem] pt-[2.5rem] pb-[2.5rem] ${swiperState === 1 ? "rounded-b-lg pl-[3rem] pr-[3rem] pt-[3rem] pb-[3rem] bg-[#c9e8f7]" : ""}`}
                    >
                      <p className={`text-[#5d5d5d] font-medium xs:leading-none md:leading-normal lg:leading-none xl:leading-relaxed ${swiperState === 1 ? "text-black xs:leading-none md:leading-relaxed" : ""}`}>
                        From an array of game boosting options, choose the specific service that best fits your gaming ambitions, allowing you to enhance your gameplay in a way that suits your preferences.
                      </p>
                    </div>
                  </div>
                  <div className="border-b border-white ml-9 mt-0 w-[85%]"></div>
                </SwiperSlide>
                 {/* third */}
                <SwiperSlide>
                  <div
                    className={`flex flex-col mt-5 ml-0 mr-10 mb-0 pt-8 pb-8 pl-10 pr-10 h-auto w-auto
                    ${swiperState === 2 ? " rounded-lg mt-0" : ""} `}
                  >
                    <div
                      className={` pl-[1.5rem] pr-[1.5rem] pt-[1rem] pb-[1rem] ${
                        swiperState === 2 ? "bg-[#424242] rounded-t-lg text-white pl-[1.5rem] pr-[1.5rem] pt-[1.5rem] pb-[1.5rem]" : ""
                      }`}
                    >
                      <h2 className={`text-2xl ${swiperState === 2 ? "text-white text-2xl":""} text-[#5d5d5d] text-xl font-medium`}>
                        Step 3: Customize the Service According to Your Requirements
                      </h2>
                    </div>
                    <div
                      className={` pl-[2rem] pr-[2rem] pt-[2.5rem] pb-[2.5rem] ${swiperState === 2 ? "rounded-b-lg lg:pl-[2rem] xl:pl-[3rem] xl:pr-[3rem] lg:pr-[2rem] pt-[2.5rem] pb-[2.5rem] bg-[#c9e8f7]" : ""}`}
                    >
                      <p className={`text-[#5d5d5d] font-medium xs:leading-none md:leading-normal lg:leading-normal xl:leading-relaxed ${swiperState === 2 ? "text-black xs:leading-none md:leading-relaxed" : ""}`}>
                        Easily customize the selected game boosting service with our flexible options to seamlessly tailor your gaming experience based on your individual preferences and achievements.
                      </p>
                    </div>
                  </div>
                  <div className="border-b border-white ml-9 mt-0 w-[85%]"></div>
                </SwiperSlide>
                {/* fourth */}
                <SwiperSlide>
                  <div
                    className={`flex flex-col mt-5 ml-0 mr-10 mb-0 pt-8 pb-8 pl-10 pr-10 h-auto w-auto
                    ${swiperState === 3 ? " rounded-lg mt-0" : ""} `}
                  >
                    <div
                      className={` pl-[1.5rem] pr-[1.5rem] pt-[1rem] pb-[1rem] ${
                        swiperState === 3 ? "bg-[#424242] rounded-t-lg text-white pl-[1.5rem] pr-[1.5rem] pt-[1rem] pb-[1rem]" : ""
                      }`}
                    >
                      <h2 className={` text-2xl ${swiperState === 3 ? "text-white text-2xl":""} text-[#5d5d5d] text-xl font-medium`}>
                        Step 4: Proceed to Secure Payment and Leave Everything to Us
                      </h2>
                    </div>
                    <div
                      className={` pl-[3rem] pr-[3rem] pt-[2.5rem] pb-[2.5rem] ${swiperState === 3 ? "rounded-b-lg lg:pl-[2rem] xl:pl-[3rem] xl:pr-[3rem] lg:pr-[2rem] pt-[2.5rem] pb-[2.5rem] bg-[#c9e8f7]" : ""}`}
                    >
                      <p className={`text-[#5d5d5d] font-medium md:leading-normal xs:leading-none lg:leading-normal xl:leading-relaxed ${swiperState === 3 ? "text-black xs:leading-none md:leading-relaxed" : ""}`}>
                        Safely proceed to our secure payment gateway and conveniently choose from various payment methods, and then relax as our trusted professionals take the reins to boost your game.
                      </p>
                    </div>
                  </div>
                  <div className="border-b border-white ml-9 mt-0 w-[85%]"></div>
                </SwiperSlide>
              </Swiper>

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
                className="flex xs:mt-5 lg:mt-14 xl:mt-12 xs:mb-5 md:mb-2 xs:h-[500px] xl:h-[490px] lg:h-[550px] md:h-[650px] lg:mr-2 overflow-hidden justify-center lg:w-[55%] xs:w-[94%] md:w-auto rounded-2xl z-50"
              >
                {/* first */}
                <SwiperSlide>
                  <div className="flex w-auto overflow-hidden bg-[#1e363a] py-5 mt-[2px] pr-0 pl-2">
                    <div className="flex flex-col">
                      <img
                        src="https://tryboosting.com/storage/2023/Apr/Lux_166.png"
                        className=" md:w-20 xs:w-28 h-auto rounded-md"
                      />
                      <p className="text-[10px] pt-1">186 CS - 45% Kills P.</p>
                    </div>
                    <div className="flex flex-col">
                      <img
                        src="https://tryboosting.com/assets/images/lol-icons/spell-icons/Barrier.webp"
                        className="w-[38px]  h-auto rounded-md"
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
                          <span className="font-semibold">K/D/A: </span>7 / 1 /
                          15
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
                    <div className="md:block xs:hidden mt-6">
                      <img
                        src="https://tryboosting.com/storage/2023/Apr/OracleLensitem_188.png"
                        className=" w-12 p-[2px] h-12 rounded-lg ml-1"
                      />
                    </div>

                    <div className="flex flex-col md:block xs:hidden w-[8%] ml-3">
                      <div className="flex items-center">
                        <p className="text-[10px] mb-2 md:mr-2">Kyri...</p>
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

                    <div className="overflow-hidden xs:hidden md:block flex flex-col w-[8%] ml-2">
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
                  <div className="flex w-auto overflow-hidden bg-[#1e363a] py-5 -mt-1 pr-0 pl-2">
                    <div className="flex flex-col">
                      <img
                        src="https://tryboosting.com/storage/2023/Apr/Zac_553.png"
                        className=" md:w-20 xs:w-28 h-auto rounded-md"
                      />
                      <p className="text-[10px] pt-1">186 CS - 45% Kills P.</p>
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
                          <span className="font-semibold">K/D/A: </span>13 / 5 /
                          12
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
                    <div className="mt-6 md:block xs:hidden">
                      <img
                        src="https://tryboosting.com/storage/2023/Apr/FarsightAlterationitem_992.png"
                        className=" w-12 p-[2px] h-12 rounded-lg ml-1"
                      />
                    </div>

                    <div className="flex flex-col w-[8%] ml-3 xs:hidden md:block">
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

                    <div className="xs:hidden md:block overflow-hidden flex flex-col w-[8%] ml-2">
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
                  <div className="flex w-auto overflow-hidden bg-[#523138] mt-[2px] mb-0 py-5 pr-0 pl-2">
                    <div className="flex flex-col">
                      <img
                        src="https://tryboosting.com/storage/2023/Apr/Soraka_381.png"
                        className="md:w-20 xs:w-28 h-auto rounded-md"
                      />
                      <p className="text-[10px] pt-1">186 CS - 45% Kills P.</p>
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
                          <span className="font-semibold">K/D/A: </span>0 / 8 /
                          15
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
                    <div className=" xs:hidden md:block mt-6">
                      <img
                        src="https://tryboosting.com/storage/2023/Apr/FarsightAlterationitem_992.png"
                        className=" w-12 p-[2px] h-12 rounded-lg ml-1"
                      />
                    </div>

                    <div className="flex flex-col w-[8%] xs:hidden md:block ml-3">
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

                    <div className="overflow-hidden flex flex-col w-[8%] md:block xs:hidden ml-2">
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
                  <div className="flex overflow-hidden w-auto bg-[#523138] py-5 mt-2 pr-0 pl-2">
                    <div className="flex flex-col">
                      <img
                        src="https://tryboosting.com/storage/2023/Apr/Zilean_711.png"
                        className=" md:w-20 xs:w-28 h-auto rounded-md"
                      />
                      <p className="text-[10px] pt-1">186 CS - 45% Kills P.</p>
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
                          <span className="font-semibold">K/D/A: </span>2 / 4 /
                          14
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
                    <div className=" md:block xs:hidden mt-6">
                      <img
                        src="https://tryboosting.com/storage/2023/Apr/FarsightAlterationitem_992.png"
                        className=" w-12 p-[2px] h-12 rounded-lg ml-1"
                      />
                    </div>

                    <div className="flex flex-col w-[8%] md:block xs:hidden ml-3">
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

                    <div className="overflow-hidden flex flex-col w-[8%] ml-2 xs:hidden md:block">
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
    </>
  );
}
