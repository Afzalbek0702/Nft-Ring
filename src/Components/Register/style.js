import { styled } from "styled-components";
import BackgroundImage from "../../Assets/Image/register-bg.png";
export const Conteiner = styled.div`
	width: 100%;
	background: url(${BackgroundImage}) no-repeat;
	background-size: cover;
	background-size: cover;
	min-height: 600px;
	display: flex;
	align-items: center;
`;
export const Wrapper = styled.div`
	margin: 40px 70px 0;
	@media screen and (max-width: 450px) {
		margin: 40px 30px 0;
	}
`;
export const Title = styled.h1`
	color: #232222;
	font: 700 48px Montserrat;
	line-height: 141.9%;
	letter-spacing: 0.96px;
	@media screen and (max-width: 400px) {
		font-size: 28px;
	}
`;
export const Dec = styled.p`
	max-width: 467px;
	margin-top: 20px;
	color: #232222;
	font: 400 20px Montserrat;
	line-height: 164%; /* 32.8px */
	letter-spacing: 0.4px;
	@media screen and (max-width: 400px) {
		font-size: 16px;
	}
`;
export const Input = styled.input`
	padding: 0 20px;
	max-width: 350px;
	width: 350px;
	height: 48px;
	margin-top: 48px;
	border: none;
	border-top-left-radius: 10px;
	border-bottom-left-radius: 10px;
	outline: none;
	font: 400 20px Montserrat;
	&::placeholder {
		color: var(--gray-1, #333);
		font: 400 18px Montserrat;
		line-height: 175.4%; /* 26.31px */
		letter-spacing: 0.3px;
	}
	@media screen and (max-width: 640px) {
		max-width: 250px;
	}
	@media screen and (max-width: 500px) {
		max-width: 170px;
		height: 38px;
		margin-top: 50px;
		font-size: 16px;
		&::placeholder {
			font-size: 12px;
		}
	}
	@media screen and (max-width: 350px) {
		max-width: 100px;
		font-size: 13px;
		&::placeholder {
			font-size: 11px;
		}
		
	}
`;
export const Button = styled.button`
	width: 149px;
	height: 48px;
	flex-shrink: 0;
	color: #fff;
	text-align: center;
	font-family: Montserrat;
	font-size: 20px;
	font-style: normal;
	font-weight: 700;
	line-height: 175.4%; /* 35.08px */
	letter-spacing: 0.4px;
	border-top-right-radius: 10px;
	border-bottom-right-radius: 10px;
	border: none;
	background: linear-gradient(133deg, #ffc301 0%, #ff6533 100%);
	transition: 0.2s all;
	&:hover {
		transform: scale(1.1);
	}
	&:active {
		transform: scale(1);
	}
	@media screen and (max-width: 640px) {
		max-width: 100px;
		font-size: 18px;
	}
	@media screen and (max-width: 500px) {
		max-width: 90px;
		font-size: 14px;
		height: 38px;
	}
	@media screen and (max-width: 500px) {
		max-width: 70px;
		font-size: 12px;
		height: 38px;
	}
`;
