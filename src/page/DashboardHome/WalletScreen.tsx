import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { TbCoins } from "react-icons/tb";
import { MdOutlineSell } from "react-icons/md";
import { PiArrowsCounterClockwiseFill } from "react-icons/pi";
import { BsSendArrowUp } from "react-icons/bs";
import { useState } from "react";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { Link } from "react-router-dom"; // Import Link

const WalletScreen = () => {
	const [isBalanceVisible, setIsBalanceVisible] = useState(true);
	const [showCryptoDetails, setShowCryptoDetails] = useState(true);

	// Action buttons with links
	const actions = [
		{
			label: "Buy",
			icon: (
				<TbCoins
					size={22}
					color="white"
					className="font-extrabold text-lg"
				/>
			),
			color: "#0046B8",
			link: "/crypto/buy", // Added link for Buy action
		},
		{
			label: "Sell",
			icon: (
				<MdOutlineSell
					size={22}
					color="white"
					className="font-extrabold text-lg"
				/>
			),
			color: "#0046B8",
			link: "/crypto/sell", // Added link for Sell action
		},
		{
			label: "Receive",
			icon: (
				<PiArrowsCounterClockwiseFill
					size={22}
					color="white"
					className="font-extrabold text-lg"
				/>
			),
			color: "#0046B8",
		},
		{
			label: "Send",
			icon: (
				<BsSendArrowUp
					size={22}
					color="white"
					className="font-extrabold text-lg"
				/>
			),
			color: "#0046B8",
		},
	];

	return (
		<div className="p-4">
			{/* Your Total Balance Section */}
			<div className="w-full border h-[200px] flex justify-center items-center rounded-md mb-4">
				<div className="w-[95%] h-[90%]">
					<div className="flex items-center justify-between">
						<div className="flex">
							<h2>Your Total Balance</h2>
							<div
								className="ml-3 cursor-pointer"
								onClick={() => setIsBalanceVisible(!isBalanceVisible)}
							>
								{isBalanceVisible ? (
									<FaRegEye size={20} />
								) : (
									<FaRegEyeSlash size={20} />
								)}
							</div>
						</div>
					</div>
					{/* Show the balance or hidden characters */}
					<div className="mt-2 font-semibold text-[42px]">
						{isBalanceVisible ? "$70,000" : "********"}
					</div>

					{/* Action buttons with spacing */}
					<div className="flex gap-5 mt-1">
						{actions.map((action, index) =>
							action.link ? (
								<Link
									to={action.link}
									key={index}
									className="flex flex-col justify-center items-center"
								>
									<div
										className="justify-center items-center flex w-[50px] h-[50px] rounded-md cursor-pointer"
										style={{ backgroundColor: action.color }}
									>
										{action.icon}
									</div>
									<div className="font-semibold mt-1">
										{action.label}
									</div>
								</Link>
							) : (
								<div
									key={index}
									className="flex flex-col justify-center items-center"
								>
									<div
										className="justify-center items-center flex w-[50px] h-[50px] rounded-md cursor-pointer"
										style={{ backgroundColor: action.color }}
									>
										{action.icon}
									</div>
									<div className="font-semibold mt-1">
										{action.label}
									</div>
								</div>
							)
						)}
					</div>
				</div>
			</div>

			{/* Local Currency & Investments Section */}
			<div className="w-full">
				{/* Local Currency */}
				<div className="p-4 border rounded-md mb-4">
					<h3 className="text-sm font-semibold text-gray-500">
						LOCAL CURRENCY
					</h3>
					<div className="flex items-center mt-2 p-3 border rounded-md">
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Flag_of_Nigeria.svg/48px-Flag_of_Nigeria.svg.png"
							alt="Nigeria Flag"
							className="w-8 h-8 mr-3"
						/>
						<span className="text-lg font-semibold">$0.00</span>
					</div>
				</div>

				{/* Your Investments */}
				<div className="p-4 border rounded-md">
					<h3 className="text-sm font-semibold text-gray-500">
						YOUR INVESTMENTS
					</h3>
					{/* Total Crypto */}
					<div
						className="flex justify-between items-center mt-3 p-3 border rounded-md cursor-pointer"
						onClick={() => setShowCryptoDetails(!showCryptoDetails)} // Toggle crypto details
					>
						<div className="flex items-center">
							<div className="bg-blue-600 p-2 rounded-full mr-3">
								<TbCoins
									size={24}
									color="white"
								/>
							</div>
							<div>
								<p className="text-sm font-semibold">Total crypto</p>
								<p className="text-sm text-gray-500">$16,479.48</p>
							</div>
						</div>
						{showCryptoDetails ? (
							<AiFillCaretUp
								size={20}
								color="gray"
							/>
						) : (
							<AiFillCaretDown
								size={20}
								color="gray"
							/>
						)}
					</div>

					{/* Conditionally render BTC, ETH, XRP details with smooth animation */}
					<div
						className={`transition-all duration-500 ease-in-out ${
							showCryptoDetails
								? "max-h-[1000px] opacity-100"
								: "max-h-0 opacity-0 overflow-hidden"
						}`}
					>
						{/* BTC */}
						<div className="flex justify-between items-center mt-3 p-3 border rounded-md">
							<div className="flex items-center">
								<div className="bg-orange-500 p-2 rounded-full mr-3">
									<img
										src="https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=025"
										alt="BTC"
										className="w-6 h-6"
									/>
								</div>
								<div>
									<p className="text-sm font-semibold">BTC 0.00016</p>
									<p className="text-sm text-gray-500">$16,479.00</p>
								</div>
							</div>
						</div>

						{/* ETH */}
						<div className="flex justify-between items-center mt-3 p-3 border rounded-md">
							<div className="flex items-center">
								<div className="bg-gray-500 p-2 rounded-full mr-3">
									<img
										src="https://cryptologos.cc/logos/ethereum-eth-logo.png?v=025"
										alt="ETH"
										className="w-6 h-6"
									/>
								</div>
								<div>
									<p className="text-sm font-semibold">ETH 0.00</p>
									<p className="text-sm text-gray-500">$0.00</p>
								</div>
							</div>
						</div>

						{/* XRP */}
						<div className="flex justify-between items-center mt-3 p-3 border rounded-md">
							<div className="flex items-center">
								<div className="bg-black p-2 rounded-full mr-3">
									<img
										src="https://cryptologos.cc/logos/xrp-xrp-logo.png?v=025"
										alt="XRP"
										className="w-6 h-6"
									/>
								</div>
								<div>
									<p className="text-sm font-semibold">XRP 0.00</p>
									<p className="text-sm text-gray-500">$0.00</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WalletScreen;
