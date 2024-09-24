import { Outlet, useLocation } from "react-router-dom";
import Header from "../static/Header";
import Footer from "../static/Footer";
import { useEffect } from "react";
import CryptoHeader from "../static/CryptoHeader";

const HeroLayout = () => {
	return (
		<div>
			<CryptoHeader />
			<Header />
			<Outlet />
			<Footer />
		</div>
	);
};

export default HeroLayout;
