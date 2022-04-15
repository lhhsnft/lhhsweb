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
	{title: "火钳刘明", content:"mint开启之时官方discord正式开启"},
	{title: "Mint-20%", content:"一份秘密制作的NFT作品作正式开始设计，全部用于持有者空投！预计6月底完成！"},
	{title: "Mint-50%", content:"成立社区委员会，社区钱包多签，版税销售50%用于社区运营。"},
	{title: "Mint-70%", content:"如果顺利，治理token？也许，大概，maybe会有！"},
	{title: "Soldout", content:"干了这碗热翔！我们继续做家人！"}
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
			    火钳刘明
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
