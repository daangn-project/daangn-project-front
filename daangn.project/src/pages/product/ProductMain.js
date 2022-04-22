import Header from "../../components/Header";
import React, { useEffect, useState } from "react";
import { fetchGet } from "../../common/fetch";
import FetchMore from "../../FetchMore";
import { ItemContainer, MainContainer } from "../../GlobalStyles";
import ProductList from "./ProductList";
import { MainHedaer } from "../../components/MainHeader";

const ProductMain = () => {
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetchGet(`http://localhost:8080/products?page=${page}`)
      .then((res) => res.json())
      .then((res) => {
        setProducts((prev) => [...prev, ...res.data]);
        setLoading(false);
      });
  }, [page]);

  return (
    <>
      <Header />
      <MainContainer>
        <MainHedaer text="창천동" />
        <ItemContainer>
          <ProductList products={products} />
          <FetchMore loading={page !== 0 && loading} setPage={setPage} />
        </ItemContainer>
      </MainContainer>
    </>
  );
};
export default ProductMain;
