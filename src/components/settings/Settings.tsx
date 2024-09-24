import { FC } from "react";
import { Link } from "react-router-dom";
import { RiPagesLine } from "react-icons/ri";
import { HiMiniBuildingOffice2 } from "react-icons/hi2";
import { FaSquareXmark, FaSquareCheck } from "react-icons/fa6";
import Identity from "./Identity";
// import LittleHeader from "../../../components/layout/LittleHeader";

const SettingScreen: FC = () => {
	document.title = "User's settings";

	const pathData = [
		{
			icon: <RiPagesLine size={45} />,
			title: "Page Info",
			detail:
				"Provide basic info that would be used for your school's landing page.",
			url: "/my-personal-info/info",
			size: 35,
		},
		{
			icon: <RiPagesLine size={45} />,

			title: "Professional Info",
			detail: "Provide personal details and how we can reach you.",
			url: "/my-personal-info/theme-setting",
			size: 35,
		},
		{
			icon: <HiMiniBuildingOffice2 size={45} />,
			title: "School's Info",
			detail: "Provide studio details and how we can reach you.",
			url: "/my-personal-info/theme-settings",
			size: 35,
		},
	];

	return (
		<div className=" min-h-[82vh] text-blue-950">
			{/* <LittleHeader name={document.title} /> */}
			<div className="w-full m-auto py-8 flex gap-12 max-lg:block max-md:pt-1 flex-col">
				<div className=" mb-4 md:mb-0">
					<div className="font-bold text-[30px] text-blue-950">
						Main Settings Page
					</div>
					<div className="text-[13px]">
						<Link
							to="/"
							className="underline text-black font-[400] hover:text-black "
						>
							<span>go back home</span>
						</Link>
					</div>
				</div>
				<div className=" w-full bg-[#f8f8f8] rounded-xl min-h-[120px] px-4 py-3 flex-wrap mt-3 lg:mt-0">
					<h1 className=" font-bold text-[20px] mb-5">
						Account Security
					</h1>
					<div className="w-full grid grid-cols-2 lg:grid-cols-7 gap-2">
						<div className=" flex gap-1">
							<FaSquareXmark
								size={25}
								className=" text-red-400"
							/>
							<span className=" font-medium ">2 FA</span>
						</div>
						<div className="col-span-2 flex gap-1 ">
							<FaSquareXmark
								size={25}
								className=" text-red-400 "
							/>
							<span className=" font-medium ">
								Identify Verification
							</span>
						</div>
						<div className="col-span-2 flex gap-1 ">
							<FaSquareCheck
								size={25}
								className=" text-green-500 "
							/>
							<span className=" font-medium ">
								Enable Anti-phising Code
							</span>
						</div>
						<div className=" col-span-2 flex gap-1 ">
							<FaSquareXmark
								size={25}
								className=" text-red-400 "
							/>
							<span className=" font-medium ">
								Turn On Withdrawal Whitelist
							</span>
						</div>
					</div>
				</div>
				<div>
					<Identity />
				</div>
			</div>
		</div>
	);
};

export default SettingScreen;
