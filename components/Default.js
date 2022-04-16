import styled from "styled-components";
import ConnectWallet from "./ConnectWallet";
import Peek from "./Peek";
import Ask from "./Ask";
import Team from "./Team";
import Futrue from "./Futrue";
import Mint from "./Mint";

import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';

import AddIcon from '@mui/icons-material/Add';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import PhotoCameraBackOutlinedIcon from '@mui/icons-material/PhotoCameraBackOutlined';

const Container= styled.div`
	display: flex;
	justifyContent: center;
	alignItems: center;
	flex: 1 1;
	flexDirection: column;
	width: 100%;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 700px calc(100vw - 717px);
  position: relative;
  box-sizing: border-box;
	@media screen and (max-width: 1500px) {
		grid-template-columns: 500px calc(100vw - 517px);
	}
	@media screen and (max-width: 1200px) {
		display: flex;
		flex-direction: column;
	}
`;

const MintBox = styled.div`
  display: flex;
  flex-direction: column;
  position: sticky;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  height: fit-content;
  background:url(/icons/backgrod.png) no-repeat;  top:0;
  width:100%;
  height:0%;
  background-size:100% 100%;
	@media screen and (max-width: 1200px) {
		text-align: center;
		position: relative;
		top: 0;
		min-height: 100vh;
	}
	@media screen and (max-width: 600px) {
		text-align: center;
		max-width: 100vw;
	}
`;

const MintBoxContent = styled.div`
  width: 425px;
	@media screen and (max-width: 1200px) {
	  position: static;
	  padding-bottom: 0;
	}
	@media screen and (max-width: 600px) {
	  max-width: 100vw;
	}
`;

const ListBox = styled.div`
  min-height: 100vh;
  width: 100%;
  align-items: flex-start;
  background: #f3f3f3;
  padding: 0 24px 24px;
	@media screen and (max-width: 1200px) {
		width: calc(100vw - 17px);
		padding: 0;
	}
	@media screen and (max-width: 600px) {
		width: 100vw;
	}
`;

const ListBoxHead = styled.div`
	max-width: 1400px;
	display: grid;
	grid-template-columns: repeat(2,1fr);
	grid-template-rows: repeat(1,auto);
	grid-gap: 20px;
	gap: 20px;
	position: sticky;
	top: 0;
	padding: 20px 0;
	z-index: 1;
	background: linear-gradient(#f3f3f3 90%,hsla(0,0%,95%,0));
`;

const ListBoxContent = styled.div`
	max-width: 1400px;
`;

const ListBoxHeadMenu = styled.div`
  grid-column: 1/5;
	grid-row: 1/2;
	@media only screen and (max-width: 600px) {
	  grid-column: 0/1;
	}
`;

const ListBoxHeadWallet = styled.div`
  grid-column: 5/6;
	grid-row: 1/2;
	@media only screen and (max-width: 600px) {
	  display: none;
	}
`;

const MenuWrapper = styled.div`
  display: flex;
  @media only screen and (max-width: 1200px) {
    margin-bottom: 20px;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const MenuItemText = styled.span`
  cursor: pointer;
  color: #555;
	font-size: 1.3em;
	font-weight: bold;
	position: relative;
  :hover {
    font-weight: bold;
	  color: #2f80ed;
  }
`;

function MenuItem(props) {
  const elementId = props.elementId;
  return (
    <MenuItemText
      style={{ padding: "10px 20px" }}
      onClick={() => {
        if (elementId) {
          const ele = document.getElementById(elementId);
          ele.scrollIntoView({ behavior: "smooth" });
        }
        props.onClick && props.onClick();
      }}
    >
      {props.children}
    </MenuItemText>
  );
}

function Default() {
  return (
    <Container>
      <Content>
			  <MintBox>
			    <MintBoxContent>
			  	  <Typography 
			  		  variant="h1" 
			  		  style={{
			  			  color: `#2f80ed`,
			  			  fontSize: `60px`,
			  			  fontWeight: 700,
			  			}} 
			  			component="div" 
			  			gutterBottom>
			  	    LHH$-NFT
			  	  </Typography>
			  		<Typography
			  		  variant="h2" 
			  		  style={{
			  			  fontSize: `24px`,
			  			  fontWeight: 700,
			  				marginBottom: `1.5em`
			  			}} 
			  			component="div" 
			  			gutterBottom>
			  		  Coming soon
			  		</Typography>
					  <Typography
			  		  variant="body1" 
			  		  style={{
			  			  fontSize: `13px`,
			  			  fontWeight: 500,
						  color: `#000000`
			  			}} 
			  			component="div" 
			  			gutterBottom>
			  		   Mint一直爽，一直Mint一直爽！
			  		</Typography>
			  		<br/>
					  <Typography
			  		  variant="body1" 
			  		  style={{
			  			  fontSize: `16px`,
			  			  fontWeight: 500,
						  color: `#000000`
			  			}} 
			  			component="div" 
			  			gutterBottom>
			  		  纯国产，英文水平有限，所以不提供英文版。<br/>Made in China,We English level is limited, so the English version is not available
			  		</Typography>
			  		<Mint />
			  		<Typography
			  		  variant="h2" 
			  		  style={{
			  			  fontSize: `24px`,
			  			  fontWeight: 700,
			  				marginTop: `1.5em`
			  			}} 
			  			component="div" 
			  			gutterBottom>
			  		 <Tooltip title="官方 OpenSea">
			  		    <a
			  		      href="#"
			  		      target="_blank"
			  		      rel="noreferrer"
			  		    >
			  		      <img
			  		        style={{
			  		          cursor: "pointer",
			  		          width: 24,
			  		          marginRight: "40px",
			  		        }}
			  		        src="/icons/opensea.svg"
			  		      />
			  		    </a>
			  		  </Tooltip>
			  		  <Tooltip title="官方 Twitter">
			  		    <a
			  		      href="https://twitter.com/lhhsnft"
			  		      target="_blank"
			  		      rel="noreferrer"
			  		    >
			  		      <img
			  		        style={{
			  		          width: 24,
			  		        }}
			  		        src="/icons/twitter.svg"
			  		      />
			  		    </a>
			  		  </Tooltip>
			  		</Typography>
			  	</MintBoxContent>
			  </MintBox>
			  <ListBox>
			    <ListBoxHead>
			  	  <ListBoxHeadMenu>
						  <MenuWrapper>
						    <MenuItem elementId="peek">无图言屌</MenuItem>
						    <MenuItem elementId="ask">不明觉厉</MenuItem>
						    <MenuItem elementId="team">兰州烧饼</MenuItem>
								<MenuItem elementId="next">火钳刘明</MenuItem>
						  </MenuWrapper>
			  		</ListBoxHeadMenu>
			  		<ListBoxHeadWallet>
			  		  <ConnectWallet />
			  		</ListBoxHeadWallet>
			  	</ListBoxHead>
			  	<ListBoxContent>
			  	  <Peek />
						<Ask />
            <Team />
						<Futrue />
			  	</ListBoxContent>
			  </ListBox>
			</Content>
    </Container>
  );
}

export default Default;
