import Header from "../../components/Header";
import { useEffect, useState } from "react";
import { fetchGet } from "../../common/fetch";
import { ItemContainer, MainContainer } from "../../GlobalStyles";
import CommunityList from "./CommunityList";
import { MainHeader } from "../../components/MainHeader";

const CommunityMain = () => {
  const [states, setStates] = useState({
    communities: [],
    loading: false,
  });
  const { communities, loading } = states;

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
      <MainContainer>
        <MainHeader>동네생활</MainHeader>
        <ItemContainer />
        <CommunityList communities={communities} />
      </MainContainer>
    </>
  );
};
export default CommunityMain;
