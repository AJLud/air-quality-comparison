import React from 'react';
import styled from 'styled-components';
import Card from '../Card/Card';

const CardDisplayContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: row;
`;

interface Props {
  locationSelection: LocationResponse[];
  setLocationSelection: React.Dispatch<React.SetStateAction<LocationResponse[]>>;
}

const CardDisplay: React.FunctionComponent<Props> = ({
  locationSelection,
  setLocationSelection,
}) => (
  <CardDisplayContainer>
    {locationSelection?.map((locationData: LocationResponse) => (
      <Card
        key={locationData?.city}
        locationData={locationData}
        locationSelection={locationSelection}
        setLocationSelection={setLocationSelection}
      />
    ))}
  </CardDisplayContainer>
);

export default CardDisplay;
