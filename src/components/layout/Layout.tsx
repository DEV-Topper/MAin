import { Outlet } from "react-router-dom";
import Sider from "../MainStatic/Sider";
import Header from "../MainStatic/Header";
import CryptoHeader from "../static/CryptoHeader";

const Layout = () => {
	return (
		<div className="flex w-[100%]">
			<div className="md:flex w-[250px] h-[100vh] fixed hidden  transition-all duration-300 z-50">
				<Sider />
			</div>
			<div className="flex w-[calc(100%)] justify-end">
				<div className="flex flex-col w-[100%] transition-all duration-300 md:w-[calc(100%-250px)] justify-end">
					<CryptoHeader />
					<Header />
					<div
						className={`min-h-[calc(100vh-72px)] p-4 m-2 border rounded-md mt-24 relative `}
					>
						<Outlet />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Layout;
