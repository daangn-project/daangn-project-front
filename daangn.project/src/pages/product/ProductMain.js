import Header from "../../components/Header";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";

const ProductMain = () => {
    const [itemPosts, setItemPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    async function getItemPostList(url = ''){
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'aplication/json',
            },
        })
        const json = await response.json();
        setItemPosts(json.data);
        setLoading(false);
    }

    // 게시물 상세 정보 불러오기
    useEffect(() => {
        getItemPostList(`http://localhost:8080/item-posts`);
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
                        {itemPosts.map((itemPost) => 
                            <ProductCard key={itemPost.id} id={itemPost.id} writer={itemPost.writer} title={itemPost.title} price={itemPost.price} time = {itemPost.adjustedCreatedDate} description={itemPost.description} thumbnailImg={itemPost.thumbnailImg}
                        />)}
                    </ul>
                </div>
            </section>
        </>
    )
}
export default ProductMain;