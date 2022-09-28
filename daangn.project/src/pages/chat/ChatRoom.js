import styled from "styled-components";

export const ChatRoomContainer = styled.div`
  width: 50%;
  height: 100%;
`;

export const ChatRoomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  min-height: 512px;
  border: 1px solid rgb(246, 246, 246);
`;

export const DefaultContent = styled.div`
  width: 100%;
  position: absolute;
  left: 50%;
  top: 45%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
`;

export const DefaultImg = styled.img`
  width: 120px;
  height: 120px;
`;

export const DefaultMessage = styled.b`
  display: block;
  font-size: 18px;
  font-weight: bold;
  margin-top: 10px;
`;

const ChatRoom = () => {
  return (
    <>
      <ChatRoomContainer>
        <ChatRoomWrapper>
          <DefaultContent>
            <DefaultImg src="https://talk.bunjang.co.kr/static/media/ic_state_empty.8ea71c9e.png" />
            <DefaultMessage>대화방을 선택해주세요.</DefaultMessage>
          </DefaultContent>
        </ChatRoomWrapper>
      </ChatRoomContainer>
    </>
  );
};

export default ChatRoom;
