import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1024px;
  padding-top: 20px;
  margin: 0 auto;
`;

export const MainHeader = ({ text }) => {
  return (
    <HeaderWrapper>
      <h2>{text}</h2>
    </HeaderWrapper>
  );
};
