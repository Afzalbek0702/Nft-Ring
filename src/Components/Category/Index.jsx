import React from "react";
import { Conteiner, Title, Dec, Wrapper,ImgCard,Img } from "./style";
import data from '../../utils/ImgCard'
const index = () => {
   return (
			<Conteiner>
				<Title>Browse by category</Title>
				<Dec>
					This NFT website is a website that features buying and selling, news
					and blogs. Designed with a minimalist and informative concept
         </Dec>
         <Wrapper>
            {
               data.map(v =>
            <ImgCard key={v.id}>
               <Img src={v.img} alt="wsdsa"/>
            </ImgCard>
               )
            }
         </Wrapper>
			</Conteiner>
		);
};

export default index;
