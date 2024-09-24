import React, { useState } from "react";
import { ArrowLeft, Search } from "lucide-react";

const cryptocurrencies = [
	{
		name: "Bitcoin",
		symbol: "BTC",
		amount: 0.00016,
		value: 16479.0,
		logo: "https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=025",
		color: "bg-orange-500",
	},
	{
		name: "Ethereum",
		symbol: "ETH",
		amount: 0.05,
		value: 1200.0,
		logo: "https://cryptologos.cc/logos/ethereum-eth-logo.png?v=025",
		color: "bg-blue-500",
	},
	{
		name: "Litecoin",
		symbol: "LTC",
		amount: 0.5,
		value: 80.0,
		logo: "https://cryptologos.cc/logos/litecoin-ltc-logo.png?v=025",
		color: "bg-gray-500",
	},
	{
		name: "Ripple",
		symbol: "XRP",
		amount: 100,
		value: 40.0,
		logo: "https://cryptologos.cc/logos/xrp-xrp-logo.png?v=025",
		color: "bg-blue-400",
	},
];

const wallets = [
	{ name: "USD Wallet", symbol: "USD", available: 0.0, icon: "$" },
	{ name: "EUR Wallet", symbol: "EUR", available: 0.0, icon: "€" },
	{ name: "ETH Wallet", symbol: "ETH", available: 0.0, icon: "Ξ" },
];

export default function SellCryptoPage() {
	const [selectedCrypto, setSelectedCrypto] = useState(null);
	const [searchQuery, setSearchQuery] = useState("");

	const filteredCryptos = cryptocurrencies.filter(
		(crypto) =>
			crypto.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
			crypto.symbol.toLowerCase().includes(searchQuery.toLowerCase())
	);

	return (
		<div className="min-h-screen p-4 md:p-8 lg:p-12">
			<div className="max-w-4xl mx-auto rounded-lg overflow-hidden">
				{!selectedCrypto ? (
					<div className="p-6 md:p-8">
						<h1 className="text-2xl md:text-3xl font-bold mb-6">
							Choose Crypto
						</h1>
						<div className="relative mb-6">
							<input
								type="text"
								placeholder="Search cryptocurrencies"
								value={searchQuery}
								onChange={(e) => setSearchQuery(e.target.value)}
								className="w-full pl-10 pr-4 py-2 md:py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
							/>
							<Search className="absolute left-3 top-2.5 md:top-3.5 text-gray-400" />
						</div>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							{filteredCryptos.map((crypto) => (
								<div
									key={crypto.symbol}
									className="flex justify-between items-center p-4 border rounded-md cursor-pointer hover:bg-gray-50 transition duration-150 ease-in-out"
									onClick={() => setSelectedCrypto(crypto)}
								>
									<div className="flex items-center">
										<div
											className={`${crypto.color} p-2 rounded-full mr-4`}
										>
											<img
												src={crypto.logo}
												alt={crypto.symbol}
												className="w-8 h-8"
											/>
										</div>
										<div>
											<p className="text-lg font-semibold">
												{crypto.name}
											</p>
											<p className="text-sm text-gray-500">
												{crypto.symbol} {crypto.amount}
											</p>
										</div>
									</div>
									<p className="text-lg font-semibold">
										${crypto.value.toFixed(2)}
									</p>
								</div>
							))}
						</div>
					</div>
				) : (
					<div className="p-6 md:p-8">
						<button
							onClick={() => setSelectedCrypto(null)}
							className="flex items-center text-blue-500 mb-6 text-lg"
						>
							<ArrowLeft className="w-5 h-5 mr-2" />
							Back
						</button>
						<h1 className="text-2xl md:text-3xl font-bold mb-6">
							Select Wallet to Receive
						</h1>
						<div className="mb-8">
							<p className="text-lg text-gray-600 mb-2">Selling</p>
							<div className="flex items-center p-4 bg-gray-50 rounded-lg">
								<div
									className={`${selectedCrypto.color} p-3 rounded-full mr-4`}
								>
									<img
										src={selectedCrypto.logo}
										alt={selectedCrypto.symbol}
										className="w-10 h-10"
									/>
								</div>
								<div>
									<p className="text-xl font-semibold">
										{selectedCrypto.name}
									</p>
									<p className="text-lg">
										{selectedCrypto.symbol} {selectedCrypto.amount}
									</p>
									<p className="text-lg text-gray-600">
										${selectedCrypto.value.toFixed(2)}
									</p>
								</div>
							</div>
						</div>
						<div className="space-y-4">
							{wallets.map((wallet) => (
								<div
									key={wallet.symbol}
									className="flex justify-between items-center p-4 border rounded-lg hover:bg-gray-50 transition duration-150 ease-in-out"
								>
									<div>
										<p className="text-lg font-semibold">
											{wallet.name}
										</p>
										<p className="text-md text-gray-600">
											Available: {wallet.icon}
											{wallet.available.toFixed(2)}
										</p>
									</div>
									<button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-150 ease-in-out">
										Select
									</button>
								</div>
							))}
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
