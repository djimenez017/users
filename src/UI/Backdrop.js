import React from "react";
import styled from "styled-components";
import Modal from "./Modal";

const BackdropStyle = styled.div`
  width: 100%;
  height: 100vh;
  z-index: 9;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  background: var(--accent);
`;

export default function Backdrop(props) {
  return (
    <BackdropStyle onClick={props.click}>
      <Modal />
    </BackdropStyle>
  );
}
