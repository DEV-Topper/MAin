import { useEffect, useState } from "react";
import Button from "../reUse/Button";
import { BsMenuButton } from "react-icons/bs";
import { MdMenu } from "react-icons/md";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";

const Header = () => {
	const [state, setState] = useState(false);

	useEffect(() => {
		const func = () => {
			if (window.pageYOffset > 2) {
				if (!document.startViewTransition) {
					setState(true);
				} else {
					document.startViewTransition(() => {
						setState(true);
					});
				}
			} else {
				if (!document.startViewTransition) {
					setState(false);
				} else {
					document.startViewTransition(() => {
						setState(false);
					});
				}
			}
		};

		window.addEventListener("scroll", func);

		return () => {
			window.removeEventListener("scroll", func);
		};
	}, []);

	return (
		<div
			className={`navbar h-[64px] top-0 z-[99] fixed w-full flex justify-center mt-10  ${
				state ? "bg-blue-700" : "bg-transparent"
			} `}
		>
			<div className="w-[80%] text-white flex justify-between">
				<div className="navbar-start w-auto">
					<div className="dropdown">
						<div
							tabIndex={0}
							role="button"
							className="btn btn-ghost xl:hidden"
						>
							<MdMenu size={20} />
						</div>
						<ul
							tabIndex={0}
							className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 bg-gray-100 font-semibold text-blue-700"
						>
							<li>
								<Link
									smooth={true}
									activeStyle={{
										color: "lightblue",
										fontWeight: "bold",
										background: "transparent",
										border: "1px solid white",
									}}
									duration={500}
									to="HIW"
								>
									How It Works{" "}
								</Link>
							</li>

							<li>
								<Link
									smooth={true}
									activeClass="active"
									spy={true}
									duration={500}
									activeStyle={{ color: "blue", fontWeight: "bold" }}
									to="about"
								>
									About
								</Link>
							</li>

							<li>
								<Link
									smooth={true}
									activeClass="active"
									spy={true}
									duration={500}
									activeStyle={{
										color: "lightblue",
										fontWeight: "bold",
										background: "transparent",
										border: "1px solid white",
									}}
									to="token"
								>
									Token
								</Link>
							</li>

							<li>
								<Link
									smooth={true}
									activeClass="active"
									spy={true}
									duration={500}
									activeStyle={{
										color: "lightblue",
										fontWeight: "bold",
										background: "transparent",
										border: "1px solid white",
									}}
									to="map"
								>
									Road Map
								</Link>
							</li>

							<li>
								<Link
									smooth={true}
									activeClass="active"
									spy={true}
									duration={500}
									activeStyle={{
										color: "lightblue",
										fontWeight: "bold",
										background: "transparent",
										border: "1px solid white",
									}}
									to="faq"
								>
									FAQ
								</Link>
							</li>

							<li>
								<Link
									smooth={true}
									activeClass="active"
									spy={true}
									duration={500}
									activeStyle={{
										color: "lightblue",
										fontWeight: "bold",
										background: "transparent",
										border: "1px solid white",
									}}
									to="contact"
								>
									Contact
								</Link>
							</li>

							<li>
								<NavLink to="auth">Sign up</NavLink>
							</li>
							<li>
								<NavLink to="auth/login">Login</NavLink>
							</li>
						</ul>
					</div>
					<a className="btn btn-ghost text-[25px]">CoinTradeX </a>
				</div>
				<div className="navbar-center w-auto hidden xl:flex">
					<ul className="menu menu-horizontal px-1 text-[20px] font-semibold">
						<li>
							<Link
								activeStyle={{
									color: "lightblue",
									fontWeight: "bold",
									background: "transparent",
									border: "1px solid white",
								}}
								smooth={true}
								duration={500}
								spy={true}
								to="HIW"
							>
								How It Works{" "}
							</Link>
						</li>

						<li>
							<Link
								smooth={true}
								duration={500}
								activeStyle={{
									color: "lightblue",
									fontWeight: "bold",
									background: "transparent",
									border: "1px solid white",
								}}
								to="about"
								spy={true}
							>
								About
							</Link>
						</li>

						<li>
							<Link
								smooth={true}
								activeClass="active"
								spy={true}
								duration={500}
								activeStyle={{
									color: "lightblue",
									fontWeight: "bold",
									background: "transparent",
									border: "1px solid white",
								}}
								to="token"
							>
								Token
							</Link>
						</li>

						<li>
							<Link
								smooth={true}
								activeClass="active"
								spy={true}
								duration={500}
								activeStyle={{
									color: "lightblue",
									fontWeight: "bold",
									background: "transparent",
									border: "1px solid white",
								}}
								to="map"
							>
								Road Map
							</Link>
						</li>

						<li>
							<Link
								smooth={true}
								activeClass="active"
								spy={true}
								duration={500}
								activeStyle={{
									color: "lightblue",
									fontWeight: "bold",
									background: "transparent",
									border: "1px solid white",
								}}
								to="faq"
							>
								FAQ
							</Link>
						</li>

						<li>
							<Link
								smooth={true}
								activeClass="active"
								duration={500}
								activeStyle={{
									color: "lightblue",
									fontWeight: "bold",
									background: "transparent",
									border: "1px solid white",
								}}
								spy={true}
								to="contact"
							>
								Contact
							</Link>
						</li>
					</ul>
				</div>
				<div className="navbar-end w-auto justify-end  gap-3 hidden xl:flex">
					<NavLink to="/auth/login">
						<Button text="Login" />
					</NavLink>
					<NavLink to="/auth">
						<Button text="Sign Up" />
					</NavLink>
				</div>
			</div>
		</div>
	);
};

export default Header;
