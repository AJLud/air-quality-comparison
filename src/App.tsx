import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import CardDisplay from './components/CardDisplay/CardDisplay';
import SearchBar from './components/SearchBar/SearchBar';
import GlobalStyle from './globalStyles';
import getLocationData from './requests/getLocationData';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  position: absolute;
  min-height: 100%;
  width: 100%;
  background: rgb(118, 57, 176);
  background: linear-gradient(119deg, rgba(118, 57, 176, 1) 18%, rgba(69, 115, 174, 1) 74%);
  overflow: auto;
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

const App: React.FunctionComponent = () => {
  const [citySelection, setCitySelection] = useState([]);
  const [selectedCity, setSelectedCity] = useState('');

  useEffect(() => {
    if (selectedCity !== '') getLocationData(selectedCity, setCitySelection);
  }, [selectedCity]);

  return (
    <MainContainer>
      <GlobalStyle />
      <Title>Compare Your Air</Title>
      <SubTitleContainer>
        <SubTitle>Compare the air quality between cities in the UK.</SubTitle>
        <SubTitle>Select cities to compare using the search tool below.</SubTitle>
      </SubTitleContainer>
      <SearchBar setSelectedCity={setSelectedCity} />
      <CardDisplay citySelection={citySelection} setCitySelection={setCitySelection} />
    </MainContainer>
  );
};

export default App;
