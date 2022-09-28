import { Link } from "react-router-dom";
import { getUserInfo } from "../common/jwt-utils";
import MenuBtn from "./MenuBtn";
import styled from "styled-components";
import LogoutBtn from "./LogoutBtn";

export const NavHeader = styled.header`
  width: 100%;
  display: flex;
  background-color: rgb(255, 255, 255);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  box-sizing: border-box;
  border-bottom: 1px solid rgba(0, 0, 0, 0.04);
`;

export const NavWrapper = styled.div`
  width: 1024px;
  margin: 0 auto;
  padding: 16px 0;
  position: relative;
`;

export const StyledSpan = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  border: 0;
`;

export const Logo = styled.img`
  width: 120px;
  vertical-align: text-bottom;
  margin-bottom: 5px;
`;

export const SearchContainer = styled.section`
  display: flex;
  position: absolute;
  left: 152px;
  top: 16px;
  border-radius: 5px;
  border: solid 1px #e9ecef;
  text-decoration: none;
  padding: 0 1.6rem;
  height: 40px;
  box-sizing: border-box;
`;

export const SearchWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SearchInput = styled.input`
  display: block;
  width: 340px;
  border: none;
  padding: 0;
  margin: 0;
  font-size: 16px;
  color: #212529;
  background-color: transparent;
`;

export const SearchButton = styled.button`
  border: none;
  margin: 0;
  background-color: transparent;
`;

export const SearchButtonImg = styled.img``;

export const MenuContainer = styled.section`
  position: absolute;
  display: flex;
  right: 0;
  top: 16px;
  font-family: Noto Sans KR;
  color: #4d5159;
  cursor: pointer;
`;

const Header = () => {
  const user = getUserInfo();

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <NavHeader>
      <NavWrapper>
        <h1 id="fixed-bar-logo-title">
          <Link to="/">
            <StyledSpan>당근마켓</StyledSpan>
            <Logo
              src="https://d1unjqcospf8gs.cloudfront.net/assets/home/base/header/logo-basic-24b18257ac4ef693c02233bf21e9cb7ecbf43ebd8d5b40c24d99e14094a44c81.svg"
              alt="당근마켓"
            ></Logo>
          </Link>
        </h1>

        <SearchContainer>
          <SearchWrapper>
            <StyledSpan>검색</StyledSpan>
            <SearchInput
              type="text"
              placeholder="동네 이름, 물품명 등을 검색해보세요!"
              name="header-search-input"
            />
            <SearchButton>
              <SearchButtonImg
                src="https://d1unjqcospf8gs.cloudfront.net/assets/home/base/header/search-icon-7008edd4f9aaa32188f55e65258f1c1905d7a9d1a3ca2a07ae809b5535380f14.svg"
                alt="Search"
              ></SearchButtonImg>
            </SearchButton>
          </SearchWrapper>
        </SearchContainer>

        <MenuContainer>
          <Link to="/products">
            <MenuBtn text="동네장터" />
          </Link>
          <Link to="/communities">
            <MenuBtn text="동네생활" />
          </Link>
          <Link to="/chat">
            <MenuBtn text="당근채팅" />
          </Link>
          {!user && (
            <Link to="/login">
              <MenuBtn text="로그인" />
            </Link>
          )}
          {user && (
            <Link to="/mypage">
              <MenuBtn text="My page" />
            </Link>
          )}
          {user && <LogoutBtn handleLogout={handleLogout} text="로그아웃" />}
        </MenuContainer>
      </NavWrapper>
    </NavHeader>
  );
};

export default Header;
