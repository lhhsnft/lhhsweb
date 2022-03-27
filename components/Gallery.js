import styled from "styled-components";
import Typography from "@mui/material/Typography";
import _ from "lodash";

import Container from "./Container";

const GalleryList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 840px;
  max-height: 840px;
  overflow: hidden;
  margin: 5% auto 0 auto;
`;
const GalleryItem = styled.div`
  width: 120px;
  margin: 10px;
  transition: all 0.2s ease;
  will-change: transform;
  position: relative;
  z-index: 10;
  img {
    width: 100%;
    height: auto;
  }
  :hover {
    transform: scale(1.2);
  }
`;

const arts = [
  "/images/demo_01.png",
  "/images/demo_03.png",
  "/images/demo_07.png",
  "/images/demo_13.png",
  "/images/demo_06.png",
  "/images/demo_05.png",
  "/images/demo_10.png",
  "/images/demo_04.png",
  "/images/demo_14.png",
  "/images/demo_09.png",
  "/images/demo_11.png",
  "/images/demo_12.png",
];

const Content = styled.div`
  max-width: 840px;
  margin: 5% auto 5% auto;
  strong {
    color: red;
  }
`;

function Gallery() {
  return (
    <Container
	  id="gallery"
      style={{
        background: "#fff",
      }}
    >
      <Typography
        style={{ textAlign: "center", marginTop: "5%" }}
        variant="h3"
        gutterBottom
      >
        真实作品效果展示
      </Typography>
      <GalleryList>
        {arts.map((art, idx) => {
          return (
            <GalleryItem key={idx}>
              <img src={art} alt="国产良心作品展示" />
            </GalleryItem>
          );
        })}
      </GalleryList>
    </Container>
  );
}

export default Gallery;
