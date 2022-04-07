import styled from "styled-components";

import Tooltip from "@mui/material/Tooltip";
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
	padding: 10px 0;
	display: grid;
	grid-template-columns: repeat(auto-fit,calc(50% - 10px));
	grid-auto-flow: dense;
	grid-gap: 20px;
	gap: 20px;
	max-width: 1400px;
`;

const Avatar = styled.div`
  width: 150px;
  overflow: hidden;
  border-radius: 50%;
  border: 4px solid #000;
  img {
    width: 100%;
  }
`;

const TeamMemberWrapper = styled.div`
  width: 100%;
	padding: 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (max-width: 1400px) {
    width: 100%;
    max-width: 480px;
    margin-bottom: 10%;
  }
`;

function TeamMember(props) {
  return (
    <TeamMemberWrapper>
      <Avatar>
        <img src={props.img} alt="" />
      </Avatar>
      <div style={{ textAlign: "center", marginTop: 20 }}>
        <div style={{ fontSize: 28, fontWeight: "bold" }}>{props.name}</div>
        <div style={{ marginTop: 10 }}>{props.role}</div>
        <div style={{ marginTop: 5 }}>{props.description}</div>
        <div style={{ marginTop: 20 }}>
          {props.twitterLink && (
            <a href={props.twitterLink} target="_blank" rel="noreferrer">
              <img style={{ width: 30 }} src="/icons/twitter.svg" alt="" />
            </a>
          )}
          {props.openseaLink && (
            <a
              href={props.openseaLink}
              target="_blank"
              rel="noreferrer"
              style={{ marginLeft: 20 }}
            >
              <img style={{ width: 30 }} src="/icons/opensea.svg" alt="" />
            </a>
          )}
        </div>
      </div>
    </TeamMemberWrapper>
  );
}

function Team() {
	return(
	  <Box id="team">
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
			    T E A M
			  </Typography>
			</BoxTitle>
			<BoxContent>
			  <TeamMember
			    img="/one/dong.jpg"
			    name="Judy Dong"
			    role="项目发起人 / web3爱好者 / 非著名贴吧喷子 / 老韭菜一枚"
			    description="你护我，我护你，who怕护！"
			    twitterLink="https://twitter.com/mzbzcl"
			  />
			  <TeamMember
			    img="/one/nong.png"
			    name="Nonga"
			    role="大厂离职设计师 / 艺术创业者 / 贴吧肠胃 / 大饼钻石手"
			    description={
			      <div>
			        比特币钻石手，从10u持仓到现在，不关注币圈动态，只做btc信徒！最近入坑eth
			      </div>
			    }
			    twitterLink="https://twitter.com/lhhsnft"
			  />
			</BoxContent>
		</Box>
	);
}

export default Team;
