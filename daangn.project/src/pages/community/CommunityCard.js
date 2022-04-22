import { buildCommunityDetailsUrl } from "../../common/url-utils";
import styled, { css } from "styled-components";
import { StyledLink } from "../../GlobalStyles";
export const CommunityList = styled.li`
  position: relative;
  width: 100%;
  padding: 39px 20px 79px 20px;
  border-bottom: 1px solid #eee;

  &:hover {
    box-shadow: 0px 1px 2px #bababa;
  }
`;

export const Category = styled.p`
  position: absolute;
  top: 15px;
  left: auto;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 150%;
  letter-spacing: -0.02em;
  color: #2694ab;
`;

export const UpperContainer = styled.div`
  min-height: 80px;
  position: relative;
`;
export const Title = styled.h2`
  margin-top: 6px;
  height: 52px;
`;

export const Content = styled.p`
  margin: 0;
  padding: 0;
  color: #222;
  font-size: 14px;
  font-family: "Roboto", "Noto Sans KR", AppleSDGothicNeo-Regular,
    "Malgun Gothic", "맑은 고딕", dotum, "돋움", sans-serif;
  line-height: 1.25em;
  word-wrap: break-word;
`;

export const ThumbnailImg = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  overflow: hidden;
  width: 100px;
  height: 100px;
  object-fit: cover;
`;

export const BottomContainer = styled.div`
  position: absolute;
  bottom: 8px;
  width: 100%;
  box-sizing: border-box;
`;

export const Name = styled.p`
  font-size: 12px;
`;

export const Info = styled.div`
  font-size: 12px;
  display: flex;
  position: relative;
`;

const CommunityCard = (props) => {
  const {
    id,
    writer,
    title,
    communityCategory,
    description,
    thumbnailImg,
    time,
  } = props;

  return (
    <>
      <CommunityList>
        <StyledLink to={buildCommunityDetailsUrl(id)}>
          <Category>{communityCategory}</Category>

          <UpperContainer>
            <Title>{title}</Title>
            <Content>{description}</Content>
            <ThumbnailImg src={thumbnailImg} alt={id} />
          </UpperContainer>

          <BottomContainer>
            <Name>{writer} ∙ 서울시 마포구 성산2동</Name>
            <Info>공감 2 ∙ 댓글 2 ∙ {time}</Info>
          </BottomContainer>
        </StyledLink>
      </CommunityList>
    </>
  );
};

export default CommunityCard;
