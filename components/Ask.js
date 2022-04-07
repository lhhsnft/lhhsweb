import styled from "styled-components";

import Typography from "@mui/material/Typography";

const Question = styled.div`
  background: #fff;
	width: 100%;
	padding: 20px;
	margin-bottom: 30px;
`;

const QuestionTitle = styled.div`
  text-align: center;
`;

const QuestionContent = styled.div`
	padding: 0 20px;
`;

const QuestionList = styled.div`
  text-align: left;
	overflow: hidden;
	word-wrap: break-word;
`;

const askData = [
	{title: "1、什么是LHH$ NFT？", content:"我们是来自贴吧时代的灵魂画手，我们开始探索web3的奥秘，CC0但有Roadmap."},
	{title: "2、供应量和价格是多少？", content:"限量供应6666枚，每枚售价0.0066eth，每个钱包购买2枚，DYOR，请判断清楚后再决定是否购买"},
	{title: "3、如果我不喜欢如何维权？", content:"这边建议您自己建立维权群，然后把创始人微信拉入群内，让大家一起来鞭尸"},
	{title: "4、你们会扫地板吗？", content:"🗹会扫   🗹不会扫    ☑钝角"},
	{title: "5、为什么不是freemint", content:"0.006eth，买不了吃亏，买不了上当，绝对良心价"},
	{title: "6、后续有什么计划", content:"坚决执行Roadmap."},
	{title: "7、什么时候开图", content:"会很快！"},
	{title: "8、开图后不喜欢怎么办", content:"参考第3条"},
	{title: "9、mint不完怎么办", content:"域名已经续费10年，印不完就一直开放印，10年都印不完我也认了。"},
	{title: "10、最后", content:"感谢所有在项目筹划阶段给我们提供了帮助的朋友。"}
];

function Ask() {
	return(
	  <Question id="ask">
		  <QuestionTitle>
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
			    Q & A
			  </Typography>
			</QuestionTitle>
			<QuestionContent>
			  {askData.map((item,key) => {
			  	return (
			  		<QuestionList key={key}>
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
			  		</QuestionList>
			    );
			  })}
			</QuestionContent>
		</Question>
	);
}

export default Ask;
