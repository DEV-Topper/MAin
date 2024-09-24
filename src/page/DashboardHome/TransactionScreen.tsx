import { IoSearchOutline } from "react-icons/io5";
import { HiOutlineDownload } from "react-icons/hi";
import { FaAngleDown } from "react-icons/fa6";
import { IoMdCheckmark } from "react-icons/io";
import pic from "../../assets/Dog.png";
import pix from "../../assets/bitcoinpic.png";
import pix1 from "../../assets/ethereumlogo.png";
import pix2 from "../../assets/litecoinlogo.png";
import pix3 from "../../assets/EthereumClassic.png";
import { TbArrowsDownUp } from "react-icons/tb";

const TransactionScreen = () => {
	document.title = "Transaction Screen";

	return (
		<div>
			<div className="flex justify-between items-center">
				<label className="input input-bordered flex items-center gap-2 w-[190px] h-9 ml-4">
					<IoSearchOutline size={25} />
					<input
						type="text"
						className="text-[12px] font-bold"
						placeholder="Search"
					/>
				</label>
				<div
					className="flex gap-3
				"
				>
					<div className="text-[14px] font-bold flex items-center w-[110px] h-[40px] bg-slate-500 justify-center rounded-md cursor-pointer">
						<HiOutlineDownload className="mr-[5px]" />
						Get Report
					</div>
					<div className="text-[14px] font-bold flex items-center w-[110px] h-[40px] bg-slate-500 justify-center rounded-md cursor-pointer">
						Newest
						<FaAngleDown className="m-[5px]" />
					</div>
				</div>
			</div>
			<div className="overflow-x-auto mt-9">
				<table className="table">
					{/* head */}
					<thead>
						<tr>
							<th className="flex items-center ">
								Transaction ID
								<TbArrowsDownUp className="ml-1" />
							</th>
							<th>Done</th>
							<th>From</th>
							<th>To</th>
							<th>Coin</th>
							<th>Amount</th>
							<th>Status</th>
						</tr>
					</thead>
					<tbody>
						{/* row 1 */}
						<tr>
							<th className="flex items-center mt-3">
								<label>
									<input
										type="checkbox"
										className="checkbox "
									/>
								</label>
								<div className="ml-2 text-[13px]">#322324692024</div>
							</th>
							<td>
								<div className="text-[13px] font-bold">
									January 24, 2022
								</div>
								<div className="text-[13px] font-semibold">
									5.20pm
								</div>
							</td>
							<td>
								<div className="flex items-center gap-2">
									<div className="avatar">
										<div className="mask mask-squircle w-10 h-10">
											<img
												src={pic}
												alt="Avatar"
											/>
										</div>
									</div>
									<div>
										<div className="font-bold text-[13px]">Ekene</div>
									</div>
								</div>
							</td>
							<td>
								<div className="flex items-center gap-2">
									<div className="avatar">
										<div className="mask mask-squircle w-10 h-10">
											<img
												src={pic}
												alt="Avatar"
											/>
										</div>
									</div>
									<div>
										<div className="font-bold text-[13px]">
											R.Ahmed
										</div>
									</div>
								</div>
							</td>
							<td>
								<div className="flex items-center gap-2">
									<div className="avatar">
										<div className="mask mask-squircle w-6 h-6">
											<img
												src={pix3}
												alt="Avatar"
											/>
										</div>
									</div>
									<div>
										<div className="font-bold text-[13px]">
											Ethereum Classic
										</div>
									</div>
								</div>
							</td>
							<td>
								<div className="font-bold text-[13px]">$400.00</div>
							</td>
							<th>
								<button className="btn btn-ghost btn-xs bg-red-300 w-36 h-10 text-red-600">
									CANCELLED
								</button>
							</th>
						</tr>
						{/* row 2 */}
						<tr>
							<th className="flex items-center mt-3">
								<label>
									<input
										type="checkbox"
										className="checkbox "
									/>
								</label>
								<div className="ml-2 text-[13px]">#322324692024</div>
							</th>
							<td>
								<div className="text-[13px] font-bold">
									January 24, 2022
								</div>
								<div className="text-[13px] font-semibold">
									5.20pm
								</div>
							</td>
							<td>
								<div className="flex items-center gap-2">
									<div className="avatar">
										<div className="mask mask-squircle w-10 h-10">
											<img
												src={pic}
												alt="Avatar"
											/>
										</div>
									</div>
									<div>
										<div className="font-bold text-[13px]">Ekene</div>
									</div>
								</div>
							</td>
							<td>
								<div className="flex items-center gap-2">
									<div className="avatar">
										<div className="mask mask-squircle w-10 h-10">
											<img
												src={pic}
												alt="Avatar"
											/>
										</div>
									</div>
									<div>
										<div className="font-bold text-[13px]">
											R.Ahmed
										</div>
									</div>
								</div>
							</td>
							<td>
								<div className="flex items-center gap-2">
									<div className="avatar">
										<div className="mask mask-squircle w-6 h-6">
											<img
												src={pix}
												alt="Avatar"
											/>
										</div>
									</div>
									<div>
										<div className="font-bold text-[13px]">
											Bitcoin
										</div>
									</div>
								</div>
							</td>
							<td>
								<div className="font-bold text-[13px]">$400.00</div>
							</td>
							<th>
								<button className="btn btn-ghost btn-xs bg-green-400 w-36 h-10 ">
									<IoMdCheckmark />
									COMPLETED
								</button>
							</th>
						</tr>
						{/* row 3 */}
						<tr>
							<th className="flex items-center mt-3">
								<label>
									<input
										type="checkbox"
										className="checkbox "
									/>
								</label>
								<div className="ml-2 text-[13px]">#322324692024</div>
							</th>
							<td>
								<div className="text-[13px] font-bold">
									January 24, 2022
								</div>
								<div className="text-[13px] font-semibold">
									5.20pm
								</div>
							</td>
							<td>
								<div className="flex items-center gap-2">
									<div className="avatar">
										<div className="mask mask-squircle w-10 h-10">
											<img
												src={pic}
												alt="Avatar"
											/>
										</div>
									</div>
									<div>
										<div className="font-bold text-[13px]">Ekene</div>
									</div>
								</div>
							</td>
							<td>
								<div className="flex items-center gap-2">
									<div className="avatar">
										<div className="mask mask-squircle w-10 h-10">
											<img
												src={pic}
												alt="Avatar"
											/>
										</div>
									</div>
									<div>
										<div className="font-bold text-[13px]">
											R.Ahmed
										</div>
									</div>
								</div>
							</td>
							<td>
								<div className="flex items-center gap-2">
									<div className="avatar">
										<div className="mask mask-squircle w-6 h-6">
											<img
												src={pix2}
												alt="Avatar"
											/>
										</div>
									</div>
									<div>
										<div className="font-bold text-[13px]">
											Litecoin
										</div>
									</div>
								</div>
							</td>
							<td>
								<div className="font-bold text-[13px]">$400.00</div>
							</td>
							<th>
								<button className="btn btn-ghost btn-xs bg-slate-500 w-36 h-10">
									PENDING
								</button>
							</th>
						</tr>
						{/* row 4 */}
						<tr>
							<th className="flex items-center mt-3">
								<label>
									<input
										type="checkbox"
										className="checkbox "
									/>
								</label>
								<div className="ml-2 text-[13px]">#322324692024</div>
							</th>
							<td>
								<div className="text-[13px] font-bold">
									January 24, 2022
								</div>
								<div className="text-[13px] font-semibold">
									5.20pm
								</div>
							</td>
							<td>
								<div className="flex items-center gap-2">
									<div className="avatar">
										<div className="mask mask-squircle w-10 h-10">
											<img
												src={pic}
												alt="Avatar"
											/>
										</div>
									</div>
									<div>
										<div className="font-bold text-[13px]">Ekene</div>
									</div>
								</div>
							</td>
							<td>
								<div className="flex items-center gap-2">
									<div className="avatar">
										<div className="mask mask-squircle w-10 h-10">
											<img
												src={pic}
												alt="Avatar"
											/>
										</div>
									</div>
									<div>
										<div className="font-bold text-[13px]">
											R.Ahmed
										</div>
									</div>
								</div>
							</td>
							<td>
								<div className="flex items-center gap-2">
									<div className="avatar">
										<div className="mask mask-squircle w-6 h-6">
											<img
												src={pix1}
												alt="Avatar"
											/>
										</div>
									</div>
									<div>
										<div className="font-bold text-[13px]">
											Ethereum
										</div>
									</div>
								</div>
							</td>
							<td>
								<div className="font-bold text-[13px]">$400.00</div>
							</td>
							<th>
								<button className="btn btn-ghost btn-xs bg-green-400 w-36 h-10">
									<IoMdCheckmark />
									COMPLETED
								</button>
							</th>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default TransactionScreen;
