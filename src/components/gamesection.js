import React from "react";

export default function gamesection() {
  return (
    <>
      <section className="">
        <div className="flex flex-col items-center justify-center w-[80%] mx-auto mt-10">
          <div className=" mb-20 ">
            <h2 className="text-4xl font-bold xs:text-center">CHOOSE YOUR GAME</h2>
          </div>

          <div className="flex-col">
            {/* First */}
            <div className="flex md:items-center xs:flex-col lg:flex-row md:flex-col md:w-[100%] xs:w-[100%] xs:items-center xs:mx-auto">
              <div className="lg:w-[35%] md:w-[100%] mr-3 h-auto">
                <div className="relative z-0 bg-[#222327] border-2 hover:border-white hover:border-2 border-[#222327] rounded-3xl">
                  <div className="flex items-center   pl-4 pr-6 py-2">
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

              <div className="lg:w-[35%] md:w-[100%] md:mt-5 xs:mt-5 lg:mt-0 lg:ml-3 mr-3 h-auto">
                <div className="relative z-0 bg-[#222327] border-2 hover:border-white hover:border-2 border-[#222327] rounded-3xl">
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

              <div className="lg:w-[35%] md:w-[100%] md:mt-5 xs:mt-5 xs:mr-4 lg:mt-0 lg:ml-3 md:mr-3 lg:mr-0 h-auto">
                <div className="relative z-0 bg-[#222327] border-2 hover:border-white hover:border-2 border-[#222327] rounded-3xl">
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

            <div className="flex mt-5 md:items-center lg:flex-row md:flex-col xs:w-[100%] xs:flex-col xs:mx-auto w-[100%]">
              <div className="lg:w-[35%] md:w-[100%] mr-3 h-auto">
                <div className="relative-h z-0 bg-[#222327] border-2 hover:border-white hover:border-2 border-[#222327] rounded-3xl">
                  <div className="flex items-center pl-4 pr-6 py-2">
                    <img
                      src="https://tryboosting.com/assets/images/Game-Icon-02.svg"
                      className="w-20 rounded-xl p-[6px] h-20 bg-[#0b0c10]"
                    />
                    <p className="pl-4 leading-none text-3xl font-medium">
                      Dota 2
                    </p>
                  </div>
                  <div className=" hover-c absolute flex justify-center items-center bg-black top-0 bottom-0 left-0 right-0 opacity-0 rounded-3xl">
                        <h2 className="text-3xl items-center font-bold text-yellow-500">Coming Soon</h2>
                  </div>
                </div>
              </div>

              <div className="lg:w-[35%] md:w-[100%] md:mt-5 xs:mt-5 lg:mt-0 lg:ml-3 mr-3 h-auto">
                <div className="relative-h z-0 bg-[#222327] border-2 hover:border-white hover:border-2 border-[#222327] rounded-3xl">
                  <div className="flex items-center pl-4 pr-6 py-2">
                    <img
                      src="https://tryboosting.com/assets/images/Game-Icon-03.svg"
                      className="w-20 rounded-xl p-[6px] h-20 bg-[#0b0c10]"
                    />
                    <p className="pl-4 leading-none text-3xl font-medium">
                      Apex Legends
                    </p>
                  </div>
                  <div className=" hover-c absolute flex justify-center items-center bg-black top-0 bottom-0 left-0 right-0 opacity-0 rounded-3xl">
                        <h2 className="text-3xl items-center font-bold text-yellow-500">Coming Soon</h2>
                  </div>
                </div>
              </div>

              <div className="lg:w-[35%] md:w-[100%] md:mt-5 lg:mt-0 xs:mt-5 xs:mr-3 md:mr-3 lg:mr-0 lg:ml-3 h-auto">
                <div className="relative-h z-0 bg-[#222327] border-2 hover:border-white hover:border-2 border-[#222327] rounded-3xl">
                  <div className="flex p-[6px] items-center pl-4 pr-6 py-2">
                    <img
                      src="https://tryboosting.com/assets/images/Game-Icon-05.svg"
                      className="w-20 rounded-xl h-20 bg-[#0b0c10]"
                    />
                    <p className="pl-4 leading-none text-3xl font-medium">
                      PUBG
                    </p>
                  </div>
                  <div className=" hover-c absolute flex justify-center items-center bg-black top-0 bottom-0 left-0 right-0 opacity-0 rounded-3xl">
                        <h2 className="text-3xl items-center font-bold text-yellow-500">Coming Soon</h2>
                  </div>
                </div>
              </div>
            </div>

            {/* Third Row */}

            <div className="flex mt-5 md:items-center lg:flex-row md:flex-col w-[100%] xs:flex-col xs:mx-auto xs:w-[100%]">
              <div className="lg:w-[35%] md:w-[100%] mr-3 h-auto">
                <div className="relative-h z-0 bg-[#222327] border-2 hover:border-white hover:border-2 border-[#222327] rounded-3xl">
                  <div className="flex items-center pl-4 pr-6 py-2">
                    <img
                      src="https://tryboosting.com/assets/images/Game-Icon-06.svg"
                      className="w-20 rounded-xl h-20 p-[6px] bg-[#0b0c10]"
                    />
                    <p className="pl-4 leading-none text-3xl font-medium">
                      Call Of Duty
                    </p>
                  </div>
                  <div className=" hover-c absolute flex justify-center items-center bg-black top-0 bottom-0 left-0 right-0 opacity-0 rounded-3xl">
                        <h2 className="text-3xl items-center font-bold text-yellow-500">Coming Soon</h2>
                  </div>
                </div>
              </div>

              <div className="lg:w-[35%] md:w-[100%] md:mt-5 lg:mt-0 xs:mt-5 lg:ml-3 mr-3 h-auto">
                <div className="relative-h z-0 bg-[#222327] border-2 hover:border-white hover:border-2 border-[#222327] rounded-3xl">
                  <div className="flex items-center pl-4 pr-6 py-2">
                    <img
                      src="https://tryboosting.com/assets/images/Game-Icon-07.svg"
                      className="w-20 rounded-xl h-20 p-[6px] bg-[#0b0c10]"
                    />
                    <p className="pl-4 leading-none text-3xl font-medium">
                      Rainbow Six Siege
                    </p>
                  </div>
                  <div className=" hover-c absolute flex justify-center items-center bg-black top-0 bottom-0 left-0 right-0 opacity-0 rounded-3xl">
                        <h2 className="text-3xl items-center font-bold text-yellow-500">Coming Soon</h2>
                  </div>
                </div>
              </div>

              <div className="lg:w-[35%] md:w-[100%] md:mt-5 lg:mt-0 xs:mt-5 xs:mr-3 md:mr-3 lg:mr-0 lg:ml-3 h-auto">
                <div className="relative-h z-0 bg-[#222327] border-2 hover:border-white hover:border-2 border-[#222327] rounded-3xl">
                  <div className="flex items-center pl-4 pr-6 py-2">
                    <img
                      src="https://tryboosting.com/assets/images/Game-Icon-09.svg"
                      className="w-20 rounded-xl h-20 p-[6px] bg-[#0b0c10]"
                    />
                    <p className="pl-4 leading-none text-3xl font-medium">
                      Rocket League
                    </p>
                  </div>
                  <div className=" hover-c absolute flex justify-center items-center bg-black top-0 bottom-0 left-0 right-0 opacity-0 rounded-3xl">
                        <h2 className="text-3xl items-center font-bold text-yellow-500">Coming Soon</h2>
                  </div>
                </div>
              </div>
            </div>

            {/* Fourth Row */}
            <div className="flex mt-5 md:items-center lg:flex-row xs:flex-col xs:mx-auto md:flex-col w-[100%]">
              <div className="lg:w-[35%] md:w-[100%] mr-3 h-auto">
                <div className="relative-h z-0 bg-[#222327] border-2 hover:border-white hover:border-2 border-[#222327] rounded-3xl">
                  <div className="flex items-center pl-4 pr-6 py-2">
                    <img
                      src="https://tryboosting.com/assets/images/Game-Icon-10.svg"
                      className="w-20 rounded-xl p-[6px] h-20 bg-[#0b0c10]"
                    />
                    <p className="pl-4 leading-none text-3xl font-medium">
                      World Of Warcraft
                    </p>
                  </div>
                  <div className=" hover-c absolute flex justify-center items-center bg-black top-0 bottom-0 left-0 right-0 opacity-0 rounded-3xl">
                        <h2 className="text-3xl items-center font-bold text-yellow-500">Coming Soon</h2>
                  </div>
                </div>
              </div>

              <div className="lg:w-[35%] md:w-[100%] md:mt-5 xs:mt-5 lg:mt-0 lg:ml-3 mr-3 h-auto">
                <div className="relative-h z-0 bg-[#222327] border-2 hover:border-white hover:border-2 border-[#222327] rounded-3xl">
                  <div className="flex items-center pl-4 pr-6 py-2">
                    <img
                      src="https://tryboosting.com/assets/images/Game-Icon-11.svg"
                      className="w-20 rounded-xl p-[6px] h-20 bg-[#0b0c10]"
                    />
                    <p className="pl-4 leading-none text-3xl font-medium">
                      COD: Mobile
                    </p>
                  </div>
                  <div className=" hover-c absolute flex justify-center items-center bg-black top-0 bottom-0 left-0 right-0 opacity-0 rounded-3xl">
                        <h2 className="text-3xl items-center font-bold text-yellow-500">Coming Soon</h2>
                  </div>
                </div>
              </div>

              <div className="lg:w-[35%] md:w-[100%] md:mt-5 lg:mt-0 xs:mt-5 xs:mr-3 md:mr-3 lg:mr-0 lg:ml-3 h-auto">
                <div className="relative-h z-0 bg-[#222327] border-2 hover:border-white hover:border-2 border-[#222327] rounded-3xl">
                  <div className="flex items-center pl-4 pr-6 py-2">
                    <img
                      src="https://tryboosting.com/assets/images/Game-Icon-12.svg"
                      className="w-20 rounded-xl p-[6px] h-20 bg-[#0b0c10]"
                    />
                    <p className="pl-4 leading-none text-3xl font-medium">
                      Team Fight Tactics
                    </p>
                  </div>
                  <div className=" hover-c absolute flex justify-center items-center bg-black top-0 bottom-0 left-0 right-0 opacity-0 rounded-3xl">
                        <h2 className="text-3xl items-center font-bold text-yellow-500">Coming Soon</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
