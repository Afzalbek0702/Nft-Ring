import React from "react";
import logo from "../../Assets/Image/logo.png";
import {
	Conteiner,
	ColumonFirst,
	ColumonSecond,
	Logo,
	LogoImg,
	FirstText,
	Title,
	SecondText,
} from "./style";
const index = () => {
	return (
		<Conteiner>
			<ColumonFirst>
				<Logo>
					<LogoImg src={logo} />
					NFT.Ring
				</Logo>
				<FirstText>
					The world’s first and largest digital marketplace for crypto
					collectibles and non-fungible tokens (NFTs). Buy, sell, and discover
					exclusive digital assets.
				</FirstText>
			</ColumonFirst>
			<ColumonSecond>
				<Title>Marketplace</Title>
				<br />
				<SecondText>
					All NFTs <br />
					<br />
					New
					<br />
					<br /> Art
					<br />
					<br /> Music
					<br />
					<br /> Domain Names
					<br />
					<br /> Virtual Worlds
					<br />
					<br /> Trading Cards
					<br />
					<br /> Collectibles
					<br />
					<br /> Sports
					<br />
					<br /> Utility
				</SecondText>
			</ColumonSecond>
			<ColumonSecond>
				<Title>My Account</Title>
				<br />
				<SecondText>
					My Profile <br />
					<br /> My Collections <br />
					<br /> My Favorites <br />
					<br /> My Account Settings <br />
					<br /> About
					<br />
					<br /> Careers
				</SecondText>
			</ColumonSecond>
			<ColumonSecond>
				<Title>Resources</Title>
				<br />
				<br />
				<SecondText>
					Help Center
					<br />
					<br /> Partners
					<br />
					<br /> Suggestions
					<br />
					<br /> Discord Community
					<br />
					<br /> Blog
					<br />
					<br /> Docs
					<br />
					<br /> Newsletter
				</SecondText>
			</ColumonSecond>
		</Conteiner>
	);
};

export default index;
