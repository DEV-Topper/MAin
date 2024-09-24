import {
	FaCoins,
	FaExchangeAlt,
	FaRegBell,
	FaWallet,
} from "react-icons/fa";
import {
	MdDashboard,
	MdForwardToInbox,
	MdLogout,
	MdReport,
	MdSettings,
	MdTransferWithinAStation,
	// MdOutlineNotifications,
} from "react-icons/md";
import pic from "../../assets/Dog.png";
import { NavLink } from "react-router-dom";

const MobileScreen = () => {
	return (
		<div>
			<div className=" w-[240px] ">
				<div className="overflow-y-auto min-h-[100vh] w-full border-r bg-blue-950 text-white flex flex-col rounded-lg ">
					<div className="w-full flex px-2 mt-6 ">
						<div className=" w-16 h-8 object-cover flex items-center justify-center">
							<div className="flex ml-64">
								<MdForwardToInbox
									className="mr-4"
									cursor="pointer"
									size={20}
								/>
								<FaRegBell
									cursor="pointer"
									size={20}
								/>
								{/* <MdOutlineNotifications /> */}
							</div>
						</div>
						<div className="ml-2">
							{/* TODO: Add tooltip */}
							<div className="break-words font-bold"></div>
							<p className="break-words font-medium text-slate-400 text-[14px] mt-2"></p>
							<p className="break-words font-medium text-slate-400  text-[14px] -mt-1"></p>
						</div>
					</div>
					<div className="mt-10 px-2 flex flex-col h-[90%]">
						<NavLink
							to="/dashboard"
							className={({ isActive }) =>
								isActive
									? "duration-500 transition-all p-2 rounded-sm bg-blue-200 text-black cursor-pointer font-medium my-[3px] flex items-center justify-between "
									: "duration-500 transition-all p-2 rounded-sm hover:bg-blue-200 hover:text-black cursor-pointer font-medium my-[3px] flex items-center justify-between "
							}
						>
							Dashboard
							{/* <MdQueryStats /> */}
							<MdDashboard />
						</NavLink>
						<NavLink
							to="/wallet"
							className={({ isActive }) =>
								isActive
									? "duration-500 transition-all p-2 rounded-sm bg-blue-200 text-black cursor-pointer font-medium my-[3px] flex items-center justify-between "
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
									? "duration-500 transition-all p-2 rounded-sm bg-blue-200 text-black cursor-pointer font-medium my-[3px] flex items-center justify-between "
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
									? "duration-500 transition-all p-2 rounded-sm bg-blue-200 text-black cursor-pointer font-medium my-[3px] flex items-center justify-between "
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
									? "duration-500 transition-all p-2 rounded-sm bg-blue-200 text-black cursor-pointer font-medium my-[3px] flex items-center justify-between "
									: "duration-500 transition-all p-2 rounded-sm hover:bg-blue-200  hover:text-black cursor-pointer font-medium my-[3px] flex items-center justify-between mt-2"
							}
						>
							Complains
							<MdReport />
						</NavLink>

						<div className="flex-1" />

						<NavLink
							to="/settings"
							className={({ isActive }) =>
								isActive
									? "duration-500 transition-all p-2 rounded-sm bg-blue-200 text-black cursor-pointer font-medium my-[4px] flex items-center justify-between"
									: "duration-500 transition-all p-2 rounded-sm  flex items-center justify-between hover:bg-blue-200 hover:text-black cursor-pointer font-medium my-[4px]"
							}
						>
							Settings
							<MdSettings />
						</NavLink>
						<div className="flex-1" />
						<NavLink
							to=""
							className={({ isActive }) =>
								isActive
									? "duration-500 transition-all p-2 rounded-sm bg-blue-200 text-black cursor-pointer font-medium my-[4px] flex items-center justify-between mt-20"
									: "duration-500 transition-all p-2 rounded-sm  flex items-center justify-between hover:bg-blue-200 hover:text-black cursor-pointer font-medium my-[4px]"
							}
						>
							LogOut
							<MdLogout />
						</NavLink>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MobileScreen;
