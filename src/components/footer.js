import React from "react";

export default function footer() {
  return (
    <>
      <footer>
        <div className="flex md:flex-col xs:flex-col lg:flex-row overflow-hidden w-[100%] h-auto bg-black justify-center pl-[2px] pr-5 pb-12 pt-10 ">
          <div className=" lg:w-[40%] md:w-full mt-6 h-auto ml-6">
            <div className="flex md:flex-row xs:flex-col mb-5">
              <div className="mr-6 -mt-3">
                <img
                  src="https://tryboosting.com/assets/images/logo.webp"
                  className="w-auto h-auto"
                />
              </div>

              <div className="flex md:justify-center items-center">
                <img
                  src="https://tryboosting.com/assets/images/facebook.svg"
                  className="w-auto h-auto md:mt-0 xs:mt-4 mr-3"
                />
                <img
                  src="https://tryboosting.com/assets/images/instagram.png"
                  className="w-8 h-auto md:mt-0 xs:mt-4 mr-3"
                />
                <img
                  className="w-8 h-auto md:mt-0 xs:mt-4 mr-3"
                  src="https://tryboosting.com/assets/images/skype.png"
                />
                <img
                  src="https://tryboosting.com/assets/images/twitter.png"
                  className="w-8 h-auto mr-3 md:mt-0 xs:mt-4"
                />
              </div>
            </div>
            <div className="flex">
              <p className="lg:w-[82.5%] md:w-full text-base font-medium">
                Try boosting is a site offering boosting services in various
                games. There are amazing features we are complying with to make
                ourselves a good option amongst others. Our online support is
                live 24/7 to answer all your queries and guide you. You can go
                through the profiles of our boosters to choose the one you like.
                We ensure to choose the best players in each game. All of our
                players are verified under strict rules. Our foremost priority
                is to ensure the satisfaction of our clients. We would love if
                you share your thoughts and feedback with us.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:pl-6 xs:pl-6 lg:pl-14 md:w-full lg:w-[20%] h-auto">
            <div className=" mb-7 text-left">
              <h2 className="text-2xl font-bold md:mt-12 xs:mt-8 lg:mt-4">Legal</h2>
            </div>
            <div>
              <p className="font-medium mb-1">Sitemap</p>
              <p className="font-medium mb-1">Blogs</p>
              <p className="font-medium mb-1">Your Rights</p>
              <p className="font-medium mb-1">Cookie Policy</p>
              <p className="font-medium mb-1">Terms and Conditions</p>
            </div>
          </div>

          <div className="flex flex-col lg:pl-5 md:pl-6 xs:pl-6 md:w-full lg:w-[17%] h-auto">
            <div className=" mb-7 text-left">
              <h2 className="text-2xl font-bold mt-4">Games</h2>
            </div>
            <div>
              <p className="font-medium mb-1">BLACK DESERT</p>
              <p className="font-medium mb-1">LEAGUE OF LEGENDS</p>
              <p className="font-medium mb-1">DOTA 2</p>
              <p className="font-medium mb-1">RANBIOW SIX SIEGE</p>
              <p className="font-medium mb-1">APEX LEGENDS</p>
              <p className="font-medium mb-1">PUBG</p>
              <p className="font-medium mb-1">VALORANT</p>
              <p className="font-medium mb-1">CSGO</p>
            </div>
          </div>

          <div className="flex flex-col relative pl-0 md:w-full lg:w-[23%] h-auto">
            <div className=" mb-7 text-left">
              <h2 className="text-2xl font-bold md:ml-0 xs:ml-6 mt-4 lg:pl-0 md:pl-6">
                Game Region & Currency
              </h2>
            </div>
            <div className="pl-6 pr-4 ">
              <div className="w-[100%] relative border-2 rounded-lg bg-[#0b0c10] p-2">
                <p className="font-bold">EU</p>
                <div className="absolute -right-3 top-1">
                <img
                  src="https://tryboosting.com/assets/images/icon-chervron-down.svg"
                  className="w-[28px] p-2 rounded-full bg-[#c9e8f7] h-[28px] "
                />
              </div>
              </div>
              

              <div className="w-[100%] mt-4 relative border-2 rounded-lg bg-[#0b0c10] p-2">
                <p className="font-bold">USD</p>
                <div className="absolute -right-3 top-1">
                  <img
                    src="https://tryboosting.com/assets/images/icon-chervron-down.svg"
                    className="w-[28px] p-2 rounded-full bg-[#c9e8f7] h-[28px] "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        
          <div className="flex flex-col pt-10 pl-7 pr-4 pb-10 bg-[#0b0c10]">
            <div className="flex flex-row justify-between">
              <div className="flex">
                <p className="font-semibold">© 2024 TryBoosting. All rights reserved.</p>
              </div>
              <div className="">
                <p className="font-semibold">ENG</p>
              </div>
            </div>
            <div className="mt-6">
              <p className="font-medium leading-sung">
                League of Legends, Valorant, Teamfight Tactics are registered
                trademarks of Riot Games, Inc. We are in no way affiliated with,
                associated with or endorsed by Riot Games, Inc. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Sed non risus.
                Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,
                ultricies sed, dolor. Cras elementum ultrices diam. Maecenas
                ligula massa, varius a Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Sed non risus. Suspendisse lectus tortor,
                dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras
                elementum ultrices diam. Maecenas ligula massa, varius a Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Sed non
                risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
                nec, ultricies sed, dolor.
              </p>
            </div>
          </div>
        
      </footer>
    </>
  );
}
