import React from "react";
import vector from "../../assets/banner_vector2.png";
import StarField from "./StarField";
import Button from "../../components/reUse/Button";

const Hero = () => {
	return (
		<div>
			<div className="relative min-h-[150vh] lg:min-h-[100vh] w-full flex items-center justify-center  overflow-hidden bg-blue-600">
				<StarField />

				<div className="absolute pt-[64px] lg:pt-0 top-0 left-0 w-full h-full flex items-center justify-center flex-wrap">
					<div className="w-[78%] text-white h-full flex items-center flex-wrap">
						<div className="w-[100%] lg:w-1/2">
							{" "}
							<h1 className="text-[40px] font-bold">
								<span className="text-blue-900">CoinTradeX</span>{" "}
								Landing Page
							</h1>
							<h2 className="text-[30px] font-bold my-3">
								Start Bitcoin mining today!
							</h2>
							<p className="text-[16px] font-medium">
								The highest paying Bitcoin mining pool and cloud
								mining provider on the market. Start mining Bitcoin
								today!
							</p>
							<div className="flex flex-wrap gap-4 mt-4 items-center justify-center lg:justify-start w-full">
								<Button
									className="w-[300px] lg:w-auto justify-center flex "
									text="WHITE PAPER"
								/>
								<div className="p-1 transition-all duration-300  bg-gradient-to-r  from-[#6d62aa]  to-[#2ab2d2]  bg-white rounded-[40px]">
									<Button
										text="BUY TOKEN NOW"
										className="w-[300px] lg:w-auto justify-center flex "
									/>
								</div>
							</div>
						</div>
						<div className="w-[100%] lg:w-1/2">
							<img
								src={vector}
								alt=""
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
