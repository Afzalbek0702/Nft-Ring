import styled from "styled-components";
const BackgroundColor = (props) => {
	switch (props.color) {
		case "green":
			return "linear-gradient(315deg, #00b712 0%, #5aff15 74%)";
		case "red":
			return "linear-gradient(133deg, #ffc301 0%, #ff6533 100%)";
		case "purple":
			return "linear-gradient(315deg, #9921e8 0%, #5f72be 74%)";
		case "blue":
			return "linear-gradient(315deg, #63a4ff 0%, #83eaf1 74%);";
		default:
			break;
	}
};
export const Conteiner = styled.div`
	width: 100%;
	height: auto;
	background-color: #f1f1f1;
   /* background-color: white; */
	color: black;
	display: flex;
	flex-direction: column;
	align-items: center;

`;
export const HeaderTitle = styled.h2`
	max-width: 488px;
	margin: 60px 30px 0;
	color: #232222;
	text-align: center;
	font-family: Montserrat;
	font-size: 48px;
	font-style: normal;
	font-weight: 700;
	line-height: 141.9%;
	letter-spacing: 0.96px;
	@media screen and (max-width: 550px) {
		font-size: 35px;
	}
	@media screen and (max-width: 350px) {
		font-size: 26px;
	}
`;
export const HeaderDec = styled.h3`
	max-width: 770px;
	margin: 24px 30px 0;
	color: #232222;
	text-align: center;
	font-family: Montserrat;
	font-size: 20px;
	font-style: normal;
	font-weight: 400;
	line-height: 163.9%; /* 32.78px */
	letter-spacing: 0.4px;
	@media screen and (max-width: 550px) {
		font-size: 18px;
	}
	@media screen and (max-width: 350px) {
		font-size: 15px;
	}
`;
export const Wrapper = styled.div`
   margin-top: 50px;
   margin-bottom: 60px;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
`;
export const HeaderCard = styled.div`
	margin: 10px 20px;
	max-width: 310px;
	width: 100%;
	height: 448px;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	border-radius: 20px;
	text-align: center;
	&:hover {
		color: white;
		background-image: ${BackgroundColor};
	}
	transition: 0.2s all;
	&:hover {
		transform: scale(1.07);
	}
	@media screen and (max-width: 450px) {
		max-width: 260px;
		height: 380px;
	}
	@media screen and (max-width: 300px) {
		max-width: 180px;
		height: 260px;
	}
`;
export const HeaderCardImg = styled.img`
	width: 310px;
	height: 344px;
	@media screen and (max-width: 450px) {
		max-width: 260px;
		height: 294px;
	}
	@media screen and (max-width: 300px) {
		max-width: 180px;
		height: 200px;
	}
`;
export const HeaderCardTitle = styled.h1`
	font-family: Montserrat;
	font-size: 32px;
	font-style: normal;
	font-weight: 700;
	line-height: 141.9%;
	letter-spacing: 0.64px;
	@media screen and (max-width: 450px) {
		font-size: 28px;
	}
	@media screen and (max-width: 450px) {
		font-size: 20px;
	}
`;
