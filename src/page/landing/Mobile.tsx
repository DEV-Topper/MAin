import React from "react";
import Button from "../../components/reUse/Button";
import mobile from "../../assets/mobile-app.gif";
import { FaApple, FaGooglePlay } from "react-icons/fa";

const Mobile = () => {
	return (
		<div className="min-h-[130vh] lg:min-h-[100vh] bg-blue-600 w-full flex justify-center items-center">
			<div className="w-[80%] text-white flex-row-reverse justify-between space-y-5 lg:space-y-0 flex flex-wrap lg:flex-nowrap items-center text-center lg:text-start">
				<div className="w-full flex justify-center lg:w-full">
					<img
						src={mobile}
						alt=""
						className="w-[10000%]"
					/>
				</div>
				<div className="w-full lg:w-1/2">
					<h2 className="text-blue-300 font-semibold text-[23px]">
						COINTRADEX APP
					</h2>
					<h1 className="text-[35px] mb-5 font-bold">
						Coming Soon: Download Mobile App
					</h1>
					<p className="mt-5 text-[18px]">
						Prepare for an enhanced trading experience with the
						upcoming CoinTradeX mobile app! Designed to empower your
						trading journey, our app will soon be available for
						download on both iPhone and Android™ devices. Stay tuned
						for its release, where you'll gain access to exclusive
						tools tailored to optimize your trading strategies and
						maximize your membership benefits. Get ready to trade
						smarter and more conveniently with the CoinTradeX mobile
						app.
					</p>

					<p className="my-5 text-[18px]">
						Get ready to elevate your trading journey with CoinTradeX
						- the future of cryptocurrency trading is just around the
						corner.
					</p>
					<div className="flex gap-5 justify-center lg:justify-start flex-wrap">
						<Button
							text={"Google Store"}
							icon={<FaGooglePlay />}
						/>
						<Button
							text={"Apple Store"}
							icon={<FaApple />}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Mobile;
