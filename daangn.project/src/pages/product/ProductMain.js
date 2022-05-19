import Header from "../../components/Header";
import React, { useEffect, useState } from "react";
import { fetchGet } from "../../common/fetch";
import FetchMore from "../../FetchMore";
import { ItemContainer, MainContainer } from "../../GlobalStyles";
import ProductList from "./ProductList";
import { MainHeader } from "../../components/MainHeader";

const ProductMain = () => {
  const [cursor, setCursor] = useState(0);
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchGet(`http://localhost:8080/products?cursor=${cursor}`)
      .then((res) => res.json())
      .then((res) => {
        setProducts((prev) => [...prev, ...res.data]);
        setLoading(false);
      });
  }, [cursor]);

  return loading ? null : (
    <>
      <Header />
      <MainContainer>
        <MainHeader text="창천동" />
        <ItemContainer>
          <ProductList products={products} />
          <FetchMore items={products} setCursor={setCursor} />
        </ItemContainer>
      </MainContainer>
    </>
  );
};
export default ProductMain;
