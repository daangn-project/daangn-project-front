import styled from "styled-components";
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
