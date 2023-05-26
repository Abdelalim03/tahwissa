import React from "react";
import HeroButton from "../Sections/HomePage/Hero/HeroButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="footer relative py-10 flex justify-center flex-col overflow-hidden items-center bg-[#42a7c3]  rounded-t-3xl ">
      <div className="hidden lg:block absolute w-16 h-16 bg-orange-500 left-[10%] top-16 z-20 rounded-full "></div>
      <div className="hidden lg:block absolute rainbow bg-[#42a7c3] -bottom-24 z-10 -left-24 rounded-full w-[500px] h-[500px] "></div>
      <div className="container flex flex-col gap-10 z-30  lg:w-[80%]">
        <div className="bg-[rgba(255,255,255,0.16)]  z-30 border-white border-2 rounded-lg px-8 py-12  backdrop-blur-lg  flex flex-col justify-between gap-7 items-center lg:flex-row ">
          <div className="text text-white text-center lg:text-left ">
            <p className="text-lg lg:text-2xl mb-5">
              préparez-vous à faire partie de l'exploration de
            </p>
            <h1 className="text-4xl lg:text-6xl font-bold">
              la beauté de l'Algerie
            </h1>
          </div>
          <div className="buttons lg:w-[20%] flex lg:flex-col gap-5 lg:gap-6">
            <button className="bg-[#42a7c3] text-white text-xl font-bold rounded-lg px-7 py-2 lg:px-12 lg:py-4">
              Sign In
            </button>
            <button className="text-[#42a7c3] bg-white text-xl font-bold rounded-lg px-7 py-2 lg:px-12 lg:py-4">
              Sign Up
            </button>
          </div>
        </div>
        <div className="border-b-2 pb-9 flex flex-col gap-5 items-center  lg:flex-row text-center lg:text-left justify-between border-white ">
          <div className="flex flex-col gap-4 justify-between items-center lg:items-start text-white">
            <h2 className="text-5xl text-center font-bold">Tahwissa!</h2>
            <div className="flex justify-start items-center gap-3 lg:gap-7 text-sm lg:text-lg ">
              <button>Product</button>
              <button>Contact Us</button>
              <button>About Us</button>
              <button>Privacy Policy</button>
            </div>
            
          </div>
          <div className="flex flex-col gap-4 justify-between items-center lg:items-start text-white">
          <h2 className="text-xl ">Get The App </h2>
            <div className="flex gap-4">
              <HeroButton
                title="GET IN ON"
                app="Google Play"
                img="/sections/hero/playstore.svg"
              />
              <HeroButton
                title="Downlod on the "
                app="App Store"
                img="/sections/hero/appstore.svg"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-white text-xl">&copy; {new Date().getFullYear()} Tahwissa.com</p>
          <div className="flex gap-5">
          <a href="" className="border-[1px] flex justify-center items-center w-8 h-8  rounded-full border-white">
          <FontAwesomeIcon icon={faInstagram}  style={{color: "#ffffff"}} />
          </a>
          <a href="" className="border-[1px] flex justify-center items-center w-8 h-8  rounded-full border-white">
          <FontAwesomeIcon icon={faFacebookF}  style={{color: "#ffffff"}} />
          </a>
          <a href="" className="border-[1px] flex justify-center items-center w-8 h-8  rounded-full border-white">
          <FontAwesomeIcon icon={faTwitter}  style={{color: "#ffffff"}} />
          </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
