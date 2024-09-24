import React, { ButtonHTMLAttributes, FC, useState } from "react";
import { twMerge } from "tailwind-merge";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  icon?: React.ReactNode;
}

const Button: FC<IButton> = ({ text, icon, className, ...props }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      <button
        {...props}
        className={twMerge(
          "relative overflow-hidden rounded-full bg-gradient-to-r from-[#6d62aa] to-[#2ab2d2] text-white border-none shadow-md text-lg py-2 px-4 transition-colors duration-500 group",
          className
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ position: "relative", borderRadius: "40px", overflow: "hidden" }} // Only necessary styles left inline
      >
        <span
          className={`relative z-10 flex items-center gap-3 font-semibold`}
        >
          {icon && (
            <div
              className={twMerge(
                "p-2 transition-all duration-500 text-[#6d62aa] group-hover:text-[#2ab2d2] bg-white rounded-full"
              )}
            >
              {icon}
            </div>
          )}
          {text}
        </span>
        <div
          className={`absolute top-0 left-0 w-full h-full bg-gradient-to-l from-[#6d62aa] to-[#2ab2d2] transition-opacity duration-500 ${
            isHovered ? "opacity-100" : "opacity-0"
          } pointer-events-none z-0`}
        ></div>
      </button>
    </div>
  );
};

export default Button;
