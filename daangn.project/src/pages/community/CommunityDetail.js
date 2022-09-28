import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Header from "../../components/Header";
import { fetchGet, fetchPostByForm, fetchPostByPath } from "../../common/fetch";
import Comment from "../../components/Comment";
import { Link } from "react-router-dom";
import { Date, Like, MainContainer } from "../../GlobalStyles";
import styled from "styled-components";
import { Title } from "../product/ProductDetail";
import {
  CategoryBox,
  ProfileBox,
  ProfileInfo,
} from "../product/ProductDescriptionContainer";
import { ProfileImg } from "../../components/ProfileImg";
import { SpanContainer } from "../../components/SpanContainer";
import { getUserInfo } from "../../common/jwt-utils";

import { appendingFormData } from "../../common/CreateForm";
export const ArticleHeader = styled.div`
  position: relative;
  z-index: 99;
  padding: 25px 20px 19px;
`;

export const ArticleContentWrapper = styled.div`
  padding: 0 20px;
  border-top: 1px solid #eee;
  word-wrap: break-word;
  word-break: break-word;
`;

export const ArticleContent = styled.p`
  color: #222;
  font-size: 16px;
  font-family: "Roboto", "Noto Sans KR", AppleSDGothicNeo-Regular,
    "Malgun Gothic", "맑은 고딕", dotum, "돋움", sans-serif;
  line-height: 1.25em;
  word-wrap: break-word;
  margin-top: 24px;
`;

export const Info = styled.div`
  margin-top: 40px;
  padding: 0;
  border-top: 0;
  display: flex;
  justify-content: flex-end;
`;

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

  const handleCommentChange = (newComment) => {
    setCommunityDetail((prev) => {
      return {
        ...prev,
        commentResponseDtoList: [...prev.commentResponseDtoList, newComment],
      };
    });
  };

  const addLike = async (e) => {
    const data = {
      username: getUserInfo(),
    };
    const form = await appendingFormData(data);

    fetchPostByForm(`http://localhost:8080/like/${id}`, form).then((res) => {
      if (res.status === "200") {
        alert("공감했어요!");
      } else {
        alert("이미 공감한 글이에요!");
      }
    });
  };

  return (
    <>
      <Header />
      <MainContainer>
        <ArticleHeader>
          <CategoryBox>{communityDetail.communityCategory}</CategoryBox>
          <Title>{communityDetail.title}</Title>
          <ProfileBox>
            <ProfileInfo>
              <ProfileImg name={communityDetail.writer} />
              <div>
                <SpanContainer content={[`${communityDetail.writer}`]} />
                <SpanContainer content={["서울시 서대문구"]} />
              </div>
            </ProfileInfo>
          </ProfileBox>
          <Date>{communityDetail.adjustedCreatedDate}</Date>
        </ArticleHeader>

        <ArticleContentWrapper>
          <ArticleContent>{communityDetail.description}</ArticleContent>
          <Info>
            <Like onClick={addLike} main={true}>
              공감 : {communityDetail.likeCount}
            </Like>
          </Info>
        </ArticleContentWrapper>
        <Comment
          postId={communityDetail.id}
          comments={communityDetail.commentResponseDtoList}
          handleCommentChange={handleCommentChange}
        />
      </MainContainer>
    </>
  );
};

export default CommunityDetail;
