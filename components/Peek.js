import styled from "styled-components";

import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";

const Snek = styled.div`
  background: #fff;
	width: 100%;
	padding: 20px;
	margin-bottom: 30px;
`;

const SnekTitle = styled.div`
  text-align: center;
`;

const SnekContent = styled.div`
	padding: 10px 0;
	display: grid;
	grid-template-columns: repeat(auto-fit,calc(25% - 15px));
	grid-auto-flow: dense;
	grid-gap: 20px;
	gap: 20px;
	max-width: 1400px;
`;

const peekData = [
	{name: "作品1", img: "/peek/1.jpg", url: "#"},
	{name: "作品2", img: "/peek/2.png", url: "#"},
	{name: "作品3", img: "/peek/3.png", url: "#"},
	{name: "作品4", img: "/peek/4.jpeg", url: "#"}
];

function Peek() {
	return(
	  <Snek id="peek">
		  <SnekTitle>
			  <Typography
			    variant="h4"
			    style={{
			      fontWeight: 700,
			    	padding: `10px 0`,
			    	borderBottom: `1px dashed #ddd`,
						color: `#b7b7b7`
			    }} 
			  	component="div" 
			  	gutterBottom>
			    S N E A K - P E E K
			  </Typography>
			</SnekTitle>
			<SnekContent>
			  {peekData.map((item,key) => {
					return (
						<Tooltip title={item.name} key={key}>
						  <a href={item.url} target="_blank">
						    <img style={{width: `100%`}} src={item.img} />
						  </a>
						</Tooltip>
			    );
			  })}
			</SnekContent>
		</Snek>
	);
}

export default Peek;