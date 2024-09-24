import axios from "axios";

interface CryptoData {
	prices: [number, number][];
}

export async function fetchCryptoData(): Promise<CryptoData | null> {
	try {
		const response = await axios.get<CryptoData>(
			"https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=30&interval=daily"
		);
		return response.data;
	} catch (error) {
		console.error("Error fetching cryptocurrency data:", error);
		return null;
	}
}

const options = {
	method: "GET",
	url: "https://binance43.p.rapidapi.com/ticker/24hr",
	headers: {
		"X-RapidAPI-Key":
			"fbcf9a73d1msh12de4ae76b52995p1dd044jsn257d9cc29471",
		"X-RapidAPI-Host": "binance43.p.rapidapi.com",
	},
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}
