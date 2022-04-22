import ProductCard from "./ProductCard";
const ProductList = ({ products }) => {
  return (
    <>
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
    </>
  );
};

export default ProductList;
