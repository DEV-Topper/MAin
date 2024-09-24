import React, { useEffect, useRef } from "react";

const CryptoHeader: React.FC = () => {
	const containerRef = useRef<HTMLDivElement>(null);
	const scriptLoadedRef = useRef(false);

	useEffect(() => {
		if (!scriptLoadedRef.current && containerRef.current) {
			const script = document.createElement("script");
			script.type = "text/javascript";
			script.async = true;
			script.src =
				"https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
			script.innerHTML = JSON.stringify({
				symbols: [
					{ proName: "FOREXCOM:SPXUSD", title: "S&P 500 Index" },
					{ proName: "FOREXCOM:NSXUSD", title: "US 100 Cash CFD" },
					{ proName: "FX_IDC:EURUSD", title: "EUR to USD" },
					{ proName: "BITSTAMP:BTCUSD", title: "Bitcoin" },
					{ proName: "BITSTAMP:ETHUSD", title: "Ethereum" },
				],
				showSymbolLogo: true,
				isTransparent: false,
				displayMode: "adaptive",
				colorTheme: "light",
				locale: "en",
			});
			containerRef.current.appendChild(script);
			scriptLoadedRef.current = true;
		}
	}, []);

	return (
		<div className="w-full overflow-hidden fixed top-0 z-50">
			<div
				className="tradingview-widget-container"
				ref={containerRef}
			>
				<div className="tradingview-widget-container__widget"></div>
				<div className="tradingview-widget-copyright"></div>
			</div>
		</div>
	);
};

export default CryptoHeader;
