import React, { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import Footer from "@/components/footer";
import { signIn } from "next-auth/react"

export default function index() {
  const [handleBg, sethandleBg] = useState("");
  const [menuselect, setMenuselect] = useState(false);
  const [passwordshow, setPasswordShow] = useState(false);
  const [email, setEmail]= useState("")
  const [password, setPassword]= useState("")
  const [err,setErr] = useState("")
  const Router = useRouter()
  useEffect(() => {
    const scrollhandle = () => {
      if (window.scrollY > 20) {
        sethandleBg("bg-black backdrop-blur fixed");
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
  async function handleForm(e){
    e.preventDefault();
    try {
      const res = await signIn('credentials', {
        email,
        password,
        redirect:false,
      })
      if(res.status === 200){
        console.log("User Registered Successfully")
        window.location.href = '/'
      } else{
        setErr("Invalid Login Credentials")
      }
    } catch (error) {
      console.log("Error to Send data through login page to next auth")
    }
  }
  return (
    <div className="overflow-hidden">
      <div>
        <div
          className={` relative bg-[url('https://tryboosting.com/assets/images/Members_Area_Header-01.webp')] overflow-x-hidden flex md:w-[1175px] xs:h-[400px] md:h-[450px] lg:w-screen bg-cover bg-center bg-no-repeat lg:h-[300px]`}
          //   style={{ backgroundImage: url('https://tryboosting.com/assets/images/Members_Area_Header-01.webp') }}
        >
          <div className={` bg-black flex w-[100%] z-0 relative bg-opacity-25`}>
            <div className=" md:w-[70%] lg:w-[50%] flex-col md:mt-12 lg:mt-24 pt-11 xs:pl-4 xs:pr-0 md:pl-8">
              <h1 className="md:text-[40px] xs:text-4xl lg:pt-0 xs:pt-14 lg:text- font-sans sm:leading-normal xs:leading-none font-bold">
                LOG IN
              </h1>
              <h2 className="md:text-[1.5rem] xs:text-lg xs:font-semibold xs:mt-4 lg:text-lg md:mt-5 lg:mt-2">
                HOME/LOG IN
              </h2>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-[#0b0c10]">
        <div className="flex flex-col items-center justify-center w-[100%] pt-10 pb-10">
          <div className="w-[100%] mx-auto">
            <h2 className="text-center text-4xl font-bold">
              Login to your TryBoosting Account
            </h2>
          </div>
          <div className="border-solid border relative rounded-lg border-[#c9e8f7] pt-6 pb-4 pl-8 pr-8 w-[30%] mt-6 mx-auto bg-[#15161a]  ">
            <form className="flex flex-col" onSubmit={handleForm}>
              <label className="font-semibold mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                placeholder="Type Your Email"
                className="p-3 text-sm mb-5 rounded-md custom-bg"
              />
              <label className="font-semibold mb-2">Password</label>
              <input
                // type={`${!passwordshow ? "text" : "password"}`}
                type="text"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                placeholder="Type Your Password"
                className="p-3 text-sm mb-5 rounded-md custom-bg"
              />
              {!passwordshow ? (
                <FaRegEyeSlash
                  className="text-black text-2xl absolute top-40 right-10"
                  onClick={() => setPasswordShow(!passwordshow)}
                />
              ) : (
                <FaRegEye
                  className="text-black text-2xl absolute top-40 right-10"
                  onClick={() => setPasswordShow(!passwordshow)}
                />
              )}
              <div className="flex flex-col w-[60%] mb-4">
                <p className="text-sm">
                  Facing problem while logging in?
                </p>
                  <div className="border-b w-[100%]"></div>
              </div>
              <div className="mb-6 ">
                <p className="text-lg text-center font-semibold text-[#e84057]">{err}</p>
              </div>
              <button className="bg-[#0b0c10] py-3 border border-[#c9e8f7] rounded-md font-semibold mb-4">Log in</button>
              <div className="mb-2">
                <p className="text-base font-semibold text-center">Don't have an account already?</p>
              </div>
              <div className="w-20% mx-auto cursor-pointer" onClick={()=>Router.push("/signup")}>
                <p className="text-2xl font-normal" >Sign up now</p>
                <div className="border-b-2 mt-1 w-[100%]"></div>
              </div>
            </form>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}
