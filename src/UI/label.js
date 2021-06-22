import React from "react";
import styled from "styled-components";

const LabelStyles = styled.label`
  color: var(--accent);
  font-size: 18px;
`;

export default function label(props) {
  return <LabelStyles type="text">{props.children}</LabelStyles>;
}
