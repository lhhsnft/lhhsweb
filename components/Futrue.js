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
	{title: "Q1季度", content:"经历了Q1季度nft市场的火热，我们也催生了一些大胆的想法，我们开始进入项目规划阶段（内心os：好想割一把）"},
	{title: "Q2季度", content:"项目正式上线，4月开放mint，直到售完为止；同时开始筹划应付维权相关事宜。并且为了安抚维权群用户开始发放一些福利。"},
	{title: "Q3季度", content:"如果顺利，夏季应该会给持有者一个不错的惊喜"},
	{title: "Q4季度", content:"大家都开始让我跑路，我们也开始思考是否跑路一走了之"}

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
			    Roadmap
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
