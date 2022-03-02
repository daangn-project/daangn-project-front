import Header from "../../components/Header";
import CommunityCard from './CommunityCard';
import { useEffect, useState } from "react";

const CommunityPostMain = () => {
    const [communities, setCoummunities] = useState([]);
    const [loading, setLoading] = useState(true);

    async function getCommunitiesList(url = ''){
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'aplication/json',
            },
        })
        const json = await response.json();
        setCoummunities(json.data);
        setLoading(false);
    }

    // 동네생활 상세 정보 불러오기
    useEffect(() => {
        getCommunitiesList(`http://localhost:8080/communities`);
    }, [])

    // console.log(communities)
    return (
        <>
            <Header/>
            <section className="home-main-section ">
                <div className="category-header">
                    <h2 className="category-header-title">동네생활</h2>
                </div>
                <div className="item-list">
                    <ul>
                        {communities.map((community) => 
                            <CommunityCard 
                            key={community} 
                            id={community.id} 
                            writer={community.writer} 
                            title={community.title} 
                            communityCategory={community.communityCategory}
                            time = {community.adjustedCreatedDate} 
                            description={community.description} 
                            thumbnailImg={community.thumbnailImg}

                        />)}
                    </ul>
                </div>
            </section>
        </>
    )
}
export default CommunityPostMain;