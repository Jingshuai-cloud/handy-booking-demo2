import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import theme from "../../../../theme";
import Flex from "../../../Flex";
import { darken } from "polished";
import Button from "../../../Button";
import Navigation from "./components/Navigation";
import Sign from "./components/Sign";

const Wrapper = styled.div`
  border-bottom: ${(props) => props.theme.border.default};
  font-weight: 600;
  color: ${(props) => props.theme.color.grey};
  background-color: ${(props) => props.theme.color.white};
  display: flex;
  justify-content: center;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  height: 58px;
  z-index: 100;
`;

const MainMenu = styled.div`
  height: 100%;
  width: 72%;

  display: flex;

  align-items: center;
`;

const MenuLeft = styled.div`
  display: flex;
`;

const MenuRight = styled.div`
  margin-left: auto;

  display: flex;
`;

const Logo = styled.div`
  padding: 0 ${(props) => props.theme.gutter.md};
  border-right: ${(props) => props.theme.border.default};
  display: flex;

  align-items: center;
`;

const Header = ({ className }) => (
  <Wrapper className={className}>
    <MainMenu>
      <MenuLeft>
        <Link to={"/"}>
          <Logo>Handy-Booking</Logo>
        </Link>

        <Link to={"/post-task"}>
          <Button>Post a task</Button>
        </Link>
        <Navigation></Navigation>
      </MenuLeft>
      <MenuRight>
        <Sign></Sign>
        <Link to={"/post-task"}>
          <Button>Become a tasker</Button>
        </Link>
      </MenuRight>
    </MainMenu>
  </Wrapper>
);

export default Header;
