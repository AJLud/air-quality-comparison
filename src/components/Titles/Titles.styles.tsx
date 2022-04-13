import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 500;
  text-align: center;
  margin-top: 60px;
  @media screen and (max-width: 890px) {
    font-size: 2.5rem;
  }
  @media screen and (max-width: 630px) {
    font-size: 2rem;
  }
`;

export const SubTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  @media screen and (max-width: 630px) {
    width: 80%;
  }
`;

export const SubTitle = styled.h2`
  font-size: 2rem;
  font-weight: 400;
  margin: 0px;
  text-align: center;
  @media screen and (max-width: 890px) {
    font-size: 1.5rem;
  }
  @media screen and (max-width: 630px) {
    margin: 10px;
    font-size: 1.3rem;
  }
`;
