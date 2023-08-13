import  styled  from "styled-components";

export const Conteiner = styled.div`
	margin-top: 80px;
	display: flex;
	flex-direction: column;
	align-items: center;
   justify-content: center;
`;
export const Title = styled.h1`
	color: #232222;
	text-align: center;
	font: 700 48px Montserrat;
	line-height: 110.9%; /* 68.112px */
	letter-spacing: 0.96px;
	@media screen and (max-width: 540px) {
		font-size: 28px;
	}
`;
export const Dec = styled.h2`
	margin-top: 24px;
	max-width: 770px;
	color: #232222;
	text-align: center;
	font-style: normal;
	line-height: 163.9%; 
	letter-spacing: 0.4px;
	font: 400 20px Montserrat;
	@media screen and (max-width: 400px) {
		font-size: 16px;
	}
`;
export const Wrapper = styled.div`
	margin: 28px;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
`;
export const ImgCard = styled.div`
	margin: 18px;
	width: 310px;
	height: 236px;
	border-radius: 20px;
	overflow: hidden;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: 0.2s all;
	@media screen and (max-width: 370px) {
		width: 200px;
		height: 126px;
		margin: 18px 0;
	}
	@media screen and (max-width: 200px) {
		width: 160px;
		height: 106px;
		margin: 18px 0;
	}
	&:hover {
		transform: scale(1.09);
	}
`;
export const Img = styled.img`
	width: 350px;
	@media screen and (max-width: 370px) {
		width: 230px;
	}
`;
