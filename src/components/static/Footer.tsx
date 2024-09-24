import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-blue-900 h-[70px] flex justify-center ">
      <div className="w-[90%] flex justify-between items-center flex-wrap">
        {" "}
        <div className="text-white ">©theUnicon. All rights reserved</div>
        <div className="flex text-white font-bold gap-5 items-center">
          <p>Privacy Policy</p>
          <p>Terms & Condition</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
