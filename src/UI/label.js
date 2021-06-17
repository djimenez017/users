import React from "react";
import styled from "styled-components";

const LabelStyles = styled.label``;

export default function label(props) {
  return <LabelStyles type="text">{props.children}</LabelStyles>;
}
