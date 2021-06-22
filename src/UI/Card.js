import React from "react";
import styled from "styled-components";

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
  h3 {
    margin: 0;
  }

  p {
    margin: 0;
    color: var(--accent);
  }

  .name {
    display: flex;
    justify-content: space-between;
  }

  address {
    color: var(--accent);
  }
`;

export default function Card(props) {
  let userData = props.data;
  return (
    <CardStyle>
      <div className="name">
        <div>
          <p>name:</p>
          <h2>{userData.name}</h2>
        </div>
        <h3>{userData.company.name}</h3>
      </div>
      <p>Employee ID:</p>
      <h3>{userData.id}</h3>
      <br />
      <p>Email:</p>
      <h3>{userData.email}</h3>
      <p>Website:</p>
      <h3> {userData.website}</h3>
      <br />
    </CardStyle>
  );
}
