import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  position: absolute;
  height: 100vh;
  width: 100vw;
  background: rgb(118, 57, 176);
  background: linear-gradient(
    119deg,
    rgba(118, 57, 176, 1) 18%,
    rgba(69, 115, 174, 1) 74%
  );
  font-family: "Open Sans", sans-serif;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 500;
`;

const SubTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const SubTitle = styled.h2`
  font-size: 2rem;
  font-weight: 400;
  margin: 0px;
`;

const App: React.FunctionComponent = () => (
  <MainContainer>
    <Title>Compare Your Air</Title>
    <SubTitleContainer>
      <SubTitle>Compare the air quality between cities in the UK.</SubTitle>
      <SubTitle>Select cities to compare using the search tool below.</SubTitle>
    </SubTitleContainer>
  </MainContainer>
);

export default App;
