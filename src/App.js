import "./App.css";
import Cards from "./UI/Cards";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  .header {
    background: var(--dark);
    color: var(--dark);
    height: 100px;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    align-content: center;
    position: fixed;
    justify-content: center;
    align-items: center;
    align-content: center;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 10;

    .color {
      background: var(--accent);
      width: 200px;
      margin: 0 auto;
      display: block;
      transform: skew(-20deg);
    }

    h1 {
      font-family: var(--headerFont);
    }
  }
`;

function App() {
  return (
    <Container>
      <div className="header">
        <div className="color">
          <h1>USERS</h1>
        </div>
      </div>

      <div className="content-body">
        <Cards />
      </div>
    </Container>
  );
}

export default App;
