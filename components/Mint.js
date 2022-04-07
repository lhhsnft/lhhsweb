import { useState, useEffect } from "react";
import styled from "styled-components";
import { ethers } from "ethers";
import Typography from "@mui/material/Typography";
import ConstructionIcon from '@mui/icons-material/Construction';
import { get, subscribe } from "../store";
import Container from "./Container";
import ConnectWallet, { connectWallet } from "./ConnectWallet";
import showMessage from "./showMessage";

const ETHERSCAN_DOMAIN =
  process.env.NEXT_PUBLIC_CHAIN_ID === "1"
    ? "etherscan.io"
    : "rinkeby.etherscan.io";

const Content = styled.div`
  margin : 0;
`;

const MintIcon = styled(ConstructionIcon)({
  marginRight: `5px`
});

const StyledMintButton = styled.div`
  display: inline-flex;
  margin-left: 20px;
  padding: 0 22px;
  font-size: 16px;
	border-radius: 16px;
  color: #fff;
  font-weight: 700;
  height: 40px;
	line-height: 40px;
  max-width: 100%;
  background: linear-gradient(45deg, #2f80ed 30%, #1ca9f2 90%);
	align-items: center;
  cursor: ${(props) => {
    return props.minting || props.disabled ? "not-allowed" : "pointer";
  }};
  opacity: ${(props) => {
    return props.minting || props.disabled ? 0.6 : 1;
  }};
`;

function MintButton(props) {
  const [minting, setMinting] = useState(false);

  return (
    <StyledMintButton
      disabled={!!props.disabled}
      minting={minting}
      onClick={async () => {
        if (minting || props.disabled) {
          return;
        }
        setMinting(true);
        try {
          const { signer, contract } = await connectWallet();
          const contractWithSigner = contract.connect(signer);
          const value = ethers.utils.parseEther(
            props.mintAmount === 1 ? "0.0066" : "0.0132"
          );
          const tx = await contractWithSigner.mint(props.mintAmount, {
            value,
          });
          const response = await tx.wait();
          showMessage({
            type: "success",
            title: "铸造成功",
            body: (
              <div>
                <a
                  href={`https://${ETHERSCAN_DOMAIN}/tx/${response.transactionHash}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  点击查看交易详情
                </a>{" "}
                或者到{" "}
                <a
                  href="https://opensea.io/account"
                  target="_blank"
                  rel="noreferrer"
                >
                  OpenSea 查看
                </a>
                。
              </div>
            ),
          });
        } catch (err) {
          showMessage({
            type: "error",
            title: "铸造失败",
            body: err.message,
          });
        }
        props.onMinted && props.onMinted();
        setMinting(false);
      }}
      style={{
        background: "linear-gradient(45deg, #2f80ed 30%, #1ca9f2 90%)",
        ...props.style,
      }}
    >
		  <MintIcon />
       {props.mintAmount} 个{minting ? "中.." : ""}
    </StyledMintButton>
  );
}

function MintSection() {
  const [status, setStatus] = useState("0");
  const [progress, setProgress] = useState(null);
  const [fullAddress, setFullAddress] = useState(null);
  const [numberMinted, setNumberMinted] = useState(0);

  async function updateStatus() {
    const { contract } = await connectWallet();
    const status = await contract.status();
    const progress = parseInt(await contract.totalSupply());
    setStatus(status.toString());
    setProgress(progress);
    // 在 mint 事件的时候更新数据
    contract.on("Minted", async (event) => {
      const status = await contract.status();
      const progress = parseInt(await contract.totalSupply());
      setStatus(status.toString());
      setProgress(progress);
    });
  }

  useEffect(() => {
    (async () => {
      const fullAddressInStore = get("fullAddress") || null;
      if (fullAddressInStore) {
        const { contract } = await connectWallet();
        const numberMinted = await contract.numberMinted(fullAddressInStore);
        setNumberMinted(parseInt(numberMinted));
        setFullAddress(fullAddressInStore);
      }
      subscribe("fullAddress", async () => {
        const fullAddressInStore = get("fullAddress") || null;
        setFullAddress(fullAddressInStore);
        if (fullAddressInStore) {
          const { contract } = await connectWallet();
          const numberMinted = await contract.numberMinted(fullAddressInStore);
          setNumberMinted(parseInt(numberMinted));
          updateStatus();
        }
      });
    })();
  }, []);

  useEffect(() => {
    try {
      const fullAddressInStore = get("fullAddress") || null;
      if (fullAddressInStore) {
        updateStatus();
      }
    } catch (err) {
      showMessage({
        type: "error",
        title: "获取合约状态失败",
        body: err.message,
      });
    }
  }, []);

  async function refreshStatus() {
    const { contract } = await connectWallet();
    const numberMinted = await contract.numberMinted(fullAddress);
    setNumberMinted(parseInt(numberMinted));
  }

  let mintButton = (
    <StyledMintButton
      style={{
        background: "#eee",
        color: "#999",
        cursor: "not-allowed",
      }}
    ><MintIcon />
      尚未开始
    </StyledMintButton>
  );

  if (status === "1") {
    mintButton = (
      <div
        style={{
          display: "flex",
        }}
      >
        <MintButton
          onMinted={refreshStatus}
          mintAmount={1}
          style={{ marginRight: "20px" }}
        />
        <MintButton
          onMinted={refreshStatus}
          mintAmount={2}
          disabled={numberMinted === 1}
        />
      </div>
    );
  }

  if (progress >= 6666 || status === "2") {
    mintButton = (
      <StyledMintButton
        style={{
          background: "#eee",
          color: "#999",
          cursor: "not-allowed",
        }}
      ><MintIcon />
        全部卖完了
      </StyledMintButton>
    );
  }

  if (numberMinted === 2) {
    mintButton = (
      <StyledMintButton
        style={{
          background: "#eee",
          color: "#999",
          cursor: "not-allowed",
        }}
      ><MintIcon />
        铸造已达上限
      </StyledMintButton>
    );
  }

  if (!fullAddress) {
    mintButton = (
      <StyledMintButton
        style={{
          background: "#eee",
          color: "#999",
          cursor: "not-allowed",
        }}
      ><MintIcon />
        请先连接钱包
      </StyledMintButton>
    );
  }

  mintButton = (
    <StyledMintButton
      style={{
        background: "#eee",
        color: "#999",
        cursor: "not-allowed",
      }}
    ><MintIcon />
      coming soon
    </StyledMintButton>
  );
	
	let ButtonList = styled.div`
	  margin-bottom: 20px;
		display: flex;
		align-items: center;
		@media screen and (max-width: 1200px) {
			justify-content: center;
		}
	`;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column"
      }}
    >
      <ButtonList>
        <ConnectWallet />
				{mintButton}
      </ButtonList>
      <div style={{ marginTop: 5, fontSize: 20, color: `#2f80ed`}}>
        {progress === null ? "" : `铸造进度：` + progress + `/ 6666`}
      </div>
			<div style={{ marginTop: 20, fontSize: 15}}>
			  {" "}
			  {fullAddress && (
			    <span>
			      您可以铸造 {2 - numberMinted} 个，
			    </span>
			  )}
				定价0.0066Eth/只，最多mint两只。
			</div>
    </div>
  );
}

function Mint() {
  return (
    <Container id="mint">
      <Content>
        <div
          style={{
            marginTop: 20
          }}
        >
          <MintSection />
        </div>
      </Content>
    </Container>
  );
}

export default Mint;
