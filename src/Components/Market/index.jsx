import React from "react";
import { data } from "../../utils/MarketCard";
import Icon from "../../Assets/Icon/icon2.png";
import {
	Conteiner,
	MTitle,
	MDec,
	Wrapper,
	MCard,
	Img,
	Title,
	Price,
	User,
	UserImg,
	UserName,
	PriceIcon,
} from "./style";

const Index = () => {
	return (
		<Conteiner>
			<MTitle>Exclusive NFT.Ring drops</MTitle>
			<MDec>
				This NFT website is a website that features buying and selling, news and
				blogs. Designed with a minimalist and informative concept
			</MDec>
			<Wrapper>
				{data.map((v) => (
					<MCard key={v.id}>
						<Img src={v.img} />
						<Title>{v.title}</Title>
						<Price>
							<PriceIcon src={Icon} />
							{v.price}
						</Price>
						<User>
							<UserImg src={v.user.user_img} />
							<UserName>{v.user.user_name}</UserName>
						</User>
					</MCard>
				))}
			</Wrapper>
		</Conteiner>
	);
};

export default Index;
