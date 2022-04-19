import styled from "styled-components";

import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";

const Snek = styled.div`
  padding: 0;
	width: 100%;
	margin-bottom: 30px;
`;

function Peek() {
	return(
	  <Snek id="peek">
		  <img style={{width: `100%`}} src="/images/peek.jpeg" />
		</Snek>
	);
}

export default Peek;
