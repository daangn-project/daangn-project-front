import Header from "../../components/Header";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";

const ProductMain = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    async function getItemPostList(url = ''){
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'aplication/json',
            },
        })
        const json = await response.json();
        setProducts(json.data);
        setLoading(false);
    }

    // 게시물 상세 정보 불러오기
    useEffect(() => {
        getItemPostList(`http://localhost:8080/products`);
    }, [])
    
    return (
        <>
            <Header/>
            <section className="home-main-section ">
                <div className="category-header">
                    <h2 className="category-header-title">창천동</h2>
                </div>
                <div className="item-list">
                    <ul>
                        {products.map((product) => 
                            <ProductCard key={product.id} id={product.id} writer={product.writer} title={product.title} price={product.price} time = {product.adjustedCreatedDate} description={product.description} thumbnailImg={product.thumbnailImg}
                        />)}
                    </ul>
                </div>
            </section>
        </>
    )
}
export default ProductMain;