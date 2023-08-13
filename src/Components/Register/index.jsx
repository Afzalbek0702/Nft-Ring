import React from "react";
import { Conteiner, Title, Wrapper, Dec,Input,Button } from "./style";
const index = () => {
   return (
			<Conteiner>
				<Wrapper>
					<Title>Stay in the loop</Title>
					<Dec>
						Join our mailing list to stay in the loop with our newest feature
						releases, NFT drops, and tips and tricks for navigating NFT.Ring
            </Dec>
            <Input placeholder="Email" />
            <Button>Register</Button>
				</Wrapper>
			</Conteiner>
		);
};

export default index;
