import React from "react";
import styled from "styled-components";

const ButtonStyle = styled.div`
  box-sizing: border-box;
  background: var(--accent);
  color: var(--dark);
  font-family: var(--headerFont);
  width: 100%;
  padding: 10px;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: ease 0.3s;

  &:hover {
    background: red;
    transition: ease 0.3s;
  }
`;

export default function Button(props) {
  return (
    <ButtonStyle type={props.type} onClick={props.click}>
      {props.children}
    </ButtonStyle>
  );
}
