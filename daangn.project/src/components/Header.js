import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header id="fixed-bar" className="fixed-bar-box-shadow">
            <div id="fixed-bar-wrap">
                <h1 id="fixed-bar-logo-title">
                    <Link to="/">
                        <span className="sr-only">당근마켓</span>
                        <img
                            className="fixed-logo"
                            src="https://d1unjqcospf8gs.cloudfront.net/assets/home/base/header/logo-basic-24b18257ac4ef693c02233bf21e9cb7ecbf43ebd8d5b40c24d99e14094a44c81.svg"
                            alt="당근마켓"
                        ></img>
                    </Link>
                </h1>

                <section id="fixed-bar-search">
                    <div className="search-input-wrap">
                        <span className="sr-only">검색</span>
                        <input
                            type="text"
                            placeholder="동네 이름, 물품명 등을 검색해보세요!"
                            name="header-search-input"
                            id="header-search-input"
                            className="fixed-search-input"
                        />
                        <button id="header-search-button">
                            <img
                                src="https://d1unjqcospf8gs.cloudfront.net/assets/home/base/header/search-icon-7008edd4f9aaa32188f55e65258f1c1905d7a9d1a3ca2a07ae809b5535380f14.svg"
                                alt="Search"
                            ></img>
                        </button>
                    </div>
                </section>

                <section className="fixed-bar-menu">
                    <div>
                        <Link to="/marketplace">
                            <button className="fixed-bar-button">
                                <span className="button-text">동네장터</span>
                            </button>
                        </Link>
                        <Link to="/">
                            <button className="fixed-bar-button">
                                <span className="button-text">커뮤니티</span>
                            </button>
                        </Link>
                        <Link to="/">
                            <button className="fixed-bar-button">
                                <span className="button-text">당근채팅</span>
                            </button>
                        </Link>
                        <Link to="/login">
                            <button className="fixed-bar-button">
                                <span className="button-text">로그인</span>
                            </button>
                        </Link>
                    </div>
                </section>
            </div>
        </header>
    );
};

export default Header;
