import React from "react";
import {
	Conteiner,
	HeaderTitle,
	HeaderDec,
	Wrapper,
	HeaderCard,
	HeaderCardImg,
   HeaderCardTitle,
} from "./style";
import Rasm1 from "../../Assets/Image/greenring.png";
import Rasm2 from "../../Assets/Image/redring.png";
import Rasm3 from "../../Assets/Image/purple-ring.png";
import Rasm4 from "../../Assets/Image/blue-ring.png";
const Header = () => {
	return (
		<Conteiner>
			<HeaderTitle>New Generation of Online Shopping</HeaderTitle>
			<HeaderDec>
				This NFT website is a website that features buying and selling, news and
				blogs. Designed with a minimalist and informative concept
			</HeaderDec>
			<Wrapper>
				<HeaderCard color={"green"}>
					<HeaderCardImg src={Rasm1} />
					<HeaderCardTitle>Green ring</HeaderCardTitle>
				</HeaderCard>
				<HeaderCard color={"red"}>
					<HeaderCardImg src={Rasm2} />
					<HeaderCardTitle>Red ring</HeaderCardTitle>
				</HeaderCard>
				<HeaderCard color={"purple"}>
					<HeaderCardImg src={Rasm3} />
					<HeaderCardTitle>Purple ring</HeaderCardTitle>
				</HeaderCard>
				<HeaderCard color={"blue"}>
					<HeaderCardImg src={Rasm4} />
					<HeaderCardTitle>Blue ring</HeaderCardTitle>
				</HeaderCard>
			</Wrapper>
		</Conteiner>
	);
};

export default Header;
