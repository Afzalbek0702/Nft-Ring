import styled from "styled-components";

export const Conteiner = styled.div`
background: #F4F4F4;
min-height: 208px;
display: flex;
padding: 0 40px;
align-items: center;
justify-content: space-evenly;
flex-wrap: wrap;
`

export const CompanyIcon = styled.img`
   @media screen and (max-width:370px) {
      height: 60px;
   }
   @media screen and (max-width:230px) {
      height: 30px;
   }
`