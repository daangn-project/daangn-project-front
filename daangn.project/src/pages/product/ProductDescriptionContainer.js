import { ProfileImg } from "../../components/ProfileImg";
import styled from "styled-components";
import { SpanContainer } from "../../components/SpanContainer";

export const WrapperBox = styled.div`
  position: relative;
  border-left: solid 1px #e9ecef;
  margin-left: 40px;
  padding: 10px 0 20px 20px;
  position: relative;
  float: right;
  width: 450px;
  font-size: 12px;
`;

export const ProfileBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

export const ProfileInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const TitleBox = styled.div`
  font-size: 18px;
  font-weight: bold;
  width: 380px;
`;

export const CategoryBox = styled.div`
  margin-top: 4px;
  font-size: 13px;
  line-height: 1.46;
  letter-spacing: -0.6px;
  color: #868e96;
`;

export const DescriptionBox = styled.div`
  margin-bottom: 16px;
  margin-top: 8px;
`;

export const DesriptionParagraph = styled.p`
  font-size: 17px;
  line-height: 1.6;
  letter-spacing: -0.6px;
  margin: 16px 0;
  word-break: break-all;
`;

export const PriceBox = styled.div`
  margin-top: 4px;
  font-size: 17px;
  font-weight: 600;
  line-height: 1.76;
  letter-spacing: -0.6px;
`;

export const OptionBox = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  font-size: 18px;
  font-weight: bold;
`;

export const OptionParagraph = styled.p`
  font-size: 13px;
  line-height: 1.46;
  letter-spacing: -0.6px;
  color: #868e96;
`;
export const ProductDescriptionContainer = ({ detail }) => {
  return (
    <WrapperBox>
      <ProfileBox>
        <ProfileInfo>
          <ProfileImg name={detail.writer} />
          <div>
            <SpanContainer content={[`${detail.writer}`]} />
            <SpanContainer content={["서울시 서대문구"]} />
          </div>
        </ProfileInfo>
      </ProfileBox>

      <TitleBox>
        <h2>{detail.title}</h2>
      </TitleBox>
      <CategoryBox>
        <span>{detail.productCategory}</span>
      </CategoryBox>
      <PriceBox>
        <span>{detail.price}원</span>
      </PriceBox>
      <DescriptionBox>
        <DesriptionParagraph>{detail.description}</DesriptionParagraph>
      </DescriptionBox>
      <OptionBox>
        <OptionParagraph>관심 5 조회 5 채팅 1</OptionParagraph>
      </OptionBox>
    </WrapperBox>
  );
};

export default ProductDescriptionContainer;
