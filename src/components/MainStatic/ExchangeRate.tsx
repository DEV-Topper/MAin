// src/components/ExchangeRate.tsx

import React, { useEffect, useState } from "react";
import axios from "axios";

const ExchangeRate: React.FC = () => {
	const [crypto, setCrypto] = useState<string>("bitcoin");
	const [currency, setCurrency] = useState<string>("usd");
	const [amount, setAmount] = useState<number>(1); // Default amount is 1
	const [exchangeRate, setExchangeRate] = useState<number | null>(
		null
	);

	useEffect(() => {
		const fetchExchangeRate = async () => {
			try {
				const response = await axios.get(
					`https://api.coingecko.com/api/v3/simple/price?ids=${crypto}&vs_currencies=${currency}`
				);
				setExchangeRate(response.data[crypto][currency]);
			} catch (error) {
				console.error("Error fetching exchange rate:", error);
			}
		};

		fetchExchangeRate();

		// Cleanup function for useEffect
		return () => {
			// Cleanup code here if needed
		};
	}, [crypto, currency]);

	const handleAmountChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		const value = parseFloat(event.target.value);
		setAmount(isNaN(value) ? 0 : value); // Ensure amount is a valid number
	};

	return (
		<div className="bg-gray-900 text-white p-8 rounded-lg shadow-md mb-10">
			<h2 className="text-2xl font-semibold mb-4">
				Cryptocurrency Exchange Rate
			</h2>
			<div className="flex items-center mb-4">
				<div className="mr-4">
					<label
						htmlFor="crypto"
						className="block text-gray-400"
					>
						Select Cryptocurrency:
					</label>
					<select
						id="crypto"
						value={crypto}
						onChange={(e) => setCrypto(e.target.value)}
						className="block mt-1 w-full bg-gray-800 text-white rounded-md border-none"
					>
						<option value="bitcoin">Bitcoin</option>
						<option value="ethereum">Ethereum</option>
						<option value="litecoin">Litecoin</option>{" "}
						{/* Corrected spelling */}
						<option value="dogecoin">Dogecoin</option>
						{/* Add more options as needed */}
					</select>
				</div>
				<div className="mr-4">
					<label
						htmlFor="currency"
						className="block text-gray-400"
					>
						Select Currency:
					</label>
					<select
						id="currency"
						value={currency}
						onChange={(e) => setCurrency(e.target.value)}
						className="block mt-1 w-full bg-gray-800 text-white rounded-md border-none"
					>
						<option value="usd">USD</option>
						<option value="eur">EUR</option>
						{/* Add more options as needed */}
					</select>
				</div>
				<div>
					<label
						htmlFor="amount"
						className="block text-gray-400"
					>
						Amount of Cryptocurrency:
					</label>
					<input
						type="number"
						id="amount"
						value={amount}
						onChange={handleAmountChange}
						min={0}
						step={0.01}
						className="block mt-1 w-full bg-gray-800 text-white rounded-md border-none focus:outline-none focus:ring focus:border-blue-300"
					/>
				</div>
			</div>
			{exchangeRate !== null ? (
				<p className="text-green-500 text-2xl font-bold">
					{amount} {crypto.toUpperCase()} = {amount * exchangeRate}{" "}
					{currency.toUpperCase()}
				</p>
			) : (
				<p>Loading...</p>
			)}
		</div>
	);
};

export default ExchangeRate;
