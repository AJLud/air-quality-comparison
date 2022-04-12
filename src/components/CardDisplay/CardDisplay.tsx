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
  citySelection: any;
  setCitySelection: any;
}

const CardDisplay: React.FunctionComponent<Props> = ({ citySelection, setCitySelection }) => (
  <CardDisplayContainer>
    {citySelection?.map((cityData: any) => (
      <Card
        key={cityData?.city}
        cityData={cityData}
        citySelection={citySelection}
        setCitySelection={setCitySelection}
      />
    ))}
  </CardDisplayContainer>
);

export default CardDisplay;
