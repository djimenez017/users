import React from "react";
import styled from "styled-components";
import Label from "./label";
import Input from "./input";
import Button from "./Button";

const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
`;

export default function Form() {
  return (
    <FormStyle>
      <Label>Name:</Label>
      <Input type placeholder="Full Name"></Input>

      <Label>Employee ID:</Label>
      <Input type="number" placeholder="id"></Input>

      <Label>Email Address:</Label>
      <Input type="email" placeholder="example@jimenez.tech"></Input>

      <Label>Website:</Label>
      <Input type="url" placeholder="www.jimenez.tech"></Input>
      <Button type="submit">Add User</Button>
    </FormStyle>
  );
}
