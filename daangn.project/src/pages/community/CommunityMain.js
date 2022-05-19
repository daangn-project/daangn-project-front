import Header from "../../components/Header";
import { useEffect, useState } from "react";
import { fetchGet } from "../../common/fetch";
import {
  CategoryContainer,
  CategoryMenu,
  CategoryMenuLink,
  ItemContainer,
  MainContainer,
} from "../../GlobalStyles";
import CommunityList from "./CommunityList";
import { MainHeader } from "../../components/MainHeader";
import FetchMore from "../../FetchMore";

const CommunityMain = () => {
  const [cursor, setCursor] = useState(0);
  const [loading, setLoading] = useState(true);
  const [communities, setCommunities] = useState([]);
  const [currentCategory, setCurrentCategory] = useState(0);
  useEffect(() => {
    fetchGet(`http://localhost:8080/communities?cursor=${cursor}`)
      .then((res) => res.json())
      .then((res) => {
        setCommunities((prev) => [...prev, ...res.data]);
        setLoading(false);
      });
  }, [cursor]);

  return loading ? null : (
    <>
      <Header />
      <MainContainer>
        <MainHeader text="동네생활" />
        <CategoryContainer>
          <CategoryMenu>
            <CategoryMenuLink to="">동네질문</CategoryMenuLink>
          </CategoryMenu>
          <CategoryMenu>
            <CategoryMenuLink to="">분실/실종센터</CategoryMenuLink>
          </CategoryMenu>
          <CategoryMenu>
            <CategoryMenuLink to="">투자/주식</CategoryMenuLink>
          </CategoryMenu>
          <CategoryMenu>
            <CategoryMenuLink to="">썸/연애</CategoryMenuLink>
          </CategoryMenu>
          <CategoryMenu>
            <CategoryMenuLink to="">진로/직장</CategoryMenuLink>
          </CategoryMenu>
          <CategoryMenu>
            <CategoryMenuLink to="">헬스/건강</CategoryMenuLink>
          </CategoryMenu>
          <CategoryMenu>
            <CategoryMenuLink to="">동네알림</CategoryMenuLink>
          </CategoryMenu>
          <CategoryMenu>
            <CategoryMenuLink to="">취미</CategoryMenuLink>
          </CategoryMenu>
        </CategoryContainer>
        <ItemContainer>
          <CommunityList communities={communities} />
          <FetchMore items={communities} setCursor={setCursor} />
        </ItemContainer>
      </MainContainer>
    </>
  );
};
export default CommunityMain;
