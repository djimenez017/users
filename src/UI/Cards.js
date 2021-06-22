import React, { useState } from "react";
import users from "../users.json";
import styled from "styled-components";
import Card from "./Card";
import Button from "./Button";
import Backdrop from "./Backdrop";

const FullContainer = styled.div`
  display: flex;
  width: 950px;
  margin: 0 auto;
`;

const CardContainer = styled.div`
  margin: 100px 0 0 0;
`;

const EditContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--dark);
  border: 3px solid var(--grey);
  margin: 20px auto;
`;

export default function Cards() {
  const [list, setList] = useState(users);
  const [showModal, setShowModal] = useState(false);

  const deleteUserHandler = (id) => {
    console.log(`User ${id} was deleted`);
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  };

  const updateUserHandler = (id) => {
    console.log(`Edit user`);
  };

  const newUserHandler = (id) => {
    console.log("New user");
  };

  return (
    <CardContainer>
      {list.map((user) => {
        return (
          <FullContainer key={user.id}>
            <Card data={user} />{" "}
            <EditContainer>
              <Button click={() => updateUserHandler(user.id)}>Edit</Button>
              <Button click={() => deleteUserHandler(user.id)}>Delete</Button>
            </EditContainer>
          </FullContainer>
        );
      })}
    </CardContainer>
  );
}
