import React, { useEffect, useRef } from "react";

const ViewBtcAnalysis: React.FC = () => {
	const scriptAddedRef = useRef(false);

	useEffect(() => {
		if (!scriptAddedRef.current) {
			const script = document.createElement("script");
			script.type = "text/javascript";
			script.async = true;
			script.src =
				"https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js";
			script.onload = () => {
				(window as any).TradingView.widget({
					interval: "1m",
					width: 425,
					height: 450,
					// symbol: "BINANCE:BTCUSDT",
					showIntervalTabs: true,
					displayMode: "single",
					locale: "en",
					colorTheme: "light",
					container_id: "tradingview-widget-container",
				});
			};
			document
				.getElementById("tradingview-widget-script-container")
				?.appendChild(script);
			scriptAddedRef.current = true;
		}
	}, []);

	return (
		<div
			id="tradingview-widget-script-container"
			className="w-full h-full flex justify-center items-center"
		>
			<div
				id="tradingview-widget-container"
				className="tradingview-widget-container"
			></div>
		</div>
	);
};

export default ViewBtcAnalysis;
