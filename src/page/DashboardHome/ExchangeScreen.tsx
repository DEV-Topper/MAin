import React, { useEffect, useRef, memo } from "react";

const TradingViewWidgets: React.FC = () => {
	const overviewContainerRef = useRef<HTMLDivElement>(null);
	const marketQuotesContainerRef = useRef<HTMLDivElement>(null);
	const scriptLoadedRef = useRef<{
		overview: boolean;
		marketQuotes: boolean;
	}>({
		overview: false,
		marketQuotes: false,
	});

	useEffect(() => {
		if (
			!scriptLoadedRef.current.overview &&
			overviewContainerRef.current
		) {
			const script = document.createElement("script");
			script.src =
				"https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
			script.type = "text/javascript";
			script.async = true;
			script.innerHTML = `
        {
          "symbols": [
            ["BINANCE:BTCUSDT|1D"],
            ["COINBASE:ETHUSD|1D"],
            ["BINANCE:LITUSDT|1D"],
            ["COINBASE:SOLUSD|1D"],
            ["BINANCE:BNBUSD|1D"],
            ["COINBASE:DOGEUSD|1D"]
          ],
          "chartOnly": false,
          "width": "100%",
          "height": "100%",
          "locale": "en",
          "colorTheme": "light",
          "autosize": true,
          "showVolume": false,
          "showMA": false,
          "hideDateRanges": false,
          "hideMarketStatus": false,
          "hideSymbolLogo": false,
          "scalePosition": "right",
          "scaleMode": "Normal",
          "fontFamily": "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
          "fontSize": "10",
          "noTimeScale": false,
          "valuesTracking": "1",
          "changeMode": "price-and-percent",
          "chartType": "area",
          "maLineColor": "#2962FF",
          "maLineWidth": 1,
          "maLength": 9,
          "lineWidth": 2,
          "lineType": 0,
          "dateRanges": [
            "1d|1",
            "1m|30",
            "3m|60",
            "12m|1D",
            "60m|1W",
            "all|1M"
          ]
        }
      `;
			overviewContainerRef.current.appendChild(script);
			scriptLoadedRef.current.overview = true;
		}

		if (
			!scriptLoadedRef.current.marketQuotes &&
			marketQuotesContainerRef.current
		) {
			const script = document.createElement("script");
			script.src =
				"https://s3.tradingview.com/external-embedding/embed-widget-market-quotes.js";
			script.type = "text/javascript";
			script.async = true;
			script.innerHTML = `
        {
          "width": 550,
          "height": 550,
          "symbolsGroups": [
            {
              "name": "Indices",
              "originalName": "Indices",
              "symbols": [
                {"name": "FOREXCOM:NSXUSD", "displayName": "US 100 Cash CFD"},
                {"name": "INDEX:DEU40", "displayName": "DAX Index"},
                {"name": "FOREXCOM:UKXGBP", "displayName": "FTSE 100 Index"},
                {"name": "BITSTAMP:BTCUSD"},
                {"name": "BINANCE:ETHUSDT"},
                {"name": "BINANCE:BNBUSD"},
                {"name": "COINBASE:LITUSD"},
                {"name": "BINANCE:DOGEUSD"},
                {"name": "BINANCE:XLMUSDT"}
              ]
            },
            {
              "name": "Futures",
              "originalName": "Futures",
              "symbols": [
                {"name": "CME_MINI:ES1!", "displayName": "S&P 500"},
                {"name": "CME:6E1!", "displayName": "Euro"},
                {"name": "COMEX:GC1!", "displayName": "Gold"},
                {"name": "NYMEX:CL1!", "displayName": "WTI Crude Oil"},
                {"name": "NYMEX:NG1!", "displayName": "Gas"},
                {"name": "CBOT:ZC1!", "displayName": "Corn"}
              ]
            },
            {
              "name": "Bonds",
              "originalName": "Bonds",
              "symbols": [
                {"name": "CBOT:ZB1!", "displayName": "T-Bond"},
                {"name": "CBOT:UB1!", "displayName": "Ultra T-Bond"},
                {"name": "EUREX:FGBL1!", "displayName": "Euro Bund"},
                {"name": "EUREX:FBTP1!", "displayName": "Euro BTP"},
                {"name": "EUREX:FGBM1!", "displayName": "Euro BOBL"}
              ]
            },
            {
              "name": "Forex",
              "originalName": "Forex",
              "symbols": [
                {"name": "FX:EURUSD", "displayName": "EUR to USD"},
                {"name": "FX:GBPUSD", "displayName": "GBP to USD"},
                {"name": "FX:USDJPY", "displayName": "USD to JPY"},
                {"name": "FX:USDCHF", "displayName": "USD to CHF"},
                {"name": "FX:AUDUSD", "displayName": "AUD to USD"},
                {"name": "FX:USDCAD", "displayName": "USD to CAD"}
              ]
            }
          ],
          "showSymbolLogo": true,
          "isTransparent": false,
          "colorTheme": "light",
          "locale": "en",
          "backgroundColor": "#ffffff"
        }
      `;
			marketQuotesContainerRef.current.appendChild(script);
			scriptLoadedRef.current.marketQuotes = true;
		}
	}, []);

	return (
		<div>
			<div
				className="tradingview-widget-container h-[600px]"
				ref={overviewContainerRef}
				// style={{ height: "600px" }}
			>
				<div className="tradingview-widget-container__widget"></div>
				<div className="tradingview-widget-copyright"></div>
			</div>

			<div
				className="tradingview-widget-container mt-11"
				ref={marketQuotesContainerRef}
			>
				<div className="tradingview-widget-container__widget"></div>
				{/* <div className="tradingview-widget-copyright"></div> */}
			</div>
		</div>
	);
};

export default TradingViewWidgets;
