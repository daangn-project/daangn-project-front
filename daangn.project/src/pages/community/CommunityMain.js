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
  const [categories, setCategories] = useState([{ key: "ALL", value: "전체" }]);
  const [currentCategory, setCurrentCategory] = useState(0);

  useEffect(() => {
    fetchGet(`http://localhost:8080/communities?cursor=${cursor}`)
      .then((res) => res.json())
      .then((res) => {
        setCommunities((prev) => [...prev, ...res.data]);
        setLoading(false);
      });
  }, [cursor]);

  useEffect(() => {
    fetchGet(`http://localhost:8080/communities/categories`)
      .then((res) => res.json())
      .then((res) => {
        setCategories((prev) => [...prev, ...res]);
      });
  }, []);
  console.log(categories);
  return loading ? null : (
    <>
      <Header />
      <MainContainer>
        <MainHeader text="동네생활" />
        <CategoryContainer>
          {categories.map((category) => (
            <CategoryMenu>
              <CategoryMenuLink to="">{category.value}</CategoryMenuLink>
            </CategoryMenu>
          ))}
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
