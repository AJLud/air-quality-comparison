import styled from 'styled-components';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  position: absolute;
  min-height: 100%;
  width: 100%;
  background: rgb(118, 57, 176);
  background: linear-gradient(110deg, rgba(118, 57, 176, 1) 18%, rgba(69, 115, 174, 1) 74%);
  overflow: auto;
`;

export default MainContainer;
