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
			    ????????????
			  </Typography>
			</BoxTitle>
			<BoxContent>
			  <TeamMember
			    img="/one/dong.jpg"
			    name="Judy Dong"
			    role="??????????????? / web3????????? / ????????????????????? / ???????????????"
			    description="????????????????????????????????????web3???"
			    twitterLink="https://twitter.com/mzbzcl"
			  />
			  <TeamMember
			    img="/one/nong.png"
			    name="LiJufu"
			    role="????????????????????? / ??????????????? / ???????????? / ???????????????"
			    description={
			      <div>
			        ??????????????????13????????????????????????????????????????????????btc???????????????????????????????????????
			      </div>
			    }
			    twitterLink="https://twitter.com/lhhsnft"
			  />
			</BoxContent>
		</Box>
	);
}

export default Team;
