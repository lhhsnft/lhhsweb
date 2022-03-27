import styled from "styled-components";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";

import Container from "./Container";
import ConnectWallet from "./ConnectWallet";
import { padWidth } from "../utils";

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 96px;
  position: fixed;
  width: 100%;
  z-index: 100;
  top: 0;
  left: 0;
  @media only screen and (max-width: ${padWidth}) {
    flex-direction: column;
  }
  :before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.02);
    backdrop-filter: blur(27px);
	z-index: -1;
  }
`;

const HeadBox = styled.div`
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1200px
`;

const MenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: ${padWidth}) {
    margin-bottom: 20px;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const MenuItemText = styled.span`
  cursor: pointer;
  color: #7f888f;
  :hover {
    font-weight: bold;
	color: #ed6c02;
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

const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 96px 0 60px;
  background: url(//pc1.gtimg.com/guanjia/images/bd/0f/bd0fc1936d978a2a3b58fec06417c832.png) no-repeat center 0;
  background-size: 1920px 735px;
`;
const ContentImage = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: center;
`;

function Intro() {
  return (
    <Container
      id="intro"
    >
      <Head>
	    <HeadBox>
		  <h3 style={{ color: `#4a5761` }}>灵魂画手</h3>
		  <MenuWrapper>
		    <MenuItem elementId="intro">介绍</MenuItem>
			  <MenuItem elementId="gallery">作品展示</MenuItem>
		    <MenuItem elementId="mint">铸造</MenuItem>
		  </MenuWrapper>
		  <ConnectWallet showCollect={true} />
		</HeadBox>
      </Head>
      <Content>
        <ContentImage>
          <img style={{ width: 200 }} src="/images/demo.gif" />
        </ContentImage>
        <Typography
          style={{
            marginTop: "8.3333333%",
          }}
          variant="body1"
          gutterBottom
        >
          限量 5000 份灵魂级NFT，专为灵魂画手准备！
        </Typography>
        <Typography
          style={{
            marginTop: "2%",
          }}
          variant="body1"
          gutterBottom
        >
        </Typography>
        <div
          style={{
            padding: "40px 0",
          }}
        >
          <Tooltip title="官方 OpenSea">
            <a
              href="https://opensea.io/collection/gclx"
              target="_blank"
              rel="noreferrer"
            >
              <img
                style={{
                  cursor: "pointer",
                  width: 40,
                  marginRight: "40px",
                }}
                src="/icons/opensea.svg"
              />
            </a>
          </Tooltip>
          <Tooltip title="官方 Twitter">
            <a
              href="https://twitter.com/gclxnft"
              target="_blank"
              rel="noreferrer"
            >
              <img
                style={{
                  width: 40,
                }}
                src="/icons/twitter.svg"
              />
            </a>
          </Tooltip>
        </div>
        <Typography
          style={{
            marginTop: "5%",
            textAlign: "center",
            color: "#666",
            maxWidth: "600px",
          }}
          variant="body2"
          gutterBottom
        >
        </Typography>
      </Content>
    </Container>
  );
}

export default Intro;
