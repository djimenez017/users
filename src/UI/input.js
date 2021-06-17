import React from "react";
import styled from "styled-components";

const InputStyle = styled.input``;

export default function input(props) {
  return <InputStyle type="text" value={props.value}></InputStyle>;
}
