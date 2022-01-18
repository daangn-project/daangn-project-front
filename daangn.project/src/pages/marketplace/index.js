import Header from "../../components/Header";
import ItemPostContainer from "../../containers/ItemPostContainer";
import ItemPostCard from "./itemPostCard";

const MarketPlace = () => {
    return (
        <>
            <Header/>
            <section className="home-main-section background-pale-green">
                <div className="home-main-content">
                    <div className="home-main-image"></div>
                    <div>
                        <h1 className="home-main-title">지금 바로 당근해요.</h1>
                        <p class="text-m">당근장터, 동네 커뮤니티, 채팅까지! 우리의 생활을 이웃과 함께 해요.</p>
                    </div>
                </div>
                <ItemPostContainer/>
            </section>
        </>
    )
}

export default MarketPlace;