import React from "react";
import { data } from "../../utils/MarketCard";
import Icon from "../../Assets/Icon/icon2.png";
import {
	Conteiner,
	M_Title,
	M_Dec,
	Wrapper,
	M_Card,
	Img,
	Title,
	Price,
	User,
	User_Img,
	User_name,
	Price_icon,
} from "./style";

const index = () => {
	return (
		<Conteiner>
			<M_Title>Exclusive NFT.Ring drops</M_Title>
			<M_Dec>
				This NFT website is a website that features buying and selling, news and
				blogs. Designed with a minimalist and informative concept
			</M_Dec>
			<Wrapper>
				{data.map((v) => (
					<M_Card key={v.id}>
						<Img src={v.img} />
						<Title>{v.title}</Title>
						<Price>
							<Price_icon src={Icon} />
							{v.price}
						</Price>
						<User>
							<User_Img src={v.user.user_img} />
							<User_name>{v.user.user_name}</User_name>
						</User>
					</M_Card>
				))}
			</Wrapper>
		</Conteiner>
	);
};

export default index;
