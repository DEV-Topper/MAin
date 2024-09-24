import React, { useEffect, useRef } from "react";

interface ViewBitcoinProps {
	containerId: string;
}

const ViewLitcoin: React.FC<ViewBitcoinProps> = ({ containerId }) => {
	const scriptAddedRef = useRef(false);

	useEffect(() => {
		if (!scriptAddedRef.current) {
			const script = document.createElement("script");
			script.src =
				"https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js";
			script.async = true;
			script.innerHTML = JSON.stringify({
				symbol: "BINANCE:LTCBTC",
				width: 240,
				height: 230,
				locale: "en",
				dateRange: "12M",
				colorTheme: "dark",
				isTransparent: false,
				autosize: false,
				largeChartUrl: "",
			});
			document.getElementById(containerId)?.appendChild(script);
			scriptAddedRef.current = true;
		}
	}, [containerId]);

	return (
		<div className="flex flex-col items-center">
			<div
				id={containerId}
				className="tradingview-widget-container my-4"
			></div>
		</div>
	);
};

export default ViewLitcoin;
