import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProfileImg } from "../../components/ProfileImg";
export const ChatListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  border: 1px solid rgb(246, 246, 246);
`;

export const ChatListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  min-height: 512px;
  border: 1px solid rgb(246, 246, 246);
`;

export const ChatListTitle = styled.div`
  padding: 20px 0px 0px 20px;
  background-color: white;
  font-weight: bold;
  font-size: 28px;
`;

export const ChatListContent = styled.div`
  width: 100%;
  overflow: hidden scroll;
`;

export const ChatListItem = styled.div`
  background-color: rgb(255, 255, 255);
  cursor: pointer;
  height: 80px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  padding: 0px 20px;
  user-select: none;
  position: relative;
  left: 0px;
  vertical-align: baseline;
  &:hover,
  &:visited,
  &:link,
  &:active {
    background-color: #eeeeee;
  } 
`;

export const ChatListItemImgLink = styled(Link)`
  margin-right: 10px;
  position: relative;
  color: rgb(30, 29, 41);
  text-decoration: none;
  cursor: pointer;
`;

export const ChatListItemImgBox = styled.div`
  position: relative;
  min-width: 50px;
  height: 50px;
  width: 50px;
`;

export const ChatListItemDescription = styled.div`
  width: 100%;
  letter-spacing: -0.5px;
  height: 80px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;

export const ChatListItemDescriptionTitle = styled.div`
  text-overflow: ellipsis;
  font-weight: bold;
  font-size: 12px;
`;

export const ChatListItemDescriptionContent = styled.div`
  display: flex;
  margin-top: 6px;
`;

const ChatList = () => {
  return (
    <>
      <ChatListContainer>
        <ChatListWrapper>
          <ChatListTitle>전체 대화</ChatListTitle>
          <ChatListContent>
            <ChatListItem>
              <ProfileImg />
              <ChatListItemDescription>
                <ChatListItemDescriptionTitle>
                  중고 물건 팔아요
                </ChatListItemDescriptionTitle>
                <ChatListItemDescriptionContent>
                  잠자는 물건, 팔아볼까요??
                </ChatListItemDescriptionContent>
              </ChatListItemDescription>
            </ChatListItem>
          </ChatListContent>
          <ChatListContent>
            <ChatListItem>
              <ProfileImg />
              <ChatListItemDescription>
                <ChatListItemDescriptionTitle>
                  중고 물건 팔아요
                </ChatListItemDescriptionTitle>
                <ChatListItemDescriptionContent>
                  잠자는 물건, 팔아볼까요??
                </ChatListItemDescriptionContent>
              </ChatListItemDescription>
            </ChatListItem>
          </ChatListContent>
          <ChatListContent>
            <ChatListItem>
              <ProfileImg />
              <ChatListItemDescription>
                <ChatListItemDescriptionTitle>
                  중고 물건 팔아요
                </ChatListItemDescriptionTitle>
                <ChatListItemDescriptionContent>
                  잠자는 물건, 팔아볼까요??
                </ChatListItemDescriptionContent>
              </ChatListItemDescription>
            </ChatListItem>
          </ChatListContent>
          <ChatListContent>
            <ChatListItem>
              <ProfileImg />
              <ChatListItemDescription>
                <ChatListItemDescriptionTitle>
                  중고 물건 팔아요
                </ChatListItemDescriptionTitle>
                <ChatListItemDescriptionContent>
                  잠자는 물건, 팔아볼까요??
                </ChatListItemDescriptionContent>
              </ChatListItemDescription>
            </ChatListItem>
          </ChatListContent>
          <ChatListContent>
            <ChatListItem>
              <ProfileImg />
              <ChatListItemDescription>
                <ChatListItemDescriptionTitle>
                  중고 물건 팔아요
                </ChatListItemDescriptionTitle>
                <ChatListItemDescriptionContent>
                  잠자는 물건, 팔아볼까요??
                </ChatListItemDescriptionContent>
              </ChatListItemDescription>
            </ChatListItem>
          </ChatListContent>
          <ChatListContent>
            <ChatListItem>
              <ProfileImg />
              <ChatListItemDescription>
                <ChatListItemDescriptionTitle>
                  중고 물건 팔아요
                </ChatListItemDescriptionTitle>
                <ChatListItemDescriptionContent>
                  잠자는 물건, 팔아볼까요??
                </ChatListItemDescriptionContent>
              </ChatListItemDescription>
            </ChatListItem>
          </ChatListContent>
        </ChatListWrapper>
      </ChatListContainer>
    </>
  );
};

export default ChatList;
