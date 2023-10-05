import { Widget } from "near-social-vm";
import React from "react";
import styled from "styled-components";
import { useHashRouterLegacy } from "../hooks/useHashRouterLegacy";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;
  align-items: stretch;
  padding-bottom: 48px;
`;

export default function BoroughPage(props) {
  useHashRouterLegacy();

  const src = props.widgets.default;

  return (
    <Container>
      <Widget key={src} src={src} props={{ tab: "boroughs", signIn: props.requestSignIn }} />
    </Container>
  );
}
