import { useState } from "react";
import img3 from "../../assets/Dog.png";
import img4 from "../../assets/Dog.png";
import img5 from "../../assets/Dog.png";
import img6 from "../../assets/Dog.png";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
import img14 from "../../assets/Dog.png";
import { IoSearchSharp } from "react-icons/io5";
import { FaBell } from "react-icons/fa6";
import { IoMdArrowDropdown, IoMdStar } from "react-icons/io";
import { PiArrowUpRightFill, PiArrowDownLeftFill } from "react-icons/pi";
import { BsFillGridFill } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { RiHeartPulseFill } from "react-icons/ri";
import { useNavigate, useLocation } from "react-router-dom";

import { SiMastercomfig } from "react-icons/si";
import { ScaleLoader } from "react-spinners";
import { BsSend } from "react-icons/bs";
import { CiReceipt } from "react-icons/ci";

const Mobilehome = () => {
  const [show, setShow] = useState(false);

  const Toggle = () => {
    setShow(!show);
  };
  // const [eye, setEye] = useState<boolean>(false);

  // const onEye = () => {
  //   setEye(!eye);
  // };

  const location = useLocation();
  const navigate = useNavigate();
  const active = location?.pathname;
  return (
    <div className="w-[100%] flex flex-col">
      {/* <div className="flex w-[100%] p-[20px] fixed sm:fixed justify-between z-[80] sm:flex-col sm:h-[130px] h-[70px] border-b border-[#F1F1F1] bg-white">
        <div className="w-[100%] flex justify-between sm:items-center">
          <div className="flex items-center">
            <div
              onClick={Toggle}
              className="text-[25px] sm:text-[20px] text-[#54657E] mr-[12px] cursor-pointer"
            >
              <FiMenu />
            </div>
            <div className="flex items-center">
              <div className="text-[black] font-black flex items-center text-[23px]">
                {" "}
                <div className="mr-2">
                  <SiMastercomfig />
                </div>
                AJMoney
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <div className="hidden items-center w-[270px] h-[30px] bg-[#4f41bc1a] rounded-full overflow-hidden md:flex">
              <input
                type="text"
                placeholder="Search"
                className="flex-1 h-[100%] outline-none pl-[13px] pr-[10px] bg-transparent text-[13px] placeholder:text-primary"
              />
              <div className="w-[35px] h-[100%] flex justify-center items-center text-primary">
                <IoSearchSharp />
              </div>
            </div>

            <div className="text-primary ml-[20px] text-[22px] relative cursor-pointer hidden sm:flex md:flex">
              <FaBell />
              <div className="w-[10px] h-[10px] rounded-full bg-[#EA8F95] absolute right-[0px] top-[3px]"></div>
            </div>

            <div className="flex items-center ml-[20px] cursor-pointer mb-[5px]">
              <div className="w-[35px] h-[35px] rounded-full sm:h-[28px] sm:w-[28px]">
                <img
                  src={img3}
                  alt=""
                  className="w-[100%] h-[100%] object-cover"
                />
              </div>
              <p className="ml-[7px] text-[14px] text-[#54657E] sm:hidden">
                Danielle Francis
              </p>
              <div className="text-[#54657E] ml-[15px]">
                <IoMdArrowDropdown />
              </div>
            </div>
          </div>
        </div>
        <div className="hidden sm:w-[100%] items-center w-[270px] h-[30px] sm:h-[35px] bg-[#4f41bc1a] rounded-full overflow-hidden sm:flex md:hidden">
          <input
            type="text"
            placeholder="Search"
            className="flex-1 h-[100%] outline-none pl-[13px] pr-[10px] bg-transparent text-[13px] placeholder:text-primary"
          />
          <div className="w-[35px] h-[100%] flex justify-center items-center text-primary">
            <IoSearchSharp />
          </div>
        </div>
      </div> */}

      <div className="w-[100%] flex flex-col p-[20px] mt-[90px] sm:mt-[140px]">
        <h2 className="text-[22px] font-[600] sm:text-[20px]">
          Hello Danielle
        </h2>
        <p className="text-[15px]">daniellecampbell@gmail.com</p>
      </div>
      <div className="h-[1px] w-full bg-[#F1F1F1] mt-[20px]"></div>

      <div className="w-[100%] flex flex-col p-[20px] relative">
        <div className=" flex justify-between">
          <h4 className="text-[14px] font-[600] ">Top Transactions</h4>
          <h4 className="text-[14px] font-[600] underline">View All</h4>
        </div>

        <div className="w-[100%] flex items-center h-[40px] mt-[10px] border border-[#EBE8FF] rounded-lg pl-[10px] pr-[10px] justify-between mb-[15px]">
          <div className="flex items-center w-[165px]">
            <img src={img4} alt="" className="h-[27px]" />
            <p className="text-[#797D8C] text-[14px] ml-[22px] sm:ml-[5px]">
              Nicholas Patrick
            </p>
          </div>

          <p className="text-[14px] font-[700] w-[70px] sm:ml-[-25px] sm:text-[13px] sm:mt-[3px]">
            # 2540.58
          </p>

          <p className="text-[14px] text-[#F7941D] w-[50px]">Credit</p>

          <div className="text-primary cursor-pointer w-[35px] sm:w-[15px] flex justify-end">
            <HiOutlineDotsVertical />
          </div>
        </div>

        <div className="w-[100%] flex items-center h-[40px] border border-[#EBE8FF] rounded-lg pl-[10px] pr-[10px] justify-between mb-[15px]">
          <div className="flex items-center w-[165px]">
            <img src={img5} alt="" className="h-[27px]" />
            <p className="text-[#797D8C] text-[14px] ml-[22px] sm:ml-[5px]">
              Cordell Edwards
            </p>
          </div>

          <p className="text-[14px] font-[700] w-[70px] sm:ml-[-25px] sm:text-[13px] sm:mt-[3px]">
            # 2540.58
          </p>

          <p className="text-[14px] text-[#43BE83] w-[50px]">Debit</p>

          <div className="text-primary cursor-pointer w-[35px] sm:w-[15px] flex justify-end">
            <HiOutlineDotsVertical />
          </div>
        </div>

        <div className="w-[100%] flex items-center h-[40px] border border-[#EBE8FF] rounded-lg pl-[10px] pr-[10px] justify-between mb-[15px]">
          <div className="flex items-center w-[165px]">
            <img src={img6} alt="" className="h-[27px]" />
            <p className="text-[#797D8C] text-[14px] ml-[22px] sm:ml-[5px]">
              Derrick Spencer
            </p>
          </div>

          <p className="text-[14px] font-[700] w-[70px] sm:ml-[-25px] sm:text-[13px] sm:mt-[3px]">
            # 2540.58
          </p>

          <p className="text-[14px] text-[#43BE83] w-[50px]">Debit</p>

          <div className="text-primary cursor-pointer w-[35px] sm:w-[15px] flex justify-end">
            <HiOutlineDotsVertical />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between mt-[5px] md:flex-wrap sm:flex-wrap pr-[20px] pl-[20px]">
        <div className="w-[247px] md:w-[49%] sm:w-[100%] md:mb-[12px] sm:mb-[12px] p-[15px] relative border border-[#D3CBFB] rounded-lg">
          <p className="text-[12px] text-[#797D8C]">Total Expense</p>
          <h3 className="font-[700] text-[19px]">
            {" "}
            {/* {eye ? <div>₦ 20,200.00</div> : <div>₦ *******</div>} */}
          </h3>
          <div className="w-[100%] flex items-center justify-between mt-[5px]">
            <div className="flex items-center">
              <div className="w-[19px] h-[19px] bg-[#B5FFCE] rounded-full flex justify-center items-center text-[13px] text-[#43BE83]">
                <PiArrowUpRightFill />
              </div>
              <p className="text-[13px] text-[#43BE83] font-[500] ml-[5px]">
                +15%
              </p>
            </div>
            <ScaleLoader color="#40196D" height={25} />
          </div>
          <div className="absolute right-[17px] top-[20px]">
            {/* {!eye ? (
              <FaEyeSlash className="text-[20px] hover:cursor-pointer" />
            ) : (
              <FaEye className="text-[20px] hover:cursor-pointer" />
            )} */}
          </div>
        </div>

        <div className="w-[247px] md:w-[49%] sm:w-[100%] md:mb-[12px] sm:mb-[12px] p-[15px] relative border border-[#D3CBFB] rounded-lg">
          <p className="text-[12px] text-[#797D8C]">Total Profit</p>
          <h3 className="font-[700] text-[19px]">$2,435k</h3>
          <div className="w-[100%] flex items-center justify-between mt-[5px]">
            <div className="flex items-center">
              <div className="w-[19px] h-[19px] bg-[#FFD9D7] rounded-full flex justify-center items-center text-[13px] text-[#EA8F95]">
                <PiArrowDownLeftFill />
              </div>
              <p className="text-[13px] text-[#EA8F95] font-[500] ml-[5px]">
                +15%
              </p>
            </div>
            <p className="text-primary underline text-[12px] cursor-pointer">
              View Report
            </p>
          </div>
          <div className="absolute right-[17px] top-[22px]">
            <svg
              width="18"
              height="14"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 4L15.5 2.5L16 6"
                stroke="#04103B"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M1 1V17H17"
                stroke="#04103B"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M4 13.5L7.5 8.5L11 10L15 3.5"
                stroke="#04103B"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>

        <div className="w-[247px] md:w-[49%] sm:w-[100%] md:mb-[12px] sm:mb-[12px] p-[15px] relative border border-[#D3CBFB] rounded-lg">
          <p className="text-[12px] text-[#797D8C]">Total No. of Claim</p>
          <h3 className="font-[700] text-[19px]">3.5M</h3>
          <div className="w-[100%] flex items-center justify-between mt-[5px]">
            <div className="flex items-center">
              <div className="w-[19px] h-[19px] bg-[#B5FFCE] rounded-full flex justify-center items-center text-[13px] text-[#43BE83]">
                <PiArrowUpRightFill />
              </div>
              <p className="text-[13px] text-[#43BE83] font-[500] ml-[5px]">
                +15%
              </p>
            </div>
            <p className="text-primary underline text-[12px] cursor-pointer">
              View Report
            </p>
          </div>
          <div className="absolute right-[17px] top-[22px]">
            <svg
              width="17"
              height="15"
              viewBox="0 0 17 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15.7483 3C15.7483 1.89543 14.8529 1 13.7483 1H3C1.89543 1 1 1.89543 1 3V18.667C1 19.7716 1.89543 20.667 3 20.667H13.7483C14.8529 20.667 15.7483 19.7716 15.7483 18.667V3Z"
                stroke="#04103B"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M4.12885 5.04236H8.15164"
                stroke="#04103B"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M4.12885 9.51221H12.1744"
                stroke="#04103B"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M4.12885 14.8759H12.1744"
                stroke="#04103B"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>

        <div className="w-[247px] md:w-[49%] sm:w-[100%] md:mb-[12px] sm:mb-[12px] p-[15px] relative border border-[#D3CBFB] rounded-lg">
          <p className="text-[12px] text-[#797D8C]">New Customer</p>
          <h3 className="font-[700] text-[19px]">43.5k</h3>
          <div className="w-[100%] flex items-center justify-between mt-[5px]">
            <div className="flex items-center">
              <div className="w-[19px] h-[19px] bg-[#B5FFCE] rounded-full flex justify-center items-center text-[13px] text-[#43BE83]">
                <PiArrowUpRightFill />
              </div>
              <p className="text-[13px] text-[#43BE83] font-[500] ml-[5px]">
                +10%
              </p>
            </div>
            <p className="text-primary underline text-[12px] cursor-pointer">
              View Report
            </p>
          </div>
          <div className="absolute right-[17px] top-[18px]">
            <svg
              width="45"
              height="30"
              viewBox="0 0 45 45"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="22.5" cy="22.5" r="21.5" stroke="white" />
              <path
                d="M12 33C12 30.8783 12.8429 28.8434 14.3431 27.3431C15.8434 25.8429 17.8783 25 20 25C22.1217 25 24.1566 25.8429 25.6569 27.3431C27.1571 28.8434 28 30.8783 28 33H12ZM20 24C16.685 24 14 21.315 14 18C14 14.685 16.685 12 20 12C23.315 12 26 14.685 26 18C26 21.315 23.315 24 20 24Z"
                stroke="#04103B"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M27 13C29.4862 13 31.5 15.4293 31.5 18.4286C31.5 21.4279 29.4862 23.7619 27 23.7619C28.5913 23.7619 30.1174 24.5245 31.2426 25.8819C32.3679 27.2393 33 29.0803 33 31H30.4286"
                stroke="#04103B"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="w-[100%] flex justify-between gap-[20px] p-[20px] mt-[10px] sm:flex-wrap">
        {/* <Charts />

        <Card /> */}
      </div>

      <div
        className={`fixed left-0 top-[70px] sm:top-[130px] bg-[rgba(0,0,0,0.5)] sm:z-[100] w-[100%] h-[100vh] ${
          show ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div
          className={`w-[30%] sm:w-[55%] flex flex-col p-[15px] h-full bg-[#fff] fixed  duration-500 ease-out left-0 transition-transform transform ${
            show ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div
            onClick={() => {
              navigate("/");
            }}
            className={`w-[100%] mt-[30px] sm:mt-[5px] min-h-[45px] flex justify-start  items-center pl-[20px] mb-[5px] rounded-lg cursor-pointer 
          ${active === "/" ? "bg-primary text-white" : "text-primary"}`}
          >
            <div className="text-[20px]  font-bold">
              <BsFillGridFill />
            </div>
            <div className="font-medium  text-[15px] ml-[20px] ">Home</div>
          </div>

          <div className="w-[100%] flex-col">
            <div
              onClick={() => {
                navigate("/send");
              }}
              className={`w-full min-h-[40px] flex justify-start rounded-lg items-center pl-[20px] mb-[5px] cursor-pointer ${
                active === "/send" ? "bg-primary text-white" : "text-primary"
              }`}
            >
              <div className="text-[20px]  font-bold">
                <BsSend />
              </div>
              <div className="font-medium  text-[15px] ml-[20px] ">Send</div>
            </div>
          </div>

          <div className="w-[100%] flex-col">
            <div
              onClick={() => {
                navigate("/pay");
              }}
              className={`w-full min-h-[40px] flex justify-start rounded-lg items-center pl-[20px] mb-[5px] cursor-pointer ${
                active === "/pay" ? "bg-primary text-white" : "text-primary"
              }`}
            >
              <div className="text-[20px]  font-bold">
                <CiReceipt />
              </div>
              <div className="font-medium  text-[15px] ml-[20px] ">Pay</div>
            </div>
          </div>

          <div className="w-[100%] flex-col">
            <div
              onClick={() => {
                navigate("/budget");
              }}
              className={`w-full min-h-[40px] flex justify-start rounded-lg items-center pl-[20px] mb-[5px] cursor-pointer ${
                active === "/budget" ? "bg-primary text-white" : "text-primary"
              }`}
            >
              <div className="text-[22px]  font-bold">
                <IoMdStar />
              </div>
              <div className="font-medium  text-[15px] ml-[20px] ">Budget</div>
            </div>
          </div>

          <div className="w-[100%] flex-col">
            <div
              onClick={() => {
                navigate("/card");
              }}
              className={`w-full min-h-[40px] flex justify-start rounded-lg items-center pl-[20px] mb-[5px] cursor-pointer ${
                active === "/card" ? "bg-primary text-white" : "text-primary"
              }`}
            >
              <div className="text-[22px]  font-bold">
                <RiHeartPulseFill />
              </div>
              <div className="font-medium  text-[15px] ml-[20px] ">Card</div>
            </div>
          </div>
          <div className="w-[100%] flex-col">
            <div
              onClick={() => {
                navigate("/account");
              }}
              className={`w-full min-h-[40px] flex justify-start rounded-lg items-center pl-[20px] mb-[5px] cursor-pointer ${
                active === "/account" ? "bg-primary text-white" : "text-primary"
              }`}
            >
              <div className="text-[22px]  font-bold">
                <RiHeartPulseFill />
              </div>
              <div className="font-medium  text-[15px] ml-[20px] ">Account</div>
            </div>
          </div>

          <div className="w-[160px] bg-primary ml-[20px] sm:ml-[5px] pl-[25px] pr-[25px] pt-[20px] pb-[20px] mt-[45px] sm:mt-[20px] flex flex-col items-center justify-center rounded-lg">
            <div className="w-[100%]">
              <img src={img14} alt="" className="h-[70px]" />
            </div>
            <h3 className="text-[13px] font-[500] mt-[5px] text-white">
              Want to upgrade
            </h3>
            <button className="w-[100%] bg-white rounded-full h-[35px] flex justify-center items-center text-primary text-[13px] mt-[13px]">
              Upgrade now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Mobilehome;