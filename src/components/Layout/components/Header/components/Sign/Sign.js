import React from "react";
import styled from "styled-components";
import Flex from "../../../../../Flex";
import Link from "../../../../../Link";

const SIGNS = [];
const Wrapper = styled.nav``;

const Sign = () => (
  <Wrapper>
    <Flex>
      {SIGNS.map((item) => (
        <Link key={item.name} href={item.url}>
          {item.text}
        </Link>
      ))}
    </Flex>
  </Wrapper>
);
export default Sign;
