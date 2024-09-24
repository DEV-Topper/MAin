import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import NewsCard from "../../components/MainStatic/NewsCard";
import ViewBitcoin from "../../components/static/ViewBitcoin";
import ViewEthereum from "../../components/static/ViewEthereum";
import ViewLitcoin from "../../components/static/ViewLitcoin";
import ViewDoge from "../../components/static/ViewDoge";
import ViewBtcAnalysis from "../../components/static/ViewBitcoinAnalysis";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import {
	MdOutlineKeyboardArrowRight,
	MdOutlineSell,
} from "react-icons/md";
import { PiArrowsCounterClockwiseFill } from "react-icons/pi";
import { BsSendArrowUp } from "react-icons/bs";
import { TbCoins } from "react-icons/tb";
import { Link } from "react-router-dom";

interface NewsItem {
	title: string;
	description: string;
	link: string;
}

interface Action {
	label: string;
	icon: JSX.Element;
	color: string;
	link?: string; // Added link property
}

const CryptoChart: React.FC = () => {
	document.title = "Dashboard Screen";

	const [news, setNews] = useState<NewsItem[]>([]);
	const [isBalanceVisible, setIsBalanceVisible] =
		useState<boolean>(true);
	const containerRef = useRef<HTMLDivElement>(null);
	const scriptLoadedRef = useRef<boolean>(false);

	// Fetch news data
	useEffect(() => {
		const fetchNews = async () => {
			try {
				const response = await axios.get(
					"https://rss.app/feeds/txF6Dc9RY6I2otLn.xml"
				);
				const parser = new DOMParser();
				const xmlDoc = parser.parseFromString(
					response.data,
					"text/xml"
				);
				const items = xmlDoc.querySelectorAll("item");

				const newsItems: NewsItem[] = Array.from(items).map(
					(item) => ({
						title: item.querySelector("title")?.textContent || "",
						description:
							item.querySelector("description")?.textContent || "",
						link: item.querySelector("link")?.textContent || "",
					})
				);

				setNews(newsItems);
			} catch (error) {
				console.error("Error fetching news:", error);
			}
		};

		fetchNews();
	}, []);

	// TradingView widget script load
	useEffect(() => {
		if (!scriptLoadedRef.current && containerRef.current) {
			const script = document.createElement("script");
			script.src =
				"https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
			script.type = "text/javascript";
			script.async = true;
			script.innerHTML = JSON.stringify({
				autosize: true,
				symbol: "BINANCE:BTCUSDT",
				interval: "D",
				timezone: "Etc/UTC",
				theme: "light",
				style: "1",
				locale: "en",
				hide_top_toolbar: true,
				allow_symbol_change: false,
				calendar: false,
				support_host: "https://www.tradingview.com",
			});
			containerRef.current.appendChild(script);
			scriptLoadedRef.current = true;
		}
	}, []);

	// Action buttons
	const actions: Action[] = [
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
			link: "/crypto/sell", // Added link for Buy action
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
			link: "/sell", // Added link for Sell action
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
		<div>
			<div className="w-full border h-[200px] flex justify-center items-center rounded-md">
				<div className="w-[95%] h-[90%] ">
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
						<div className="w-9 h-9 rounded-lg justify-center items-center flex hover:bg-slate-100 transition-all duration-300">
							<Link
								to="/wallet"
								state={{ isBalanceVisible }}
							>
								<MdOutlineKeyboardArrowRight
									size={30}
									cursor="pointer"
								/>
							</Link>
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

			<div>
				<div className="w-full flex flex-wrap lg:flex-nowrap gap-4">
					{/* Crypto widgets container */}
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mx-auto">
						<div className="scale-90 lg:scale-75">
							<ViewBitcoin containerId="tradingview-widget-container-1" />
						</div>
						<div className="scale-90 lg:scale-75">
							<ViewEthereum containerId="tradingview-widget-container-2" />
						</div>
						<div className="scale-90 lg:scale-75">
							<ViewLitcoin containerId="tradingview-widget-container-3" />
						</div>
						<div className="scale-90 lg:scale-75">
							<ViewDoge containerId="tradingview-widget-container-4" />
						</div>
					</div>

					{/* News section */}
					<div
						className="overflow-x-hidden overflow-y-auto"
						style={{ maxHeight: "400px" }}
					>
						{news.map((item, index) => (
							<NewsCard
								key={index}
								title={item.title}
								description={item.description}
								link={item.link}
							/>
						))}
					</div>

					{/* Bitcoin analysis */}
					<div className="container mx-auto">
						<ViewBtcAnalysis />
					</div>
				</div>

				{/* TradingView chart */}
				<div
					ref={containerRef}
					className="h-[600px] mt-12"
				></div>
			</div>
		</div>
	);
};

export default CryptoChart;
