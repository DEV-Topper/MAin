import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";

import View from "../page/DashboardHome/View";
import Settings from "../components/settings/Settings";
import WalletScreen from "../page/DashboardHome/WalletScreen";
import TransactionScreen from "../page/DashboardHome/TransactionScreen";
import CryptoScreen from "../page/DashboardHome/CryptoScreen";
import ExchangeScreen from "../page/DashboardHome/ExchangeScreen";
import Complains from "../page/DashboardHome/Complainscreen";
import PrivateRouter from "./PrivateRouter";
import AuthLayout from "../components/layout/AuthLayout";
import Register from "../page/auth/Register";
import RegisterCard from "../page/auth/RegisterCard";
import SignIn from "../page/auth/SignIn";
import Token from "../page/auth/Token";
import Loading from "../page/Loading";
import AdminSignIn from "../page/auth/AdminSignIn";
import SellCrypto from "@/page/DashboardHome/SellCrypto";
import BuyCrypto from "@/page/DashboardHome/BuyCrypto";

const DashboardRouter = createBrowserRouter([
	{
		path: "/",
		element: (
			<PrivateRouter>
				<Layout />
			</PrivateRouter>
		),
		children: [
			{
				index: true,
				element: <View />,
			},
			{
				index: true,
				path: "dashboard",
				element: <View />,
			},
			{
				index: true,
				path: "settings",
				element: <Settings />,
			},
			{
				index: true,
				path: "wallet",
				element: <WalletScreen />,
			},
			{
				index: true,
				path: "transaction",
				element: <TransactionScreen />,
			},
			{
				index: true,
				path: "crypto",
				element: <CryptoScreen />,
			},
			{
				index: true,
				path: "crypto/sell",
				element: <SellCrypto />,
			},
			{
				index: true,
				path: "crypto/buy",
				element: <BuyCrypto />,
			},
			{
				index: true,
				path: "exchange",
				element: <ExchangeScreen />,
			},
			{
				index: true,
				path: "complains",
				element: <Complains />,
			},
		],
	},
	{
		path: "/auth",
		element: <AuthLayout />,
		children: [
			{
				index: true,
				element: <Register />,
			},
			{
				index: true,
				path: "login",
				element: <SignIn />,
			},
			{
				index: true,
				path: "register-message",
				element: <RegisterCard />,
			},
			{
				index: true,
				path: "token",
				element: <Token />,
			},
			{
				index: true,
				path: "admin",
				element: <AdminSignIn />,
			},
		],
	},
	{
		path: "*",
		element: <Loading />,
	},
]);

export default DashboardRouter;
