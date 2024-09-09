import React, { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import Footer from "@/components/footer";

export default function index() {
  const [handleBg, sethandleBg] = useState("");
  const [menuselect, setMenuselect] = useState(false);
  const [passwordshow, setPasswordShow] = useState(false);
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [err,setErr] = useState("")
  const Router = useRouter();
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
   async function handleform(e){
     e.preventDefault()
     if( name === "" || email === "" || password === ""){
        alert("Please Give complete Data")
        return ;
     }
     
     try {
        const UserRes = await fetch("/api/userExists",{
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify({email})
        })
 
        const {user}= await UserRes.json()
        
        if(user){
          setErr("User Already Exists.")
           return ;
        }

        const res = await fetch('/api/register',{
         method:"POST",
         headers:{
            "Content-Type":"application/json"
         },
         body:JSON.stringify({name,email,password})   
        });
        console.log("data fetching successfully")
        if(res.status === 200){
            console.log("Data Send or user register Successfully")
            window.location.href = "/login"
        } else{
            const data = await req.json()
            alert(data.message)
        }

     } catch (error) {
        console.log("Error sending Data to signup to register api",error)
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
                Sign Up
              </h1>
              <h2 className="md:text-[1.5rem] xs:text-lg xs:font-semibold xs:mt-4 lg:text-lg md:mt-5 lg:mt-2">
                LOG IN / SIGN UP
              </h2>
            </div>
          </div>
        </div>

        <header
          className={`fixed top-0 bg-opacity-50 right-0 left-0 z-50 pt-[10px] lg:pb-2 md:pb-[60px] xs:pb-[45px] flex w-auto m-0 items-center justify-between ${handleBg} md:flex-col lg:flex-row`}
        >
          <div className="md:pl-8 md:flex xs:flex md:justify-between md:items-center">
            <span className="cursor-pointer">
              <img
                src="https://tryboosting.com/assets/images/logo.webp"
                className="md:w-auto xs:absolute xs:w-48 xs:top-1 xs:left-[18px] md:absolute md:top-0 md:right-0 md:left-0 md:pl-6 md:pt-3 "
              />
            </span>
            <span
              onClick={menu}
              className={`cursor-pointer lg:relative xs:absolute xs:top-1 xs:right-0 md:absolute md:top-4 md:right-2 text-[40px] lg:hidden`}
            >
              {menuselect ? <IoClose /> : <IoMenu />}
            </span>
          </div>
          <nav>
            <ul
              className={`flex lg:flex-row lg:bg-transparent md:pb-20 lg:pb-2 lg:items-center lg:relative lg:top-0 lg:left-0 lg:right-0 md:absolute xs:absolute ${
                menuselect
                  ? "md:top-0 xs:top-0 xs:w-[60%] md:w-[33%] xs:h-[500px] md:h-[500px] lg:h-auto lg:w-auto transition-all ease-in-out"
                  : "md:top-[-400px] xs:top-[-400px]"
              } md:right-0 md:left-0 xs:right-0 xs:left-0 xs:bg-[#15161a] xs:flex-col md:bg-[#15161a] md:flex-col lg:my-0 pr-8`}
            >
              {menuselect ? (
                <li>
                  <div>
                    <div className="ml-2 w-[180px]">
                      <img
                        src="https://tryboosting.com/assets/images/logo.webp"
                        className="lg:w-0 xs:pt-2 md:pl-6 md:pt-3 md:pb-6"
                      />
                    </div>
                    <span className="md:absolute xs:absolute lg:mt-0 lg:pt-0 xs:pl-48 xs:border-r xs:top-0 xs:h-[450px] lg:relative md:pl-[252px] lg:pl-0 md:top-0 md:border-r lg:border-[0px] lg:h-0 md:h-[500px]"></span>
                  </div>
                </li>
              ) : (
                ""
              )}
              <li
                className={` md:pb-3 lg:pb-0 lg:pt-0 xs:pt-5 md:text-lg xs:text-xl active:font-bold hover:text-slate-300 ml-8`}
              >
                HOME
                {menuselect ? (
                  <div className="md:border-b md:pt-2 md:w-[252px] xs:pt-2 xs:border-b lg:w-[0px] lg:border-[0px] xs:relative xs:top-0 md:relative md:top-0 xs:-left-8 xs:w-[193px] md:-left-8"></div>
                ) : (
                  ""
                )}{" "}
              </li>
              <li className="text-lg md:pb-3 lg:pb-0 lg:pt-0 xs:pt-5 active:font-bold hover:text-slate-300 ml-8">
                BOOSTERS
                {menuselect ? (
                  <div className="md:border-b md:pt-2 md:w-[252px] xs:border-b xs:pt-2 lg:w-[0px] xs:relative lg:border-[0px] md:relative md:top-0 xs:-left-8 xs:w-[193px] md:-left-8"></div>
                ) : (
                  ""
                )}
              </li>
              <li className="lg:text-lg xs:text-[16.4px] lg:pt-0 active:font-bold md:pb-3  xs:pt-5 lg:pb-0 hover:text-slate-300 ml-8">
                LOYALTY POINTS
                {menuselect ? (
                  <div className="md:border-b md:pt-2 md:w-[252px] xs:border-b xs:pt-2 lg:w-[0px] xs:relative lg:border-[0px] md:relative md:top-0 xs:-left-8 xs:w-[193px] md:-left-8"></div>
                ) : (
                  ""
                )}{" "}
              </li>
              <li className="text-lg active:font-bold md:pb-3 lg:pt-0 xs:pt-5 lg:pb-0 hover:text-slate-300 ml-8">
                SUPPORT
                {menuselect ? (
                  <div className="md:border-b xs:pt-5 md:pt-2 md:w-[252px] lg:w-[0px] lg:border-[0px] md:relative md:top-0 md:-left-8"></div>
                ) : (
                  ""
                )}{" "}
              </li>
              <button className="md:text-lg xs:text-xs  hover:text-slate-300  ml-8 px-5 font-bold py-1 rounded-lg border-2 border-[#c9e8f7] bg-gray-950">
                MEMBER AREA
              </button>
            </ul>
          </nav>
        </header>
      </div>

      <section className="bg-[#0b0c10]">
        <div className="flex flex-col items-center justify-center w-[100%] pt-10 pb-10">
          <div className="w-[100%] mx-auto">
            <h2 className="text-center text-4xl font-bold">
              Sign Up To Create TryBoosting Account
            </h2>
          </div>
          <div className="border-solid border relative rounded-lg border-[#c9e8f7] pt-6 pb-4 pl-8 pr-8 w-[30%] mt-6 mx-auto bg-[#15161a]  ">
            <form className="flex flex-col" onSubmit={handleform}>
              <label className="font-semibold mb-2">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e)=>setName(e.target.value)}
                placeholder="Type Your Name"
                className="p-3 text-sm mb-5 rounded-md custom-bg"
              />
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
                type={`${!passwordshow ? "text" : "password"}`}
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                placeholder="Type Your Password"
                className="p-3 text-sm mb-5 rounded-md custom-bg"
              />
              {!passwordshow ? (
                <FaRegEyeSlash
                  className="text-black text-2xl absolute top-64 right-10"
                  onClick={() => setPasswordShow(!passwordshow)}
                />
              ) : (
                <FaRegEye
                  className="text-black text-2xl absolute top-64 right-10"
                  onClick={() => setPasswordShow(!passwordshow)}
                />
              )}
              <div className="flex flex-col w-[60%] mb-8">
                <p className="text-sm">Facing problem while logging in?</p>
                <div className="border-b w-[100%]"></div>
              </div>
              <div className="mb-6 ">
                <p className="text-lg text-center font-semibold text-[#e84057]">{err}</p>
              </div>
              <button className="bg-[#0b0c10] py-3 border border-[#c9e8f7] rounded-md font-semibold mb-4">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
