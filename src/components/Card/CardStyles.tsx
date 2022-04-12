import styled from 'styled-components';
import { motion } from 'framer-motion';

export const CardContainer = styled.div`
  height: 240px;
  width: 600px;
  background-color: white;
  border-radius: 10px;
  margin: 40px;
  display: flex;
  justify-content: space-between;
`;

export const CloseIcon = styled(motion.span)`
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

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 40px;
`;
export const LastUpdated = styled.h4`
  margin: 5px;
  color: black;
  font-size: 1.2rem;
  font-weight: 600;
`;
export const City = styled.h3`
  margin: 5px;
  color: rgba(118, 57, 176, 1);
  font-size: 1.9rem;
  font-weight: 700;
`;
export const Location = styled.h4`
  margin: 5px;
  color: black;
  font-size: 1.5rem;
  font-weight: 400;
`;

export const Values = styled.h4`
  margin: 5px;
  color: black;
  font-size: 1.5rem;
  font-weight: 600;
`;
