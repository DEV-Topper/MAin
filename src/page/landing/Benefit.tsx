import secure from "../../assets/secure.png";
import tokens from "../../assets/token.png";
import cash from "../../assets/case.png";
import phone from "../../assets/app.png";
import ease from "../../assets/payment.png";

const Benefit = () => {
	return (
		<div className="w-full flex justify-center items-center min-h-[50vh] pt-10 lg:pt-0 bg-blue-600">
			<div className="w-[80%] flex flex-col items-center text-center text-white">
				<h4 className="font-medium text-[24px] text-blue-300">
					WHY COINTRADEX
				</h4>
				<h1 className="text-[30px] font-bold ">
					Competitive Benefit
				</h1>
				<p className="font-semibold my-5">
					Competitive advantages are conditions that allow a company
					or country to produce a good <br /> or service at equal
					value but at a lower price or in a more desirable fashion
				</p>
				<div className="w-full flex flex-wrap justify-center gap-5">
					<div className="p-3 flex flex-col items-center space-y-2 rounded-lg bg-blue-700 shadow-lg">
						<img
							src={secure}
							alt=""
						/>
						<p className="font-semibold text-[18px]">Safe & Secure</p>
					</div>
					<div className="p-3 flex flex-col items-center space-y-2 rounded-lg bg-blue-700 shadow-lg">
						<img
							src={tokens}
							alt=""
						/>
						<p className="font-semibold text-[18px]">
							Excerpt Tokens
						</p>
					</div>
					<div className="p-3 flex flex-col items-center space-y-2 rounded-lg bg-blue-700 shadow-lg">
						<img
							src={ease}
							alt=""
						/>
						<p className="font-semibold text-[18px]">Easy Payment</p>
					</div>
					<div className="p-3 flex flex-col items-center space-y-2 rounded-lg bg-blue-700 shadow-lg">
						<img
							src={cash}
							alt=""
						/>
						<p className="font-semibold text-[18px]">
							Daily Cash Outs
						</p>
					</div>
					<div className="p-3 flex flex-col items-center space-y-2 rounded-lg bg-blue-700 shadow-lg">
						<img
							src={phone}
							alt=""
						/>
						<p className="font-semibold text-[18px]">
							Smart Application
						</p>
					</div>
					<div className="p-3 flex flex-col items-center space-y-2 rounded-lg bg-blue-700 shadow-lg">
						<img
							src={secure}
							alt=""
						/>
						<p className="font-semibold text-[18px]">NO DILUTION</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Benefit;
