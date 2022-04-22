import styled from "styled-components";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Header from "../../components/Header";
import { fetchGet } from "../../common/fetch";
import {
  HorizontalLine,
  ItemContainer,
  MainContainer,
  OptionalContainer,
} from "../../GlobalStyles";
import ProductList from "./ProductList";
import ProductDescriptionContainer from "./ProductDescriptionContainer";

export const SectionTitle = styled.h2``;

export const ItemImageContainer = styled.div`
  width: 450px;
  height: 450px;
  position: relative;
  float: left;
  text-align: center;
`;

export const ItemImage = styled.img`
  max-height: 450px;
  object-fit: cover;
`;

export const ItemDetailContainer = styled.div`
  display: flex;
  margin-top: 10px;
  min-height: 550px;
`;

export const OtherItemContainer = styled.div`
  width: 1024px;
  margin: 0 auto;
  padding: 16px 0;
  position: relative;
`;

const ProductDetail = () => {
  const [states, setStates] = useState({
    productDetail: {},
    otherProduct: [],
    loading: true,
  });
  const { productDetail, otherProduct, loading } = states;
  const { id } = useParams();

  useEffect(() => {
    setStates((prev) => {
      return {
        ...prev,
        loading: true,
      };
    });
    fetchGet(`http://localhost:8080/products/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setStates((prev) => {
          console.log(res.data);
          return {
            ...prev,
            productDetail: res.data,
            otherProduct: res.data.productWithMemberDtoList,
            loading: false,
          };
        });
      });
  }, [id]);

  return (
    <>
      <Header />
      <MainContainer>
        <SectionTitle>게시물 상세정보</SectionTitle>
        <ItemDetailContainer>
          <ItemImageContainer>
            <Carousel
              autoPlay={false}
              showArrows={true}
              infiniteLoop={true}
              stopOnHover={false}
              showThumbs={true}
              showStatus={false}
              showIndicators={true}
            >
              {productDetail.imageUrls &&
                productDetail.imageUrls.map((url) => (
                  <div key="url">
                    <ItemImage src={url} alt={url}></ItemImage>
                  </div>
                ))}
            </Carousel>
          </ItemImageContainer>
          <ProductDescriptionContainer detail={productDetail} />
        </ItemDetailContainer>
      </MainContainer>
      <OptionalContainer>
        <HorizontalLine />
        <OtherItemContainer>
          <SectionTitle>{productDetail.writer}님의 판매 상품</SectionTitle>
          <ItemContainer>
            <ProductList products={otherProduct} />
          </ItemContainer>
        </OtherItemContainer>
      </OptionalContainer>
    </>
  );
};

export default ProductDetail;
