import React from "react";
import styled from "styled-components";
import Form from "./Form";

const FormStyle = styled.div`
  background: var(--dark);
  width: 600px;
  padding: 40px;
  border-radius: 20px;
  z-index: 10;
  text-align: left;
`;

export default function Modal(props) {
  return (
    <FormStyle>
      <Form />
    </FormStyle>
  );
}
