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
}

const CardDisplay: React.FunctionComponent<Props> = ({ citySelection }) => (
  <CardDisplayContainer>
    {citySelection?.map((cityData: any) => (
      <Card cityData={cityData} />
    ))}
  </CardDisplayContainer>
);

export default CardDisplay;
