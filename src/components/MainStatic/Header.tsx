import { FaRegBell, FaSearch } from "react-icons/fa";
import Input from "../MainReUse/Input";
import { MdForwardToInbox } from "react-icons/md";
import pic from "../../assets/Dog.png";
import { useState } from "react";
import { MdMenu } from "react-icons/md";
import { NavLink } from "react-router-dom";
import MobileScreen from "./MobileScreen";
import {
	useUserCookie,
	useUserData,
	useUserDataByName,
} from "../../hooks/userHooks";

const Header = () => {
	const { data: username } = useUserData();
	const [search, setSearch] = useState<string>("");
	const [menu, setMenu] = useState(false);
	const { data: userCookie, isLoading: isUserCookieLoading } =
		useUserCookie();
	const userName = userCookie?.userName;

	const { data: userInfo, isLoading: isUserInfoLoading } =
		useUserDataByName(userName);

	const toggle = () => {
		setMenu(!menu);
	};

	return (
		<div className="h-[50px] border-b w-full flex justify-center items-center z-10 fixed top-0 left-0 right-0 bg-white mt-11">
			<div className="w-full relative flex justify-between items-center">
				<div className="flex items-center h-full md:ml-[270px] ">
					<h1 className="hidden lg:block font-bold ">Dashboard</h1>
					<div
						className="block md:hidden mt-1 ml-2 font-bold cursor-pointer transition-all duration-500"
						onClick={toggle}
					>
						<MdMenu size={25} />
					</div>
					<div className=" w-[70%] mt-5 flex lg:ml-2">
						<Input
							className=" h-[35px] flex text-[13px] font-medium"
							type="search"
							placeholder="Type to search ..."
							required
							value={search}
							onChange={(e: any) => {
								setSearch(e.target.value);
							}}
							icon={
								<FaSearch
									className="bg-transparent text-gray-400"
									size={15}
								/>
							}
						/>
					</div>
				</div>
				<div className="flex items-center mr-16 min-md:block">
					<div className=" hidden md:flex mr-5">
						<MdForwardToInbox
							className="mr-4"
							cursor="pointer"
							size={20}
						/>
						<FaRegBell cursor="pointer" />
					</div>
					<div className="w-[1px] border h-6 mr-4"></div>
					<div className="flex">
						<div className=" w-9 h-9 object-cover flex border rounded-full items-center justify-center cursor-pointer">
							<img
								className="w-full h-full object-cover rounded-full border"
								src={pic}
							/>
						</div>
						<div className="ml-2">
							{isUserInfoLoading ? (
								<h1 className="font-bold text-[13px]">Loading...</h1>
							) : (
								<>
									<h1 className="font-bold text-[13px]">
										{userInfo?.userName}
									</h1>
									<h3 className="text-[13px]">Admin</h3>
									<h3 className="text-[13px]">
										{username?.user?.userName}
									</h3>
								</>
							)}
						</div>
					</div>
				</div>
				{menu ? (
					<div
						className=" w-full absolute bg-[rgba(0,0,0,0.2)] h-screen left-2 top-[70px] transition-all duration-500"
						onClick={toggle}
					>
						<MobileScreen />
					</div>
				) : null}
			</div>
		</div>
	);
};

export default Header;
