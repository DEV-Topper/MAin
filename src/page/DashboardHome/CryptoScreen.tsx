import { useUserData } from "@/hooks/userHooks";
import { Link } from "react-router-dom";

const CryptoScreen = () => {
	document.title = "Crypto Screen";

	const { data: username } = useUserData();

	return (
		<div className="p-4">
			<h1 className="text-xl font-bold mb-4">
				Hello, {username?.user?.userName} 👋
			</h1>
			<p>I want to?</p>
			<div className="flex items-center gap-5 flex-wrap">
				<Link
					to={"buy"}
					className="flex gap-4 w-[300px] rounded-xl cursor-pointer bg-[#F7F9FB]"
				>
					<div className="p-4 flex-1">
						<div className="flex items-center mb-10">
							<div className="size-7 border-2 border-[#d3d6ed] rounded-full bg-[#e1e3f8]"></div>
						</div>

						<h2 className="text-lg font-semibold">Buy Crypto</h2>
						<p>
							Buy various cryptocurrencies easily and instantly at
							best prices.
						</p>
					</div>
				</Link>
				<Link
					to={"sell"}
					className="flex gap-4 w-[300px] rounded-xl cursor-pointer bg-[#F7F9FB]"
				>
					<div className="p-4 flex-1">
						<div className="flex items-center mb-10">
							<div className="size-7 border-2 border-[#d3d6ed] rounded-full bg-[#EDB6DE]"></div>
						</div>

						<h2 className="text-lg font-semibold">Sell Crypto</h2>
						<p>
							Buy various cryptocurrencies easily and instantly at
							best prices.
						</p>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default CryptoScreen;
