import Header from "../../components/Header";
import ItemPostCard from "./itemPostCard";
import { useEffect, useState } from "react";

const ItemPostMain = () => {
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
                <div className="category-header">카테고리 헤더 공간</div>
                <div className="item-list">
                    <ul>
                        {itemPosts.map((itemPost) => 
                            <ItemPostCard id={itemPost.id} writer={itemPost.writer} title={itemPost.title} price={itemPost.price} description={itemPost.description}
                        />)}
                    </ul>
                </div>
            </section>
        </>
    )
}
export default ItemPostMain;