import React from 'react';
import { IoClose } from 'react-icons/io5';
import moment from 'moment';
import {
  CardContainer,
  CardInfo,
  LastUpdated,
  City,
  Location,
  Values,
  CloseIcon,
} from './CardStyles';

interface Props {
  cityData: any;
  citySelection: any;
  setCitySelection: any;
}

const Card: React.FunctionComponent<Props> = ({ cityData, setCitySelection, citySelection }) => {
  const handleDelete = () => {
    const filterDeletedCity = citySelection.filter((city: any) => city?.city !== cityData?.city);
    setCitySelection([...filterDeletedCity]);
  };

  const { location, city, measurements } = cityData;

  const lastUpdatedFormatted = moment(measurements[0]).fromNow().toUpperCase();

  const measurementValues = measurements
    .map((measurement: any) => `${measurement.parameter}: ${measurement.value}`)
    .join(' ')
    .toUpperCase();

  return (
    <CardContainer>
      <CardInfo>
        <LastUpdated>{lastUpdatedFormatted}</LastUpdated>
        <Location>{location}</Location>
        <City>{`in ${city}, United Kingdom`}</City>
        <Values>{`Values: ${measurementValues}`}</Values>
      </CardInfo>
      <CloseIcon>
        <IoClose onClick={handleDelete} />
      </CloseIcon>
    </CardContainer>
  );
};

export default Card;
