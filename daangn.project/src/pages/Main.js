import Header from "../components/Header";
import Footer from "../components/Footer";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Main = () => {
  return (
    <>
      <Header />
      <section className="home-main-section">
        <Carousel
          autoPlay={true}
          showArrows={true}
          infiniteLoop={true}
          stopOnHover={false}
          showThumbs={false}
          showStatus={false}
          showIndicators={true}
        >
          <section className="home-main-section background-pale-peach">
            <div className="home-main-content">
              <div>
                <h1 className="home-main-title">당신 근처의 당근마켓</h1>
                <p className="text-m">
                  당근장터, 동네 커뮤니티, 채팅까지! 우리의 생활을 이웃과 함께
                  해요.
                </p>
              </div>
              <div className="home-main-image-1"></div>
            </div>
          </section>
          <section className="home-main-section">
            <div className="home-main-content">
              <div className="home-main-image-2"></div>
              <div>
                <h1 className="home-main-title">우리 동네 중고 직거래 마켓</h1>
                <p className="text-m">
                  동네 주민들과 가깝고 따뜻한 거래를 지금 경험해보세요.
                </p>
              </div>
            </div>
          </section>
          <section className="home-main-section background-pale-green">
            <div className="home-main-content">
              <div className="home-main-image-3"></div>
              <div>
                <h1 className="home-main-title">이웃과 함께 하는 동네 생활</h1>
                <p className="text-m">
                  우리 동네의 다양한 이야기를 이웃과 함께 나누어요.
                </p>
              </div>
            </div>
          </section>
        </Carousel>
      </section>
      <Footer />
    </>
  );
};

export default Main;
