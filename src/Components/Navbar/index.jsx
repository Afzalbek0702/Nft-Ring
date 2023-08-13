import React from "react";
import logo from "../../Assets/Image/logo.png";

import {
	Conteiner,
	Nav,
	NavItem,
	NavA,
	NavLogo,
	Button,
	Mobile,
	Fabars,
	HeadTitle,
	Head,
	HeadDec,
	HeadButton,
	MobileActive,
	MItem,
	Faxmark,
	MobileNavA,
} from "./style";
import { useState } from "react";

const Navbar = () => {
	const [isOpen, setisOpen] = useState('close');
	// console.log(isOpen);
	return (
		<Conteiner>
			<Nav>
				<NavItem>
					<NavLogo src={logo} />
					NFT.Ring
				</NavItem>
				<NavItem>
					<NavA>Marketing</NavA>
					<NavA>Activity</NavA>
					<NavA>Feature</NavA>
					<NavA>Community</NavA>
				</NavItem>
				<NavItem>
					<Button>Login</Button>
				</NavItem>
			</Nav>
			<Mobile>
				<NavItem>
					<NavLogo src={logo} />
					NFT.Ring
				</NavItem>
				<NavItem>
					<Fabars onClick={() => setisOpen('open')} />
					<MobileActive isopen={isOpen}>
						<MItem>
							<Faxmark onClick={()=>setisOpen('close')}  />
							<MobileNavA>Marketing</MobileNavA>
							<MobileNavA>Activity</MobileNavA>
							<MobileNavA>Feature</MobileNavA>
							<MobileNavA>Community</MobileNavA>
						</MItem>
						<MItem>
							<Button>Login</Button>
						</MItem>
					</MobileActive>
				</NavItem>
			</Mobile>

			<Head>
				<HeadTitle>The Home of Minimalist Buying and Selling</HeadTitle>
				<HeadDec>
					This NFT website is a website that features buying and selling, news
					and blogs. Designed with a minimalist and informative concept
				</HeadDec>
				<HeadButton>Explore</HeadButton>
			</Head>
		</Conteiner>
	);
};

export default Navbar;
