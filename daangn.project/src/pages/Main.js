import Header from "../components/Header";
import Footer from "../components/Footer";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";

export const HomeSection = styled.section`
  padding: 80px 0 0 0;
  background-color: ${(props) => props.backgroundColor};
`;

export const HomeContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MainTitle = styled.h1`
  font-size: 4rem;
  line-height: 1.35;
  margin-bottom: 2.4rem;
`;

export const MainDescription = styled.p`
  font-size: 1.6rem !important;
  line-height: 1.5;
  letter-spacing: -0.3px;
`;

export const MainImageFirst = styled.div`
  display: inline-block;
  background: #fbf7f2
    url(https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/image-top-68ba12f0da7b5af9a574ed92ca8b3a9c0068db176b566dd374ee50359693358b.png)
    no-repeat;
  right: -84px;
  width: 804px;
  height: 680px;
  background-size: 804px 685px;
`;

export const MainImageSecond = styled.div`
  display: inline-block;
  background-image: url(https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/image-1-39ac203e8922f615aa3843337871cb654b81269e872494128bf08236157c5f6a.png);
  width: 546px;
  height: 680px;
  background-size: 546px 700px;
`;

export const MainImageThird = styled.div`
  display: inline-block;
  background-image: url(https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/image-2-f286322ab98acedf914a05bf77e84c67dcb897c8ccb543e66f6afea9d366d06d.png);
  width: 546px;
  height: 680px;
  background-size: 546px 700px;
`;

const Main = () => {
  return (
    <>
      <Header />
      <HomeSection>
        <Carousel
          autoPlay={true}
          showArrows={true}
          infiniteLoop={true}
          stopOnHover={false}
          showThumbs={false}
          showStatus={false}
          showIndicators={true}
        >
          <HomeSection backgroundColor="#fbf7f2">
            <HomeContent>
              <div>
                <MainTitle>당신 근처의 당근마켓</MainTitle>
                <MainDescription>
                  당근장터, 동네 커뮤니티, 채팅까지! 우리의 생활을 이웃과 함께
                  해요.
                </MainDescription>
              </div>
              <MainImageFirst />
            </HomeContent>
          </HomeSection>
          <HomeSection>
            <HomeContent>
              <MainImageSecond />
              <div>
                <MainTitle>우리 동네 중고 직거래 마켓</MainTitle>
                <MainDescription>
                  동네 주민들과 가깝고 따뜻한 거래를 지금 경험해보세요.
                </MainDescription>
              </div>
            </HomeContent>
          </HomeSection>
          <HomeSection backgroundColor="#e6f3e6">
            <HomeContent>
              <MainImageThird />
              <div>
                <MainTitle>이웃과 함께 하는 동네 생활</MainTitle>
                <MainDescription>
                  우리 동네의 다양한 이야기를 이웃과 함께 나누어요.
                </MainDescription>
              </div>
            </HomeContent>
          </HomeSection>
        </Carousel>
      </HomeSection>
      <Footer />
    </>
  );
};

export default Main;
