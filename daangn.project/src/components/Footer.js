import styled from "styled-components";

export const FooterContainer = styled.div`
  background: #495057;
  height: 120px;
`;

export const CopyrightContainer = styled.div`
  width: 1020px;
  margin: 0 auto;
  line-height: 120px;
  vertical-align: middle;
`;

export const Copyright = styled.span`
  padding: 21px 0 3px 0;
  color: #fff;
  font-size: 14px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <CopyrightContainer>
        <Copyright>
          DaangnMarket By <b>josh5734@naver.com / steady.resilient@gmail.com</b>
        </Copyright>
      </CopyrightContainer>
    </FooterContainer>
  );
};

export default Footer;
