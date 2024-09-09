import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

export default function paymentmethod() {
  return (
    <>
      <section>
        <div className="flex flex-col mt-28 w-[95%] mx-auto items-center justify-center">
          <div className="flex">
            <h2 className="text-4xl text-center font-bold">PAYMENT METHODS WE ACCEPT</h2>
          </div>
          <div className="flex items-center justify-center w-[100%] lg:ml-[10px] md:ml-10 mt-14">          
          <Swiper
            slidesPerView={9}
            loop={true}
            breakpoints={{
              320:{
                slidesPerView:3,
              },
              640:{
                slidesPerView:4,
              },
               768:{
                slidesPerView:5.
               },
               1024:{
                slidesPerView:9,
               }
            }}
            pagination={{
              clickable: false,
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            navigation={false}
            modules={[Autoplay, Navigation]}
            className=""
          >
            {/* first */}
            <SwiperSlide>
              <div className="w-auto">
                <img
                  src="https://tryboosting.com/assets/images/PayOp-01%20copy.webp"
                  className="w-24 h-auto"
                />
              </div>
            </SwiperSlide>
            {/* second */}
            <SwiperSlide>
              <div className="w-auto">
                <img
                  src="https://tryboosting.com/assets/images/Sofort.-01%20copy.webp"
                  className="w-24 h-auto"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {/* third */}
              <div className="w-auto">
                <img
                  src="https://tryboosting.com/assets/images/Stripe-01%20copy.webp"
                  className="w-24 h-auto"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {/* fourth */}
              <div className="w-auto">
                <img
                  src="https://tryboosting.com/assets/images/UnionPay-01%20copy.webp"
                  className="w-24 h-auto"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {/* fifth */}
              <div className="w-auto">
                <img
                  src="https://tryboosting.com/assets/images/payment-2%20copy.webp"
                  className="w-24 h-auto"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {/* sixth */}
              <div className="w-auto">
                <img
                  src="https://tryboosting.com/assets/images/payment-3%20copy.webp"
                  className="w-24 h-auto"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {/* siventh */}
              <div className="w-auto">
                <img
                  src="https://tryboosting.com/assets/images/payment-4%20copy.webp"
                  className="w-24 h-auto"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {/* eight */}
              <div className="w-auto">
                <img
                  src="https://tryboosting.com/assets/images/payment-5%20copy.webp"
                  className="w-24 h-auto"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {/* ninth */}
              <div className="w-auto">
                <img
                  src="https://tryboosting.com/assets/images/payment-6%20copy.webp"
                  className="w-24 h-auto"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {/* tenth */}
              <div className="w-auto">
                <img
                  src="https://tryboosting.com/assets/images/payment-7%20copy.webp"
                  className="w-24 h-auto"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {/* eleventh */}
              <div className="w-auto">
                <img
                  src="https://tryboosting.com/assets/images/payment-9%20copy.webp"
                  className="w-24 h-auto"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {/* tweleth */}
              <div className="w-auto">
                <img
                  src="https://tryboosting.com/assets/images/Paymentwall-01%20copy.webp"
                  className="w-24 h-auto"
                />
              </div>
            </SwiperSlide>
          </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}
