// components/TradingViewWidget.tsx
import React, { useEffect } from "react";

const TradingViewWidget: React.FC = () => {
	useEffect(() => {
		const script = document.createElement("script");
		script.src =
			"https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js";
		script.async = true;
		script.innerHTML = JSON.stringify({
			symbol: "BINANCE:BTCUSD",
			width: 350,
			height: 220,
			locale: "en",
			dateRange: "12M",
			colorTheme: "light",
			isTransparent: false,
			autosize: false,
			largeChartUrl: "",
		});

		document
			.getElementById("tradingview-widget-container")
			?.appendChild(script);
	}, []);

	return (
		<div
			className="tradingview-widget-container"
			id="tradingview-widget-container"
		>
			<div className="tradingview-widget-container__widget"></div>
			<div className="tradingview-widget-copyright">
				<a
					href="https://www.tradingview.com/"
					rel="noopener nofollow"
					target="_blank"
				>
					<span className="blue-text">
						Track all markets on TradingView
					</span>
				</a>
			</div>
		</div>
	);
};

export default TradingViewWidget;
