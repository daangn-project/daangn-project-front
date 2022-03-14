import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Header from "../../components/Header";
import { fetchGet } from "../../common/fetch";

const CommunityDetail = () => {
  const [communityDetail, setCommunityDetail] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    fetchGet(`http://localhost:8080/communities/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setCommunityDetail(res.data);
        setLoading(false);
      });
  }, [id]);

  return (
    <>
      <Header />
      <section className="wrap">
        <h2>동네생활 상세정보</h2>
        <hr/>
        <div className="justify-content-center item-detail">
          <div className="community-description-box">
            <div className="member">
              <div className="profile">
                <div className="member-pic">
                  <img
                    src="https://d1unjqcospf8gs.cloudfront.net/assets/users/default_profile_80-7e50c459a71e0e88c474406a45bbbdce8a3bf2ed4f2efcae59a064e39ea9ff30.png"
                    alt={communityDetail.writer}
                  ></img>
                </div>
                <div>
                  <div>{communityDetail.writer}</div>
                  <div>서울시 서대문구  ∙ {communityDetail.adjustedCreatedDate}</div>
                </div>
              </div>
            </div>
            <hr/>
            <div className="category">
              <span>{communityDetail.itemCategory}</span>
            </div>
            <div className="description">
              <p>{communityDetail.description}</p>
            </div>
            <div className="item-pic">
            <Carousel
              autoPlay={false}
              showArrows={true}
              infiniteLoop={true}
              stopOnHover={false}
              showThumbs={true}
              showStatus={false}
              showIndicators={true}
            >
              {communityDetail.imageUrls &&
                communityDetail.imageUrls.map((url) => (
                  <div key="url">
                    <img className="picture" src={url} alt={url}></img>
                  </div>
                ))}
            </Carousel>
          </div>
          </div>
        </div>
        <div className="justify-content-center">
          <div className="community-card-commentbody">
            <button className="community-comment-button">공감하기</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button className="community-comment-button">댓글 2</button>
            </div>
        </div>
      </section>
    </>
  );
};

export default CommunityDetail;
