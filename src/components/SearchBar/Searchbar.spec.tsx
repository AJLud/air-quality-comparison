/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchBar from './SearchBar';

describe('SearchBar', () => {
  const mockSetState = jest.fn();
  it('matches snapshot', () => {
    const { getByTestId } = render(<SearchBar setSelectedCity={mockSetState} />);
    expect(getByTestId('SearchBar')).toMatchSnapshot();
  });
});
