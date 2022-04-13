import React, { useState, useEffect } from 'react';
import CardDisplay from './components/CardDisplay/CardDisplay';
import SearchBar from './components/SearchBar/SearchBar';
import GlobalStyle from './globalStyles';
import getLocationData from './requests/getLocationData';
import MainContainer from './App.styles';
import Titles from './components/Titles/Titles';

const App: React.FunctionComponent = () => {
  const [locationSelection, setLocationSelection] = useState<LocationResponse[]>([]);
  const [selectedCity, setSelectedCity] = useState<string>('');

  useEffect(() => {
    if (selectedCity !== '') getLocationData(selectedCity, setLocationSelection);
  }, [selectedCity]);

  return (
    <MainContainer>
      <GlobalStyle />
      <Titles />
      <SearchBar setSelectedCity={setSelectedCity} />
      <CardDisplay
        locationSelection={locationSelection}
        setLocationSelection={setLocationSelection}
      />
    </MainContainer>
  );
};

export default App;
