import Header from "../../components/Header";
import ProductCard from "./ProductCard";
import React, { useEffect, useState } from "react";
import { fetchGet } from "../../common/fetch";
import FetchMore from "../../FetchMore";

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
      <section className="home-main-section">
        <div className="category-header">
          <h2 className="category-header-title">창천동</h2>
        </div>
        <div className="item-list">
          <ul>
            {products.map((product, idx) => (
              <ProductCard
                key={product.id}
                id={product.id}
                writer={product.writer}
                title={product.title}
                price={product.price}
                time={product.adjustedCreatedDate}
                description={product.description}
                thumbnailImg={product.thumbnailImg}
              />
            ))}
          </ul>
          <FetchMore loading={page !== 0 && loading} setPage={setPage} />
        </div>
      </section>
    </>
  );
};
export default ProductMain;
