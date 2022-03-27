import styled from "styled-components";

import Typography from "@mui/material/Typography";

const Box = styled.div`
  background: #fff;
	width: 100%;
	padding: 20px;
	margin-bottom: 30px;
`;

const BoxTitle = styled.div`
  text-align: center;
`;

const BoxContent = styled.div`
	padding: 0 20px;
	max-width: 1400px;
`;

const BoxList = styled.div`
  text-align: left;
	overflow: hidden;
	word-wrap: break-word;
`;

const askData = [
	{title: "周边", content:"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"},
	{title: "代币空投", content:"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"},
	{title: "线下应用", content:"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"}
];

function Futrue() {
	return(
	  <Box id="next">
		  <BoxTitle>
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
			    Next
			  </Typography>
			</BoxTitle>
			<BoxContent>
			  {askData.map((item,key) => {
			  	return (
			  		<BoxList key={key}>
			  		  <Typography
			  		    variant="h5" 
								style={{
								  fontWeight: 700,
									padding: `10px 0`,
									color: `#2f80ed`,
								}} 
			  		  	component="div" 
			  		  	gutterBottom>
			  		    {item.title}
			  		  </Typography>
							<Typography
							  variant="body2" 
								component="div" 
								gutterBottom>
							  {item.content}
							</Typography>
			  		</BoxList>
			    );
			  })}
			</BoxContent>
		</Box>
	);
}

export default Futrue;