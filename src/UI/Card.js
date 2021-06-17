import React from "react";
import styled from "styled-components";
import Input from "./input";
import Label from "./label";

const WholeThing = styled.div`
  display: flex;
  width: 950px;
  margin: 0 auto;
`;

const CardStyle = styled.div`
  background: var(--dark);
  border: 3px solid var(--grey);
  width: 800px;
  margin: 20px auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: left;

  h2,
  h3,
  p {
    margin: 0;
  }

  .name {
    display: flex;
    justify-content: space-between;
  }

  label,
  address {
    color: var(--accent);
  }
`;

const EditContainer = styled.div`
  background: var(--dark);
  border: 3px solid var(--grey);
  margin: 20px auto;
  padding: 20px;
`;

export default function Card(props) {
  let userData = props.data;
  console.log(userData);
  return (
    <WholeThing>
      <CardStyle>
        <form>
          <div className="name">
            <div>
              <Label>name: </Label>
              <Input value={userData.name}></Input>
            </div>
            <h3>{userData.company.name}</h3>
          </div>

          <Label>Employee ID: </Label>
          <Input value={userData.id}></Input>
          <br />
          <p>
            <Label>Email:</Label> <input value={userData.email}></input>
          </p>
          <p>
            <Label>Website:</Label> <Input value={userData.website}></Input>
          </p>
          <br />
          <address>
            {userData.address.street}, {userData.address.zipcode},{" "}
            {userData.address.city}
          </address>
        </form>
      </CardStyle>
      <EditContainer>Edit</EditContainer>
    </WholeThing>
  );
}
