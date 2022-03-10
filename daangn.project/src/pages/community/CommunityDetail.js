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
        <div className="item-detail">
          <div className="item-pic">
              {communityDetail.imageUrls &&
                communityDetail.imageUrls.map((url) => (
                  <div key="url">
                    <img className="picture" src={url} alt={url}></img>
                  </div>
                ))}
           
          </div>
          <div className="item-descrption-box">
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
                  <div>서울시 서대문구</div>
                </div>
              </div>
              <div>채팅</div>
            </div>
            <div className="title">
              <h2>{communityDetail.title}</h2>
            </div>
            <div className="category">
              <span>{communityDetail.itemCategory}</span>
            </div>
            <div className="price">
              <span>{communityDetail.price}원</span>
            </div>
            <div className="description">
              <p>{communityDetail.description}</p>
            </div>
            <div className="options">
              <p>관심 5 조회 5 채팅 1</p>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="more">
        <hr className="hr-more" />
        <div className="other-item">
          <h2>{communityDetail.writer}님의 판매 상품</h2>
          <div className="item-list">
            <ul>
              {otherProduct.map((p) => (
                <ProductCard
                  key={p.id}
                  id={p.id}
                  title={p.title}
                  price={p.price}
                  time={p.adjustedCreatedDate}
                  description={p.description}
                  thumbnailImg={p.thumbnailImg}
                />
              ))}
            </ul>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default CommunityDetail;
