import { Link } from "react-router-dom";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;800;900&family=Rubik:wght@800&display=swap');

*{
    margin: 0;
    padding: 0;
    box-sizing: inherit;
}

body, button, dd, div, dl, dt, fieldset, form, h1, h2, h3, h4, h5, h6, img, input, legend, li, ol, p, pre, select, table, td, textarea, th, ul {
    margin: 0;
    padding: 0;
    color: #222;
    font-size: 14px;
    font-family: "Roboto","Noto Sans KR",AppleSDGothicNeo-Regular,"Malgun Gothic","맑은 고딕",dotum,"돋움",sans-serif;
    line-height: 1.25em;
    word-wrap: break-word;
}
  `;
export default GlobalStyles;

export const MainContainer = styled.section`
  padding: 90px 0 0 0;
  width: 1024px;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
`;

export const OptionalContainer = styled.section`
  width: 980px;
  min-height: 200px;
  width: 100%;
`;

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1024px;
  position: relative;
  padding-top: 20px;
`;

export const HorizontalLine = styled.hr`
  overflow: visible;
  border-image: initial;
  border-top: 1px solid rgb(196, 196, 196);
  color: rgb(196, 196, 196);
  text-align: center;
  letter-spacing: 0.045em;

  &::after {
    position: relative;
    top: -10px;
    padding: 10px 20px;
    background: rgb(255, 255, 255);
    font-size: 12px;
    color: rgb(128, 128, 128);
    text-align: center;
    line-height: 1.5;
    content: "MORE";
  }
`;

export const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    color: black;
    text-decoration: none;
  }
`;
