import React from "react";
import Button from "../../components/reUse/Button";
import { FaLocationPin } from "react-icons/fa6";
import { HiLocationMarker } from "react-icons/hi";
import { BiPhone, BiSolidPhone } from "react-icons/bi";
import { CgMail } from "react-icons/cg";
import { RiMailFill } from "react-icons/ri";
import { TbMailFilled } from "react-icons/tb";
import woblly from "../../assets/rounded-shape1.png";

const Contact = () => {
  return (
    <div
      id="contact"
      className="w-full bg-blue-900 pt-[10vh] flex min-h-[50vh] lg:min-h-[50vh] pb-10 justify-center bg-no-repeat items-center"
      style={{ backgroundImage: `url(${woblly})` }}
    >
      <div className="w-[80%] lg:w-[60%] ">
        <div className="text-center mb-10">
          <h4 className="text-blue-300 font-semibold text-[20px]">
            CONTACT US
          </h4>
          <h2 className="text-white font-bold text-[35px]">Get In Touch!</h2>
        </div>

        <div className="w-full flex flex-wrap lg:flex-nowrap space-y-5 gap-5">
          <div className="lg:w-[60%] w-full space-y-10">
            <div className="flex gap-5 w-full">
              <input
                type="text"
                className="outline-none w-full bg-transparent border-b-2 border-blue-400 placeholder:text-blue-200"
                placeholder="Your Name *"
              />
              <input
                type="text"
                className="outline-none w-full bg-transparent border-b-2 border-blue-400 placeholder:text-blue-200"
                placeholder="Your Email*"
              />
            </div>
            <input
              type="text"
              className="outline-none w-full  bg-transparent border-b-2 border-blue-400 placeholder:text-blue-200"
              placeholder="Subject"
            />
            <textarea
              name=""
              placeholder="Your Message"
              className="border-b-2 border-blue-400 placeholder:text-blue-200 w-full bg-transparent"
            ></textarea>
            <Button text="SUBMIT" />
          </div>
          <div className="lg:w-[40%] w-full space-y-10">
            <div className="flex gap-3  items-center">
              <HiLocationMarker
                size={30}
                className="h-full border-r-2 pr-1 border-white text-white"
              />
              <div>
                <h5 className="text-blue-300 font-bold">ADDRESS</h5>
                <p className="text-white">
                  22 International Division Via G.B. Pirelli
                </p>
              </div>
            </div>

            <div className="flex gap-3  items-center">
              <BiSolidPhone
                size={30}
                className="h-full border-r-2 pr-1 border-white text-white"
              />
              <div>
                <h5 className="text-blue-300 font-bold">PHONE</h5>
                <p className="text-white">+234 807 3012</p>
              </div>
            </div>

            <div className="flex gap-3  items-center">
              <RiMailFill
                size={30}
                className="h-full border-r-2 pr-1 border-white text-white"
              />
              <div>
                <h5 className="text-blue-300 font-bold">EMAIL</h5>
                <p className="text-white text-wrap">theunicon01@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
