import React from "react";
import users from "../users.json";
import styled from "styled-components";
import Card from "./Card";

const CardContainer = styled.div`
  margin-top: 100px;
`;

export default function Cards() {
  return (
    <CardContainer>
      {users.map((user) => {
        return <Card key={user.id} data={user} />;
      })}
    </CardContainer>
  );
}
