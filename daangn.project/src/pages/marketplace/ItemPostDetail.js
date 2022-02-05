import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const ItemPostDetail = () => {
    const [detail, setDetail] = useState({});
    const [loading, setLoading] = useState(true);
    const {id} = useParams();

    async function getPageInfo(url = ''){
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'aplication/json',
            },
        })
        const json = await response.json();
        setDetail(json.data);
        setLoading(false);
    }

    // 게시물 상세 정보 불러오기
    useEffect(() => {
        getPageInfo(`http://localhost:8080/item-posts/${id}`);
    }, [])
    console.log(detail)

    return (
        <>
            <h2>게시물 상세정보</h2>
            <Carousel
                autoPlay={true}
                showArrows={true}
                infiniteLoop={true}
                stopOnHover={false}
                showThumbs={false}
                showStatus={false}
                showIndicators={true}
            >
            {detail.imageUrls && detail.imageUrls.map((url) => <div className="item-detail-pic" key="url"><img src = {url} alt="pic"></img></div>)}
            </Carousel>
            <div>
                id: {detail.id}
            </div>
            <div>
                member: {detail.member}
            </div>
            <div>
                title: {detail.title}
            </div>
            <div>
                description: {detail.description}
            </div>
            <div>
                카테고리: {detail.itemCategory}
            </div>
        </>
    )
}

export default ItemPostDetail;