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

  return (
    cityData && (
      <CardContainer>
        <CardInfo>
          <LastUpdated>{lastUpdatedFormatted}</LastUpdated>
          <City>{location}</City>
          <Location>{`in ${city}, United Kingdom`}</Location>
          <Values>
            {' '}
            Values:
            {measurements?.map((measurement: any) => (
              <>
                {measurements === measurement
                  ? `${measurement.parameter.toUpperCase()}`
                  : measurement.parameter.toUpperCase()}
                :
                {measurements[measurements.length - 1] !== measurement
                  ? ` ${measurement.value}, `
                  : ` ${measurement.value} `}
              </>
            ))}
          </Values>
        </CardInfo>
        <CloseIcon>
          <IoClose onClick={handleDelete} />
        </CloseIcon>
      </CardContainer>
    )
  );
};

export default Card;
