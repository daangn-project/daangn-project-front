import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
            <h2>게시물 상세정보</h2>
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
        </>
    )
}

export default ItemPostDetail;