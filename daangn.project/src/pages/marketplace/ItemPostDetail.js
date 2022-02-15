import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Header from "../../components/Header";
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

    return (
        <>
            <Header/>
            <section className="wrap">
                <h2>게시물 상세정보</h2>
                <div className="item-detail">
                    <div className="item-pic">
                        <Carousel
                            autoPlay={false}
                            showArrows={true}
                            infiniteLoop={true}
                            stopOnHover={false}
                            showThumbs={true}
                            showStatus={false}
                            showIndicators={true}
                        >
                        {detail.imageUrls && detail.imageUrls.map((url) => <div key="url"><img src = {url} alt="pic"></img></div>)}
                        </Carousel>
                    </div>
                    <div className="item-descrption-box">
                        <div className="member">
                            <div className="profile">
                                <div className="member-pic"><img src = "https://d1unjqcospf8gs.cloudfront.net/assets/users/default_profile_80-7e50c459a71e0e88c474406a45bbbdce8a3bf2ed4f2efcae59a064e39ea9ff30.png" alt={detail.writer}></img></div>
                                <div>
                                    <div>{detail.writer}</div>
                                    <div>서울시 서대문구</div>
                                </div>
                            </div>
                            <div>채팅</div>
                        </div>
                        <div className="title"><h2>{detail.title}</h2></div>
                        <div className="category"><span>{detail.itemCategory}</span></div>
                        <div className="price"><span>{detail.price}원</span></div>
                        <div className="description"><p>{detail.description}</p></div>
                        <div className="options">
                            <p>관심 5 조회 5 채팅 1</p>
                        </div>
                    </div>
                </div>

            </section>
            <section className="more">
                <hr className="hr-more"/>
                <div className="other-item">
                    <h2>{detail.writer}님의 판매 상품</h2>
                </div>
            </section>
            
        </>
    )
}

export default ItemPostDetail;