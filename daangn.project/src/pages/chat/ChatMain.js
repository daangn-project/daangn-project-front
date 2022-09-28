import Header from "../../components/Header";
import { MainContainer } from "../../GlobalStyles";
import ChatList from "./ChatList";
import ChatRoom from "./ChatRoom";
import styled from "styled-components";
import Footer from "../../components/Footer";

export const ChatWrapper = styled.div`
  display: flex;
  width: 100%;
  position: absolute;
  border: 1px solid rgb(246, 246, 246);
`;

const ChatMain = () => {
  return (
    <>
      <Header />
      <MainContainer>
        <ChatWrapper>
          <ChatList />
          <ChatRoom />
        </ChatWrapper>
      </MainContainer>
      <Footer />
    </>
  );
};

export default ChatMain;
