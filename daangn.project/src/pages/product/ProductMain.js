import Header from "../../components/Header";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
import { fetchGet } from "../../common/fetch";
const ProductMain = () => {
  const [states, setStates] = useState({
    products: [],
    loading: true,
  });
  const { products, loading } = states;

  useEffect(() => {
    fetchGet("http://localhost:8080/products")
      .then((res) => res.json())
      .then((res) => {
        setStates((prev) => {
          return {
            ...prev,
            products: res.data,
            loading: false,
          };
        });
      });
  }, []);

  return (
    <>
      <Header />
      <section className="home-main-section">
        <div className="category-header">
          <h2 className="category-header-title">창천동</h2>
        </div>
        <div className="item-list">
          <ul>
            {products.map((product) => (
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
        </div>
      </section>
    </>
  );
};
export default ProductMain;
