import styled from "styled-components";

export const MenuButton = styled.button`
  font-size: 16px;
  background-color: white;
  width: 80px;
  height: 40px;
  border: 1px solid white;
  border-radius: 10px;
  margin-left: 5px;
  line-height: 40px;
  color: #4a4a4a;
  font-style: normal;
  font-weight: bold;
  transition: all 0.2s;

  &:focus {
    outline: none;
  }

  &:hover {
    color: #ff8a3d;
  }
`;

const MenuBtn = ({ text }) => {
  return <MenuButton>{text}</MenuButton>;
};

export default MenuBtn;
