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
  locationData: LocationResponse;
  locationSelection: LocationResponse[];
  setLocationSelection: React.Dispatch<React.SetStateAction<LocationResponse[]>>;
}

const Card: React.FunctionComponent<Props> = ({
  locationData,
  setLocationSelection,
  locationSelection,
}) => {
  const handleDelete = () => {
    const filterDeletedCity = locationSelection.filter(
      (location: LocationResponse) => location?.city !== locationData?.city,
    );
    setLocationSelection([...filterDeletedCity]);
  };

  const { location, city, measurements } = locationData;

  const lastUpdatedFormatted = moment(measurements[0]?.lastUpdated).fromNow().toUpperCase();

  const measurementValues = measurements
    .map(({ parameter, value }) => `${parameter}: ${value}`)
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
