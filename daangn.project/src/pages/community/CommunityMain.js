import Header from "../../components/Header";
import CommunityCard from "./CommunityCard";
import { useEffect, useState } from "react";
import { fetchGet } from "../../common/fetch";

const CommunityPostMain = () => {
  const [states, setStates] = useState({
    communities: [],
    loading: false,
  });
  const { communities, loading } = states;

  // 동네생활 상세 정보 불러오기
  useEffect(() => {
    fetchGet("http://localhost:8080/communities")
      .then((res) => res.json())
      .then((res) => {
        setStates((prev) => {
          return {
            ...prev,
            communities: [...prev.communities, ...res.data], // 배열 요소를 추가
            loading: true,
          };
        });
      });
  }, []);

  return (
    <>
      <Header />
      <section className="home-main-section ">
        <div className="category-header">
          <h2 className="category-header-title">동네생활</h2>
        </div>
        <div className="item-list">
          <ul>
            {communities.map((community) => (
              <CommunityCard
                key={community}
                id={community.id}
                writer={community.writer}
                title={community.title}
                communityCategory={community.communityCategory}
                time={community.adjustedCreatedDate}
                description={community.description}
                thumbnailImg={community.thumbnailImg}
              />
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};
export default CommunityPostMain;
