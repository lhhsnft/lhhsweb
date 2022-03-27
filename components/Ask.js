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
	{title: "1、什么是LHHS NFT？", content:"我也不知道是什么意思，LHHS只是临时起兴瞎取的一个名字，然后就注册了域名，如果您愿意你可以把它当“灵魂画手”我们觉得也不错。"},
	{title: "2、供应量和价格是多少？", content:"限量供应6666枚，每枚售价0.0066eth，每个钱包购买2枚，DYOR，请判断清楚后再决定是否购买"},
	{title: "3、如果我不喜欢如何维权？", content:"这边建议您自己建立维权群，然后把创始人微信拉入群内，让大家一起来鞭尸"},
	{title: "4、项目方会扫地板吗？", content:"你想多了，项目方太穷，先解决吃饭问题，再说后续发展"},
	{title: "5、为什么不是freemint", content:"我们不是做慈善的，能卖10e，绝对不会卖9e，之所以定价0.0066e是担心定价高了你们不买，定价再低，我要亏本了。"},
	{title: "6、后续有什么计划", content:"这是本人第一个项目，我也希望这个项目能够持续发展，我们会持续为其赋能，入喉如何，我们拭目以待."},
	{title: "7、什么时候开图", content:"4月15号准时开图"},
	{title: "8、开图后不喜欢怎么办", content:"参考第3条"},
	{title: "9、最后", content:"感谢国产良心项目的开源代码，让我们建设这个网站节省了很多时间，也节省了很多的学习成本。"}
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