import Header from "../../components/Header";
import ItemPostCard from "../marketplace/itemPostCard";
import { useEffect, useState } from "react";

const CommunityPostMain = () => {
    const [communityPosts, setCoummunityPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    async function getCommunityPostList(url = ''){
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'aplication/json',
            },
        })
        const json = await response.json();
        setCoummunityPosts(json.data);
        setLoading(false);
    }

    // 동네생활 상세 정보 불러오기
    useEffect(() => {
        getCommunityPostList(`http://localhost:8080/community-posts`);
    }, [])
    
    return (
        <>
            <Header/>
            <section className="home-main-section ">
                <div className="category-header">
                    <h2 className="category-header-title">동네생활</h2>
                </div>
                <div className="item-list">
                    <ul>
                        {communityPosts.map((communityPost) => 
                            <ItemPostCard 
                            key={communityPost} 
                            id={communityPost.id} 
                            writer={communityPost.writer} 
                            title={communityPost.title} 
                            time = {communityPost.adjustedCreatedDate} 
                            description={communityPost.description} 
                            thumbnailImg={communityPost.thumbnailImg}
                        />)}
                    </ul>
                </div>
            </section>
        </>
    )
}
export default CommunityPostMain;