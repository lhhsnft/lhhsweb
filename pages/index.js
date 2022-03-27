import { useEffect } from 'react';
import styled from "styled-components";
import Head from 'next/head';
import Default from '../components/Default';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
	min-height: 100vh;
	flex-direction: column;
`;

export default function Home() {
  useEffect(() => {
    if (window.console) {
	  console.log(`\n %c 您好，欢迎访问“灵魂画手”！ \n\n`, 'color: #ffffff; background: #f56c6c; padding:5px 0;');
	  console.log(`\n %c NFT开源项目： %c   https://github.com/brucexu-eth/gclx-official \n\n`, 'color: #ffffff; background: #3c9cff; padding:5px 0;', 'color: #3c9cff;background: #ffffff; padding:5px 0;');
    }
  }, []);

  return (
    <Container>
      <Head>
        <title>LHHS NFT - 印象派灵魂画手！</title>
        <meta name="description" content="中国人不骗中国人，放心！" />
        <link rel="icon" href="/favicon.png" />

        {/* Global Site Tag (gtag.js) - Google Analytics */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
      </Head>
			<Default />
    </Container>
  );
}
