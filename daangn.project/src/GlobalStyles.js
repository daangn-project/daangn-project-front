import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;800;900&family=Rubik:wght@800&display=swap');

html {
  font-size: 62.5%;
  height: 100%;
}

* {
  padding: 0;
  margin: 0;
  outline: none;
}

ul {
  padding: 0 !important;
}

li {
  list-style: none;
  display: list-item;
  text-align: -webkit-match-parent;
}

section,
article,
aside,
footer,
header,
nav,
hgroup {
  display: block;
}

input,
select,
textarea {
  border: 0;
  border-radius: 0;
  font-family: inherit;
  color: #000;
  vertical-align: middle;
  outline: 0;
}

a {
  text-decoration: none;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}
h1,
h2,
h3,
h4,
h5 {
  font-weight: 700;
  line-height: 1.5;
}

h1 {
  font-size: 2rem;
}

button .button {
  -webkit-appearance: none;
  border-radius: 6px;
  box-sizing: border-box;
  border: 1px solid #ced4da;
  color: #212529;
  text-align: center;
  font-weight: 700;
  background-color: #fff;
  margin: 1.6rem 0;
  text-decoration: none;
}

input textarea {
  -webkit-appearance: none;
  border: solid 1px #ced4da;
  padding: 1rem 1.4rem;
  margin: 1.6rem 0;
  font-size: 1.6rem;
  border-radius: 3px;
  font-family: inherit;
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

export const Date = styled.span`
  font-size: 12px;
  margin-right: 14px;
  color: #94969b;
  vertical-align: top;
`;

export const Like = styled.li`
  padding: 0 2px;
  height: 20px;
  line-height: 20px;
  color: #a6a6a6;
  font-size: 12px;
  background-repeat: no-repeat;
  background-position: left center;
  background-size: 11px 11px;
  cursor: pointer;
  padding-left: 15px;
  color: #c62917;
  background-image: url(https://everytime.kr/images/new/container.articles.vote.png);

  ${(props) =>
    props.main &&
    css`
      background-size: 20px 20px;
      padding: 0 0 0 25px;
      font-size: 14px;
      font-weight: 600;
    `};
`;

export const CategoryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  height: 33px;
  padding-top: 9px;
`;

export const CategoryMenu = styled.div`
  display: inline-block;
  position: relative;
  width: auto !important;
  height: 31px;
  margin: 0 12px;
  font-size: 14px;
`;

export const CategoryMenuLink = styled(Link)`
  color: #94969b;
  text-decoration: none;
  cursor: pointer;
`;
