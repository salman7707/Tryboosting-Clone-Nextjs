import React, { useState } from 'react'
import { PiCaretDownBold } from "react-icons/pi";

export default function faqs() {
  const [dropbtn, setDropbtn] = useState(false);
  const [dropbtn2, setDropbtn2] = useState(false);
  const [dropbtn3, setDropbtn3] = useState(false);
  const [dropbtn4, setDropbtn4] = useState(false);
  const [dropbtn5, setDropbtn5] = useState(false);
  const [dropbtn6, setDropbtn6] = useState(false);
  return (
    <>
      <section>
          <div className="flex flex-col items-center w-[90%] mx-auto mt-16 justify-center">
            <div className="flex">
              <p className="text-4xl font-bold">FAQs</p>
            </div>

            <div className="flex mt-8 flex-col">
              <div
                onClick={() => setDropbtn(!dropbtn)}
                className="flex flex-col justify-between bg-black border border-white rounded-md xs:w-[280px] xs:mx-auto md:w-[650px] py-3"
              >
                <div className="flex justify-between w-auto">
                  <p className="pl-4 text-base font-semibold">
                    How can I ensure you won’t spoil or steal my data?
                  </p>
                  <div className="pr-4 ">
                    <PiCaretDownBold className="text-xl" />
                  </div>
                </div>
                <div className="scroll-smooth">
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
                className="flex mt-5 flex-col justify-between bg-black border border-white rounded-md xs:w-[280px] xs:mx-auto md:w-[650px] py-3"
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
                className="flex mt-5 flex-col justify-between bg-black border border-white rounded-md xs:w-[280px] xs:mx-auto md:w-[650px] py-3"
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
                className="flex mt-5 flex-col justify-between bg-black border border-white rounded-md xs:w-[280px] xs:mx-auto md:w-[650px] py-3"
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
                className="flex mt-5 flex-col justify-between bg-black border border-white rounded-md xs:w-[280px] xs:mx-auto md:w-[650px] py-3"
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
                className="flex mt-5 flex-col justify-between bg-black border border-white rounded-md xs:w-[280px] xs:mx-auto md:w-[650px] py-3"
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
    </>
  )
}
