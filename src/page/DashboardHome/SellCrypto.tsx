import React, { useEffect, useState } from "react";
import { useUserData } from "@/hooks/userHooks";
import { Bitcoin, DollarSign, Wallet2Icon } from "lucide-react";
import { FaEthereum, FaLitecoinSign } from "react-icons/fa6";
import { SiDogecoin } from "react-icons/si";
import { FaAirbnb } from "react-icons/fa";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { QRCodeSVG } from "qrcode.react";

interface CryptoSymbol {
	icon: React.ElementType;
	label: string;
	address?: string;
}

interface CryptoPrices {
	[key: string]: {
		usd: number;
	};
}

const cryptoSymbols: Record<string, CryptoSymbol> = {
	bitcoin: {
		icon: Bitcoin,
		label: "Bitcoin",
		address: "bc1q38zp5z2t7k24e4rskperyngytv300qp3je3tlp",
	},
	litecoin: { icon: FaLitecoinSign, label: "Litecoin" },
	dogecoin: { icon: SiDogecoin, label: "Dogecoin" },
	ethereum: {
		icon: FaEthereum,
		label: "Ethereum",
		address: "0x019d176474df9416198CCC59b491016d8bC99279",
	},
	tether: { icon: DollarSign, label: "USDT" },
	binancecoin: { icon: FaAirbnb, label: "BNB" },
};

const fetchCryptoPrices = async (): Promise<CryptoPrices> => {
	const response = await fetch(
		"https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,litecoin,dogecoin,ethereum,tether,binancecoin&vs_currencies=usd"
	);
	const data = await response.json();
	return data;
};

const SellCrypto: React.FC = () => {
	const { data: username } = useUserData();
	const [cryptoPrices, setCryptoPrices] = useState<CryptoPrices>({});
	const [selectedCrypto, setSelectedCrypto] = useState<string>("");
	const [walletAddress, setWalletAddress] = useState<string>("");

	useEffect(() => {
		const getCryptoPrices = async () => {
			const prices = await fetchCryptoPrices();
			setCryptoPrices(prices);
		};
		getCryptoPrices();
	}, []);

	const generateWalletAddress = () => {
		if (!cryptoSymbols[selectedCrypto.toLowerCase()]?.address) {
			const generatedAddress = `0x${Math.random()
				.toString(36)
				.substring(2, 15)}${Math.random()
				.toString(36)
				.substring(2, 15)}`;
			setWalletAddress(generatedAddress);
		}
	};

	const copyAddressToClipboard = () => {
		if (walletAddress) {
			navigator.clipboard
				.writeText(walletAddress)
				.then(() => {
					alert("Wallet address copied to clipboard!");
				})
				.catch((err) => {
					console.error("Failed to copy address: ", err);
				});
		}
	};

	return (
		<div>
			<div className="p-4">
				<h1 className="text-xl font-bold mb-4">
					Hello, {username?.user?.userName} 👋
				</h1>
			</div>

			<div className="grid gap-6 grid-cols-10 p-4">
				<div className="col-span-10 lg:col-span-4 space-y-4">
					{Object.entries(cryptoSymbols).map(
						([key, { icon: Icon, label, address }]) => (
							<div
								onClick={() => {
									setWalletAddress(address || "");
									setSelectedCrypto(label);
								}}
								key={key}
								className="border rounded-lg flex items-center cursor-pointer py-5 justify-between p-4"
							>
								<div className="flex items-center gap-3">
									<Icon
										color="#F7931A"
										size={20}
									/>
									<p>{label}</p>
								</div>
								<div>
									<p>
										<b>
											$
											{cryptoPrices[key]?.usd
												? cryptoPrices[key]?.usd.toFixed(2)
												: "N/A"}
										</b>
									</p>
								</div>
							</div>
						)
					)}
				</div>

				{/* Common Modal for both mobile and desktop */}
				<div className="col-span-10 lg:col-span-6 flex items-center px-6 text-center justify-center">
					{!selectedCrypto && (
						<div className="space-y-3 text-center flex flex-col items-center">
							<Wallet2Icon
								size={20}
								color="brown"
							/>
							<p>No Wallet Selected</p>
						</div>
					)}
					{selectedCrypto && (
						<div className="space-y-3">
							<div className="justify-center flex items-center space-y-4 flex-col">
								<img
									className="w-[100px]"
									src="/wallet.svg"
									alt=""
								/>
								<p className="text-[20px]">
									<b>
										Generate your CoinTradeX {selectedCrypto} wallet
									</b>
								</p>
								<p>
									A unique {selectedCrypto} wallet (address) will be
									generated for you.
								</p>
							</div>
							<Dialog>
								<DialogTrigger asChild>
									<Button
										className="px-4 py-2 bg-[#0046B8] text-white rounded-lg"
										onClick={generateWalletAddress}
									>
										Generate {selectedCrypto} Wallet
									</Button>
								</DialogTrigger>
								<DialogContent className="sm:max-w-md">
									<DialogHeader>
										<DialogTitle>{selectedCrypto} Wallet</DialogTitle>
										<DialogDescription>
											Your generated wallet address and QR code are
											shown below.
										</DialogDescription>
									</DialogHeader>
									<div className="grid gap-4 py-4">
										<div className="grid grid-cols-4 items-center gap-4">
											<Label
												htmlFor="walletAddress"
												className="text-right"
											>
												Wallet Address
											</Label>
											<Input
												id="walletAddress"
												value={walletAddress}
												readOnly
												className="col-span-3"
											/>
										</div>
										<div className="flex justify-center">
											<QRCodeSVG
												value={walletAddress}
												size={128}
											/>
										</div>
									</div>
									<DialogFooter>
										<Button
											type="button"
											onClick={copyAddressToClipboard}
										>
											Copy Address
										</Button>
										<DialogClose asChild>
											<Button
												type="button"
												variant="secondary"
											>
												Close
											</Button>
										</DialogClose>
									</DialogFooter>
								</DialogContent>
							</Dialog>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default SellCrypto;
