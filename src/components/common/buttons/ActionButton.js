import React from "react";
import styled from "styled-components";

const StyledActionButton = styled.div`
  position: fixed;
  right: 20px;
  top: 10px;
  z-index: 1000;
  width: 80px;
  height: 80px;
  cursor: pointer;
`;

export function ActionButton(props) {
  return (
    <>
      {!props.signedAccountId && (
        <StyledActionButton>
          <button
            onClick={props.requestSignIn}
            style={{ padding: "12px", fontWeight: "var(--font-weight-medium)" }}
          >
            Sign In
          </button>
        </StyledActionButton>
      )}
    </>
  );
}
