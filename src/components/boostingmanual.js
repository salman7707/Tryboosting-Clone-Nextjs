import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

export default function boostingmanual() {
  const Ref = useRef(null)
  const handleIndex = (index)=>{
      if(Ref.current && Ref.current.swiper){
        Ref.current.swiper.slideTo(index)
      }
  }
  const [activeState, setActiveState] = useState()
  const handleState = (swiper) => {
    setActiveState(swiper.realIndex)
  }
  const handleEnter = () => {
    if(Ref.current && Ref.current.swiper){
       Ref.current.swiper.autoplay.stop();
    }
  }
  const  handleLeave = ()=>{
    if(Ref.current && Ref.current.swiper){
       Ref.current.swiper.autoplay.start();
    }
  }
  return (
    <>
      <section>
        <div className="flex flex-col items-center justify-center mt-24 w-[95%] mx-auto">
          <div className="flex flex-col">
            <h2 className="md:text-4xl font-bold xs:text-3xl">BOOSTING MANUAL</h2>
            <p className="font-normal mt-3 text-center text-sm">
              Our Trouble-free Boosting Process
            </p>
          </div>

          <div className="flex justify-center mx-auto mt-20 w-[100%]">
            <div className="flex flex-col justify-center w-[33.3%] ">
              <div className='flex justify-center'>
                <img
                  src="https://tryboosting.com/assets/images/Step_1-01.png"
                  className="w-10 h-10 "
                />
                <h2 onClick={()=>handleIndex(0)} className={`mb-5 cursor-pointer text-2xl pl-2 xs:hidden md:block font-semibold ${activeState === 0 ? "text-[#66FCF1]" : "text-white "} `}>Select Service</h2>
              </div>
              <div className='mb-10'>
                {activeState === 0 ? (
                  <div className=" w-full ">
                    <div class="border-b-2 border-white animate-borderscroll"></div>
                  </div>
                ):(
                  <div className=" w-full transition-all ease-in ">
                  <div class="border-b-2 border-white w-full"></div>
                </div>
                )
                } 
              </div>
            </div>

            <div className="flex flex-col justify-center w-[33.3%]">
              <div className='flex justify-center'>
                <img
                  src="https://tryboosting.com/assets/images/Step_2-01.png"
                  className="w-10 h-10 "
                />
                <h2 onClick={()=>handleIndex(1)} className={` cursor-pointer ${activeState === 1 ? "text-[#66FCF1]" : "text-white"} lg:text-2xl md:text-xl pl-2 font-bold md:block xs:hidden mb-5`}>
                  Complete Payment
                </h2>
              </div>
              <div className=' lg:mt-0 md:mt-1 mb-10'>
                {activeState === 1 ? (
                  <div className=" w-full ">
                    <div class="border-b-2 border-white animate-borderscroll"></div>
                  </div>
                ):( activeState === 2 ? (
                  <div className=" w-full ">
                  <div class="border-b-2 border-white w-full"></div>
                </div>
                ):""
                )
                } 
              </div>
              
            </div>

            <div className="flex flex-col justify-center w-[33.3%]">
              <div className='flex justify-center'>
                <img
                  src="https://tryboosting.com/assets/images/Step_3-01.png"
                  className="w-10 h-10"
                />
                <h2 onClick={()=>handleIndex(2)} className={`cursor-pointer mb-5 text-2xl ${activeState === 2 ? "text-[#66FCF1]" : "text-white"} font-semibold xs:hidden md:block`}>Boost Now</h2>
              </div>
              <div className=' mb-10'>
                {activeState === 2 && (
                  <div className="w-full ">
                    <div class="border-b-2 border-white animate-borderscroll"></div>
                  </div>
                )
                }
              </div>
            </div>
          </div>

          <Swiper
            autoplay={{
              delay: 6650,
              disableOnInteraction: false,
            }}
            ref={Ref}
            loop={true}
            pagination={{
              clickable: false,
            }}
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
            onSlideChange={handleState}
            effect={"fade"}
            fadeEffect={{ crossFade: true }}
            navigation={false}
            modules={[Autoplay, Navigation]}
            className="flex md:flex-row xs:flex xs:flex-col items-center mt-10 w-[97%]"
          >
            <SwiperSlide>
              <div className="flex md:flex-row xs:flex-col md:ml-0 xs:ml-5">
                <div className="md:w-[50%]">
                  <img
                    src="https://tryboosting.com/assets/images/Service_Selection_Neue-01.png"
                    className=""
                  />
                </div>
                <div className="flex flex-col md:pl-12 md:w-[50%] xs:w-full xs:mx-auto ">
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
              <div className="flex md:flex-row xs:flex-col md:ml-0 xs:ml-5">
                <div className="md:w-[50%]">
                  <img
                    src="https://tryboosting.com/assets/images/Payment_Neue-01.png"
                    className=""
                  />
                </div>
                <div className="flex flex-col md:pl-12 md:w-[50%] xs:w-full xs:mx-auto">
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
              <div className="flex md:flex-row xs:flex-col md:ml-0 xs:ml-5">
                <div className="md:w-[50%]">
                  <img
                    src="https://tryboosting.com/assets/images/Boost_-_Rank_Up_Neue-01.png"
                    className=""
                  />
                </div>
                <div className="flex flex-col md:pl-12 md:w-[50%] xs:w-full xs:mx-auto">
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
    </>
  )
}
