import styled from 'styled-components';
import { motion } from 'framer-motion';

export const SearchBarContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 34rem;
  height: 3.8em;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0px 2px 12px 3px rgba(0, 0, 0, 0.14);
  overflow: hidden;
  margin: 70px 0px;
  border: solid #bebebe 3px;
  @media screen and (max-width: 630px) {
    width: 90%;
  }
`;

export const SearchInputContainer = styled.div`
  width: 100%;
  min-height: 4em;
  display: flex;
  align-items: center;
  position: relative;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  font-size: 21px;
  color: black;
  font-weight: 400;
  border-radius: 6px;
  background-color: transparent;
  font-family: 'Open Sans', sans-serif;

  &:focus {
    outline: none;
    &::placeholder {
      color: transparent;
    }
  }

  &::placeholder {
    color: black;
    transition: all 250ms ease-in-out;
  }
`;

export const SearchIcon = styled.span`
  color: #bebebe;
  font-size: 27px;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 6px;
  vertical-align: middle;
`;

export const CloseIcon = styled(motion.span)`
  color: #bebebe;
  font-size: 27px;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 6px;
  vertical-align: middle;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: grey;
  }
`;

export const Seperator = styled.span`
  display: flex;
  min-width: 100%;
  min-height: 2px;
  background-color: #bebebe;
`;

export const SearchContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  color: black;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const CityList = styled.ul`
  padding: 0px;
  margin: 0px;
`;

export const CityContainer = styled.li`
  width: 100%;
  height: 2em;
  display: flex;
  padding: 6px 8px;
  align-items: center;

  &:hover {
    background-color: #f2f2f2;
  }
`;

export const Name = styled.h3`
  font-size: 20px;
  color: black;
  margin-left: 10px;
  font-weight: 400;
`;
