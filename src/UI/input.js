import React from "react";
import styled from "styled-components";

const InputStyle = styled.input`
  padding: 5px;
  margin: 5px;
  border-bottom: 1px solid var(--accent);
  background: var(--dark);
  color: var(--clear);
  font-size: 20px;
  caret-color: var(--accent);
  margin-bottom: 30px;
`;

export default function input(props) {
  return (
    <InputStyle
      type={props.type || "text"}
      placeholder={props.placeholder}
    ></InputStyle>
  );
}
