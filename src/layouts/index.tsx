import React, { FunctionComponent, ReactNode } from "react";
import Link from "next/link";
import styled from "styled-components";

interface Props {
  children: ReactNode;
  subChildren: ReactNode;
}

const Wrapper = styled.section`
  height: 110vh;
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: 75px 3fr 10vh;
  grid-template-areas:
    "header header"
    "content sidebar"
    "footer footer";
`;

const StyledHeader = styled.header`
  grid-area: header;
`;

const Footer = styled.footer`
  grid-area: footer;
`;

const Content = styled.section`
  grid-area: content;
`;

const Sidebar = styled.aside`
  grid-area: sidebar;
`;

const Header: FunctionComponent<Props> = ({ children, subChildren }: Props) => {
  return (
    <Wrapper>
      <StyledHeader>
        <h1>sephi.dev</h1>
        <nav>
          <Link href="/articles">Articles</Link>
          <Link href="/a-propos">Moi</Link>
        </nav>
      </StyledHeader>
      <Content>{children}</Content>
      <Sidebar>{subChildren}</Sidebar>
      <Footer>c'est le footer</Footer>
    </Wrapper>
  );
};

export default Header;
