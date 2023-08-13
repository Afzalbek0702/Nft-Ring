import styled from "styled-components";
import { FaBars, FaXmark } from "react-icons/fa6";
import bg from "../../Assets/Image/bg.png";
const Open = (props) => {
	switch (props.isopen) {
		case "close":
			return "400px";
		case "open":
			return "-70px";
		default:
			break;
	}
};

export const Conteiner = styled.div`
	width: 100%;
	height: auto;
	color: white;
	background: url(${bg}), lightgray 50% / cover no-repeat;
	background-size: cover;
	/* overflow: hidden; */
`;

export const Nav = styled.div`
	padding: 35px;
	display: flex;
	align-items: center;
	justify-content: space-around;
	font-family: "Montserrat", sans-serif;
	font-weight: 700;
	font-size: 20px;

	@media screen and (max-width: 900px) {
		display: none;
	}
`;
export const NavA = styled.a`
	margin: 0 20px;
	color: #fff;
	font-family: "Montserrat", sans-serif;
	font-size: 20px;
	font-weight: 400;
	line-height: 175.4%;
	letter-spacing: 0.4px;
	cursor: default;
	@media screen and (max-width: 900px) {
		font-size: 18px;
		margin: 0 15px;
	}
`;
export const NavItem = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
	@media screen and (max-width: 400px) {
		font-size: 15px;
	}
`;
export const NavLogo = styled.img`
	font-family: "Montserrat", sans-serif;
	font-weight: 700;
	margin-right: 17px;

	@media screen and (max-width: 400px) {
		width: 30px;
		margin-right: 14px;
	}
	@media screen and (max-width: 200px) {
		width: 20px;
		margin-right: 10px;
	}
`;
export const Button = styled.button`
	width: 113px;
	height: 48px;
	flex-shrink: 0;
	border-radius: 10px;
	background: var(
		--gradien-2,
		linear-gradient(133deg, #ffc301 0%, #ff6533 100%)
	);
	box-shadow: 15px 15px 35px 0px rgba(226, 142, 15, 0.18);
	color: #f4f4f4;
	font-family: Montserrat;
	font-size: 20px;
	font-style: normal;
	font-weight: 700;
	line-height: 175.4%;
	letter-spacing: 0.4px;
	transition: 0.2s all;
	&:hover {
		border: 1px solid #ff8e1e;
		transform: scale(1.1);
		background: none;
	}
	@media screen and (max-width: 200px) {
		width: 95px;
		height: 38px;
		font-size: 16px;
		font-weight: 600;
	}
`;
export const HeadTitle = styled.div`
	color: #fff;
	font-family: Montserrat;
	font-size: 48px;
	font-style: normal;
	font-weight: 700;
	line-height: 141.9%; /* 68.112px */
	letter-spacing: 0.96px;
	width: 475px;
	@media screen and (max-width: 850px) {
		max-width: 375px;
		width: 100%;
		font-size: 35px;
	}
	@media screen and (max-width: 450px) {
		max-width: 375px;
		width: 100%;
		font-size: 22px;
		line-height: 120%; /* 68.112px */
		letter-spacing: 0;
		font-weight: 500;
	}
`;
export const Head = styled.div`
	min-height: 312px;
	margin-left: 177px;
	margin-top: 120px;
	@media screen and (max-width: 850px) {
		padding: 90px 120px;
		margin: 0px;
	}
	@media screen and (max-width: 600px) {
		margin: 0px;
		padding: 40px 20px;
	}
`;
export const HeadDec = styled.div`
	margin-top: 40px;
	width: 440px;
	height: 132px;
	flex-shrink: 0;
	color: #fff;
	font-family: Montserrat;
	font-size: 20px;
	font-style: normal;
	font-weight: 400;
	line-height: 157.9%;
	letter-spacing: 0.4px;
	@media screen and (max-width: 850px) {
		font-size: 18px;
		height: auto;
		width: auto;
	}
	@media screen and (max-width: 450px) {
		font-size: 14px;
		height: auto;
		width: auto;
		font-weight: 200;
	}
`;

export const HeadButton = styled.button`
	width: 155px;
	height: 48px;
	margin-top: 40px;
   margin-bottom: 130px;
	border-radius: 10px;
	background: var(
		--gradien-2,
		linear-gradient(133deg, #ffc301 0%, #ff6533 100%)
	);
	box-shadow: 15px 15px 35px 0px rgba(226, 142, 15, 0.18);
	color: #f4f4f4;
	font-family: Montserrat;
	font-size: 20px;
	font-style: normal;
	font-weight: 700;
	line-height: 175.4%; /* 35.08px */
	letter-spacing: 0.4px;
	transition: 0.2s all;
	&:hover {
		border: 1px solid #ff8e1e;
		background: none;
		transform: scale(1.1);
	}
	@media screen and (max-width: 350px) {
		width: 135px;
		height: 38px;
		font-size: 18px;
		font-weight: 600;
		letter-spacing: 0px;
		line-height: 100%; /* 35.08px */
	}
	@media screen and (max-width: 200px) {
		width: 115px;
		height: 38px;
		font-size: 16px;
		font-weight: 600;
	}
`;
export const Mobile = styled.div`
	display: none;
	overflow: hidden;
	@media screen and (max-width: 900px) {
		display: block;
		padding: 35px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-family: "Montserrat", sans-serif;
		font-weight: 700;
		font-size: 20px;
	}
	@media screen and (max-width: 220px) {
		padding: 20px;
	}
`;

export const Fabars = styled(FaBars)`
	font-size: 30px;
	transition: 0.2s all;
	&:hover {
		transform: scale(1.2);
	}
	&:active {
		transform: scale(1);
	}
	@media screen and (max-width: 300px) {
		font-size: 20px;
	}
`;
export const MobileActive = styled.div`
	/* max-width: 300px; */
	width: 250px;
	height: 101vh;
	position: fixed;
	top: 0%;
	transform: translateX(${Open});
	background-color: #12121a;
	z-index: 2;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	transition: 0.5s all;
	/* @media screen and (max-width:300px) {
   width:200px;
   } */
`;
export const MItem = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	/* justify-content: end; */
	margin: 20px;

`;
export const Faxmark = styled(FaXmark)`
	font-size: 35px;
	position: relative;
	left: 70px;
	/* bottom:20px ; */
	/* margin-left: 190px; */
	/* float: right; */
	transition: 0.2s all;
	&:hover {
		transform: scale(1.2);
	}
	&:active {
		transform: scale(1);
	}
	@media screen and (max-width: 250px) {
		font-size: 25px;
	}
`;
export const MobileNavA = styled(NavA)`
	margin: 15px 0;
   @media screen and (max-width:250px) {
    font-size:16px ;
   }
`;
