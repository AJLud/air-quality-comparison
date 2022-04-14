import React from 'react';
import Card from '../Card/Card';
import CardDisplayContainer from './CardDisplay.styles';

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
