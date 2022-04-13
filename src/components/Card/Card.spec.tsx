/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Card from './Card';

describe('SearchBar', () => {
  const mockSetState = jest.fn();
  const locationSelection: LocationResponse[] = [];
  const locationData = {
    location: 'Salford Eccles',
    city: 'Manchester',
    country: 'GB',
    coordinates: {
      latitude: 53.48481,
      longitude: -2.334139,
    },
    measurements: [
      {
        parameter: 'pm25',
        value: 24,
        lastUpdated: '2022-04-13T04:00:00+00:00',
        unit: 'µg/m³',
      },
      {
        parameter: 'no2',
        value: 18,
        lastUpdated: '2022-04-13T04:00:00+00:00',
        unit: 'µg/m³',
      },
      {
        parameter: 'pm10',
        value: 32,
        lastUpdated: '2022-04-13T04:00:00+00:00',
        unit: 'µg/m³',
      },
    ],
  };
  it('matches snapshot', () => {
    const { getByTestId } = render(
      <Card
        setLocationSelection={mockSetState}
        locationSelection={locationSelection}
        locationData={locationData}
      />,
    );
    expect(getByTestId('Card')).toMatchSnapshot();
  });
});
