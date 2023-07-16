import { StyledHeader } from "./Header.styled";

import logo from "../img/logo.svg";

const Header = () => {
  return (
    <StyledHeader>
      <div className="newline">
      <h1 style={{paddingLeft: 30}}>A COMPETITIVE CODING CALENDAR</h1>
      <img src={logo} alt="logo" style={{paddingTop: 20,backgroundAttachment: "fixed",paddingLeft: 190}} />
      <h1 className="contest" style={{paddingLeft: 150,paddingTop: 3}}>CONTEST</h1>
      </div>
    </StyledHeader>
  );
};

export default Header;
