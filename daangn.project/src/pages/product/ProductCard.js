import { buildProductDetailsUrl } from "../../common/url-utils";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { SpanContainer } from "../../components/SpanContainer";

export const ProductList = styled.li`
  position: relative;
  float: left;
  padding: 10px 10px 10px 10px;
  width: 216px;
  box-sizing: content-box;
`;

export const Card = styled.div`
  color: black;
  border: medium;
  height: 350px;
  border-radius: 10px;
  border-bottom: 1px sold #ddd;
  overflow: hidden;

  &:hover {
    -webkit-box-shadow: 0px 4px 12px #bababa;
    box-shadow: 0px 4px 12px #bababa;
  }
`;

export const ProductTitle = styled.h5``;

export const CardImgBox = styled.div`
  position: relative;
  padding-top: 92.5%;
  overflow: hidden;
`;

export const CardImg = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  object-fit: cover;
  object-position: center;
  transition: 800ms ease;
`;

export const CardContentBox = styled.div`
  padding: 1rem 1rem 0rem 1rem;
`;

export const CardBottomBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProductCard = (props) => {
  const { id, writer, title, description, time, price, thumbnailImg } = props;
  const showingPrice = price ? price + "원" : "가격 협의";
  return (
    <ProductList>
      <Link to={buildProductDetailsUrl(id)}>
        <Card>
          <CardImgBox>
            <CardImg src={thumbnailImg} alt={id} />
          </CardImgBox>
          <CardContentBox>
            <ProductTitle>{title}</ProductTitle>
            <div>
              <SpanContainer content={[`${description}`]} />
              <SpanContainer content={[`${showingPrice}`]} />
            </div>
          </CardContentBox>
          <CardContentBox>
            <div>
              <SpanContainer content={[" 서울시 마포구 성산2동"]} />
              <CardBottomBox>
                <SpanContainer content={[`작성자 : ${writer}`]} />
                <SpanContainer content={["관심: 10", " 채팅: 0"]} />
              </CardBottomBox>
              <SpanContainer content={[`${time}`]} />
            </div>
          </CardContentBox>
        </Card>
      </Link>
    </ProductList>
  );
};

export default ProductCard;
