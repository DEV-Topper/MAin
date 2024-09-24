import { BiDownload } from "react-icons/bi";
import paper from "../../assets/whitepaper.png";
import Button from "../../components/reUse/Button";

const WhitePaper = () => {
	return (
		<div>
			{" "}
			<div className="min-h-[120vh] lg:min-h-[80vh] bg-blue-600 w-full flex justify-center items-center py-[15vh] lg:py-0">
				<div className="w-[80%] text-white flex flex-wrap justify-between space-y-10 lg:space-y-0">
					<div className="lg:w-1/2">
						<h2 className="text-blue-300 font-semibold text-[23px]">
							WHAT IS COINTRADEX
						</h2>
						<h1 className="text-[35px] mb-5">About The CoinTradeX</h1>
						<p className="mt-5 text-[18px]">
							A cryptocurrency is a digital or virtual currency
							designed to work as a medium of exchange. It uses
							cryptography to secure and verify transactions as well
							as to control the creation of new units of a particular
							cryptocurrency.
						</p>
						<p className="my-5 text-[18px]">
							Essentially, cryptocurrencies are limited entries in a
							database that no one can change unless specific
							conditions are fulfilled.
						</p>
						<Button
							text={"Download Now"}
							icon={<BiDownload />}
						/>
					</div>
					<div className="">
						<img
							src={paper}
							alt=""
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WhitePaper;
