import { FaCoins, FaExchangeAlt } from "react-icons/fa";
import { FaWallet } from "react-icons/fa6";
import pic from "../../assets/react.svg";

import {
	MdDashboard,
	MdTransferWithinAStation,
} from "react-icons/md";
import { NavLink } from "react-router-dom";
import { MdSettings } from "react-icons/md";

import { MdReport } from "react-icons/md";
import { IoNewspaperOutline } from "react-icons/io5";

const Sider = () => {
	return (
		<div className="overflow-y-auto min-h-[100vh] w-full border-r bg-[#0046B8] text-white flex flex-col ">
			<div className="w-full flex px-2 mt-6 ">
				{/* <div className="ml-2">
					{/* TODO: Add tooltip */}
				<div className="break-words font-bold"></div>
				<p className="break-words font-medium text-slate-400 text-[14px] mt-2"></p>
				<p className="break-words font-medium text-slate-400  text-[14px] -mt-1"></p>
				{/* </div> */}
			</div>

			<div className="mt-10 px-2 flex flex-col h-[90%]">
				<NavLink
					to="/dashboard"
					className={({ isActive }) =>
						isActive
							? "duration-500 transition-all p-2 rounded-sm bg-white text-[#0046B8] cursor-pointer font-medium my-[3px] flex items-center justify-between "
							: "duration-500  transition-all p-2 rounded-sm hover:bg-blue-200 hover:text-black cursor-pointer font-medium my-[3px] flex items-center justify-between "
					}
				>
					Dashboard
					<MdDashboard />
				</NavLink>
				<NavLink
					to="/wallet"
					className={({ isActive }) =>
						isActive
							? "duration-500 transition-all p-2 rounded-sm bg-white text-[#0046B8] cursor-pointer font-medium my-[3px] flex items-center justify-between "
							: "duration-500 transition-all p-2 rounded-sm hover:bg-blue-200  hover:text-black cursor-pointer font-medium my-[3px] flex items-center justify-between mt-2"
					}
				>
					My Wallet
					<FaWallet />
				</NavLink>
				<NavLink
					to="/transaction"
					className={({ isActive }) =>
						isActive
							? "duration-500 transition-all p-2 rounded-sm bg-blue-200  text-black cursor-pointer font-medium my-[3px] flex items-center justify-between "
							: "duration-500 transition-all p-2 rounded-sm hover:bg-blue-200  hover:text-black cursor-pointer font-medium my-[3px] flex items-center justify-between mt-2"
					}
				>
					Transaction
					<MdTransferWithinAStation />
				</NavLink>
				<NavLink
					to="/crypto"
					className={({ isActive }) =>
						isActive
							? "duration-500 transition-all p-2 rounded-sm bg-white text-[#0046B8] cursor-pointer font-medium my-[3px] flex items-center justify-between "
							: "duration-500 transition-all p-2 rounded-sm hover:bg-blue-200  hover:text-black cursor-pointer font-medium my-[3px] flex items-center justify-between mt-2"
					}
				>
					Crypto
					<FaCoins />
				</NavLink>

				<NavLink
					to="/exchange"
					className={({ isActive }) =>
						isActive
							? "duration-500 transition-all p-2 rounded-sm bg-white text-[#0046B8] cursor-pointer font-medium my-[3px] flex items-center justify-between "
							: "duration-500 transition-all p-2 rounded-sm hover:bg-blue-200  hover:text-black cursor-pointer font-medium my-[3px] flex items-center justify-between mt-2"
					}
				>
					Exchange
					<FaExchangeAlt />
				</NavLink>
				<NavLink
					to="/complains"
					className={({ isActive }) =>
						isActive
							? "duration-500 transition-all p-2 rounded-sm bg-white text-[#0046B8] cursor-pointer font-medium my-[3px] flex items-center justify-between "
							: "duration-500 transition-all p-2 rounded-sm hover:bg-blue-200  hover:text-black cursor-pointer font-medium my-[3px] flex items-center justify-between mt-2"
					}
				>
					Complains
					<MdReport />
				</NavLink>
				<NavLink
					to="/news"
					className={({ isActive }) =>
						isActive
							? "duration-500 transition-all p-2 rounded-sm bg-white text-[#0046B8] cursor-pointer font-medium my-[3px] flex items-center justify-between "
							: "duration-500 transition-all p-2 rounded-sm hover:bg-blue-200  hover:text-black cursor-pointer font-medium my-[3px] flex items-center justify-between mt-2"
					}
				>
					News
					<IoNewspaperOutline />
				</NavLink>

				<div className="flex-1" />

				<NavLink
					to="/settings"
					className={({ isActive }) =>
						isActive
							? "duration-500 transition-all p-2 rounded-sm bg-blue-200 text-black cursor-pointer font-medium my-[4px] flex items-center justify-between "
							: "duration-500 transition-all p-2 rounded-sm  flex items-center justify-between hover:bg-blue-200 hover:text-black cursor-pointer font-medium my-[4px]"
					}
				>
					Settings
					<MdSettings />
				</NavLink>
			</div>
		</div>
	);
};

export default Sider;
