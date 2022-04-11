import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import CardDisplay from './components/CardDisplay/CardDisplay';
import SearchBar from './components/SearchBar/SearchBar';
import getLocationData from './requests/getLocationData';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  position: absolute;
  height: 100%;
  width: 100%;
  background: rgb(118, 57, 176);
  background: linear-gradient(119deg, rgba(118, 57, 176, 1) 18%, rgba(69, 115, 174, 1) 74%);
  font-family: 'Open Sans', sans-serif;
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
  const [selectedCity, setSelectedCity] = useState({});
  const isCitySelectionEmpty = citySelection.length > 0;

  useEffect(() => {
    getLocationData(selectedCity, citySelection, setCitySelection);
  }, [selectedCity]);

  console.log(citySelection);

  return (
    <MainContainer>
      <Title>Compare Your Air</Title>
      <SubTitleContainer>
        <SubTitle>Compare the air quality between cities in the UK.</SubTitle>
        <SubTitle>Select cities to compare using the search tool below.</SubTitle>
      </SubTitleContainer>
      <SearchBar setSelectedCity={setSelectedCity} />
      <CardDisplay citySelection={citySelection} />
    </MainContainer>
  );
};

export default App;
