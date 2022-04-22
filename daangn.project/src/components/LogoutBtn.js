import { MenuButton } from "./MenuBtn";

const LogoutBtn = ({ handleLogout, text }) => {
  return <MenuButton onClick={handleLogout}>{text}</MenuButton>;
};

export default LogoutBtn;
