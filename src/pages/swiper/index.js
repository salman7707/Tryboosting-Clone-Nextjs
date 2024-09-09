import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import {  Autoplay, Navigation } from 'swiper/modules';

export default () => {
  return (
    <Swiper
      spaceBetween={2}
      slidesPerView={4}
      loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={false}
        modules={[ Autoplay, Navigation]}
        className='flex items-center pt-14 w-[80%] mx-auto justify-center'
    >

      <SwiperSlide>
      <div className=" flex flex-col pl-9 pr-9 pb-3 pt-3 items-center justify-center rounded-xl bg-[#15161a] w-[247px] h-[340px]">
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
      <SwiperSlide><div className=" flex flex-col ml-8 pl-9 pr-9 pb-6 pt-6 items-center justify-center rounded-xl bg-[#15161a] w-[247px] h-[340px]">
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
      <SwiperSlide>Slide 5</SwiperSlide>
      <SwiperSlide>Slide 6</SwiperSlide>
    </Swiper>
  );
};