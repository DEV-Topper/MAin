import React, { FC, HTMLAttributes } from "react";
import { FaLock } from "react-icons/fa";
import { twMerge } from "tailwind-merge";

interface iCard extends HTMLAttributes<HTMLElement> {
  icon: React.ReactNode;
  lgTxt: string;
  smTxt: string;
}

const Card: FC<iCard> = ({ icon, lgTxt, smTxt, className, ...props }) => {
  return (
    <div className="">
      <div
        {...props}
        className={twMerge(
          "w-[90%] lg:w-[250px] p-7 rounded-lg border-blue-400 border bg-blue-600 shadow-lg",
          className
        )}
      >
        {icon}
        <h1 className="font-bold text-[26px] my-3">{lgTxt}</h1>
        <div>{smTxt}</div>
      </div>
    </div>
  );
};

export default Card;
