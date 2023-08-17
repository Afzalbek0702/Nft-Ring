import React from 'react'
import Icon1 from '../../Assets/Icon/company-icon1.svg'
import Icon2 from "../../Assets/Icon/company-icon2.svg";
import Icon3 from "../../Assets/Icon/company-icon3.svg";
import Icon4 from "../../Assets/Icon/company-icon4.svg";
import Icon5 from "../../Assets/Icon/company-icon5.svg";
import { Conteiner, CompanyIcon} from "./style";
const Index = () => {
   return (
      <Conteiner>
			<CompanyIcon src={Icon1} />
			<CompanyIcon src={Icon2} />
			<CompanyIcon src={Icon3} />
			<CompanyIcon src={Icon5} />
			<CompanyIcon src={Icon4} />
		</Conteiner>
	);
}

export default Index
