import styled from "styled-components";

export const Conteiner = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;
export const MTitle = styled.h1`
	margin: 25px 0;
	color: #232222;
	text-align: center;
	font-family: Montserrat;
	font-size: 48px;
	font-style: normal;
	font-weight: 700;
	line-height: 141.9%;
	letter-spacing: 0.96px;
	@media screen and (max-width: 370px) {
		font-size: 28px;
	}
`;
export const MDec = styled.p`
	max-width: 770px;
	min-height: 72px;
	margin: 5px;
	flex-shrink: 0;
	color: #232222;
	text-align: center;
	font-family: Montserrat;
	font-size: 20px;
	font-style: normal;
	font-weight: 400;
	line-height: 163.9%; /* 32.78px */
	letter-spacing: 0.4px;
	@media screen and (max-width: 370px) {
		font-size: 16px;
	}
`;
export const Wrapper = styled.div`
	margin-top: 46px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
`;
export const MCard = styled.div`
	margin: 18px;
	max-width: 310px;
	height: 420px;
	border-radius: 20px;
	background: #f4f4f4;
	box-shadow: 12px 18px 30px 0px rgba(0, 0, 0, 0.1);
	transition: 0.2s all;
	&:hover {
		transform: scale(1.07);
	}
	@media screen and (max-width: 370px) {
		margin: 8px;
		max-width: 200px;
		height: 310px;
	}
`;
export const Img = styled.img`
	width: 310px;
	height: 236px;
	border-radius: 20px;
	@media screen and (max-width: 370px) {
		width: 202px;
		height: 126px;
	}
`;
export const Title = styled.h1`
	margin: 20px 0px 0px 29px;
	color: #232222;
	font-family: Montserrat;
	font-size: 18px;
	font-style: normal;
	font-weight: 700;
	line-height: 110.4%; /* 31.572px */
	letter-spacing: 0.36px;
`;
export const Price = styled.h2`
	margin-top: 10px;
	display: flex;
	align-items: center;
	margin-left: 30px;
	color: #ff8e1e;
	font-family: Montserrat;
	font-size: 24px;
	font-style: normal;
	font-weight: 700;
	line-height: 175.4%; /* 42.096px */
	letter-spacing: 0.48px;
	@media screen and (max-width: 370px) {
		font-size: 22px;
	}
`;
export const PriceIcon = styled.img`
	margin-right: 16px;
`;
export const User = styled.div`
	margin-top: 20px;
	/* width: 260px; */
	display: flex;
	align-items: center;
	@media screen and (max-width: 370px) {
		margin-top: 10px;
	}
`;
export const UserImg = styled.img`
	width: 42px;
	height: 42px;
	margin: 0 17px 0 29px;
	border-radius: 42px;
	@media screen and (max-width: 370px) {
		width: 32px;
		height: 32px;
		margin: 0 13px 0 29px;
	}
`;
export const UserName = styled.h2`
	color: #232222;
	font-family: Montserrat;
	font-size: 16px;
	font-style: normal;
	font-weight: 700;
	line-height: 110.4%; /* 28.064px */
	letter-spacing: 0.32px;
`;
