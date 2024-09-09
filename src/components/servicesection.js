import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

export default function servicesection() {
  const Ref = useRef(null);
  const SwipePrev = () => {
     if(Ref.current && Ref.current.swiper){
       Ref.current.swiper.slidePrev();
     }
  }
  const SwipeNext = () => {
    if(Ref.current && Ref.current.swiper){
      Ref.current.swiper.slideNext();
    }
  }
  return (
    <>
      <section className="z-0">
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

      <section className="mt-6">
        <div className="flex absolute right-32">
          <div onClick={SwipePrev} className="cursor-pointer">
            <img
              src="https://tryboosting.com/assets/images/left.png"
              className="w-5 h-auto cursor-pointer"
            />
          </div>
          <div className="pl-1 cursor-pointer" onClick={SwipeNext}>
            <img
              src="https://tryboosting.com/assets/images/right.png"
              className="w-5 h-auto cursor-pointer"
            />
          </div>
        </div>
      </section>

      <section>
        <Swiper
          ref={Ref}
          spaceBetween={1}
          slidesPerView={4}
          loop={true}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
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
          className="mySwiper flex items-center mt-14 md:w-[85%] sm:w-[90%]  mx-auto justify-center"
        >
          <SwiperSlide>
            <div className="flex flex-col ml-8 pl-9 pr-9 pb-3 pt-3 items-center justify-center rounded-xl bg-[#15161a] w-[247px] h-[340px]">
              <img
                src="https://tryboosting.com/assets/images/New%201-05.svg"
                className=" w-36 h-36"
              />
              <h2 className="text-2xl font-bold">VPN</h2>
              <p className="leading-tight pt-3 text-sm text-center">
                Our platform recognizes the buyer's country, and the booster
                uses this information to set up their VPNs to the same location
                before accessing the client's account.
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
                clients. No matter what game you choose, we offer cost-effective
                boosting services for all the popular games.
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
                regarding your order or anything else. Don’t hesitate to contact
                us via live chats, email, and social media.
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
                All of our boosting services benefit from our highly experienced
                team. We have the best players in all the games. We screen our
                professionals to ensure quality performance and professional
                attitude.
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
                We don’t use bots for any of our services because we know how it
                can compromise the quality of the output. Delivering quality
                work is our only aim, and we would never compromise on that.
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
      </section>
    </>
  );
}
