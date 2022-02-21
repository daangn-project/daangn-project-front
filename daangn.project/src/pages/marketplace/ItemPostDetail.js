import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Header from "../../components/Header";
import ItemPostCard from "./itemPostCard";
const ItemPostDetail = () => {
    const [itemDetail, setItemDetail] = useState({});
    const [otherItem, setOtherItem] = useState([]);
    const [loading, setLoading] = useState(true);
    const {id} = useParams();


    // Import - Export 형태로 수정
    async function getPageInfo(url = ''){
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'aplication/json',
            },
        })
        const json = await response.json();
        console.log(json);
        setItemDetail(json.data);
        setLoading(false);
        return json.data;
    }

    // 게시물 상세 정보 불러오기
    useEffect(() => {
        getPageInfo(`http://localhost:8080/item-posts/${id}`)
        .then(itemDetail => setOtherItem(itemDetail.itemPostByUserDtos));
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
                        {itemDetail.imageUrls && itemDetail.imageUrls.map((url) => <div key="url"><img src = {url} alt="pic"></img></div>)}
                        </Carousel>
                    </div>
                    <div className="item-descrption-box">
                        <div className="member">
                            <div className="profile">
                                <div className="member-pic"><img src = "https://d1unjqcospf8gs.cloudfront.net/assets/users/default_profile_80-7e50c459a71e0e88c474406a45bbbdce8a3bf2ed4f2efcae59a064e39ea9ff30.png" alt={itemDetail.writer}></img></div>
                                <div>
                                    <div>{itemDetail.writer}</div>
                                    <div>서울시 서대문구</div>
                                </div>
                            </div>
                            <div>채팅</div>
                        </div>
                        <div className="title"><h2>{itemDetail.title}</h2></div>
                        <div className="category"><span>{itemDetail.itemCategory}</span></div>
                        <div className="price"><span>{itemDetail.price}원</span></div>
                        <div className="description"><p>{itemDetail.description}</p></div>
                        <div className="options">
                            <p>관심 5 조회 5 채팅 1</p>
                        </div>
                    </div>
                </div>

            </section>
            <section className="more">
                <hr className="hr-more"/>
                <div className="other-item">
                    <h2>{itemDetail.writer}님의 판매 상품</h2>
                    <div className="item-list">
                        <ul>
                            {otherItem.map((item) => 
                                <ItemPostCard key={item.id} id={item.id} title={item.title} price={item.price} time = {item.adjustedCreatedDate} description={item.description} thumbnailImg={item.thumbnailImg}
                            />)}
                        </ul>
                    </div>
                </div>
            </section>
            
        </>
    )
}

export default ItemPostDetail;