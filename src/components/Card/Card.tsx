import React from 'react';
import styled from 'styled-components';
import { IoClose } from 'react-icons/io5';
import { motion } from 'framer-motion';

const CardContainer = styled.div`
  height: 240px;
  width: 600px;
  background-color: white;
  border-radius: 10px;
  margin: 40px;
  display: flex;
  justify-content: space-between;
  transition: all 1s ease-in;
`;

const CloseIcon = styled(motion.span)`
  position: relative;
  color: black;
  font-size: 45px;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 6px;
  right: 0px;
  top: 0px;

  &:hover {
    color: #b8b8b8;
  }
`;

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 40px;
`;
const LastUpdated = styled.h4`
  margin: 5px;
  color: black;
  font-size: 1.2rem;
  font-weight: 600;
`;
const City = styled.h3`
  margin: 5px;
  color: rgba(118, 57, 176, 1);
  font-size: 1.9rem;
  font-weight: 700;
`;
const Location = styled.h4`
  margin: 5px;
  color: black;
  font-size: 1.5rem;
  font-weight: 400;
`;

const Values = styled.h4`
  margin: 5px;
  color: black;
  font-size: 1.5rem;
  font-weight: 600;
`;

interface Props {
  cityData: any;
}

const Card: React.FunctionComponent<Props> = ({ cityData }) => {
  console.log(cityData[0]);
  return (
    cityData[0] && (
      <CardContainer>
        <CardInfo>
          <LastUpdated>UPDATED AN HOUR AGO</LastUpdated>
          <City>{cityData[0].location}</City>
          <Location>{`in ${cityData[0].city}, United Kingdom`}</Location>
          <Values>
            {' '}
            Values:
            {cityData[0].measurements?.map((element: any) => (
              <>
                {cityData[0].measurements[0] === element
                  ? ` ${element.parameter.toUpperCase()}`
                  : element.parameter.toUpperCase()}
                :
                {cityData[0].measurements[cityData[0].measurements.length - 1] !== element
                  ? ` ${element.value},`
                  : ` ${element.value}`}
              </>
            ))}
          </Values>
        </CardInfo>
        <CloseIcon>
          <IoClose />
        </CloseIcon>
      </CardContainer>
    )
  );
};

export default Card;
