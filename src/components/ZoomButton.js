import { styled } from 'styled-components';

import ZoomIn from '../assets/images/zoom-in.svg';
import ZoomOut from '../assets/images/zoom-out.svg';
const ZoomButton = ({ zoomIn, zoomOut }) => {
  return (
    <ButtonContainer>
      <ZoomInButton onClick={zoomIn}>
        <img src={ZoomIn} alt="zoom-in" />
      </ZoomInButton>
      <ZoomOutButton onClick={zoomOut}>
        <img src={ZoomOut} alt="zoom-out" />
      </ZoomOutButton>
    </ButtonContainer>
  );
};

export default ZoomButton;

const ButtonContainer = styled.div`
  width: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: -1px;
  position: fixed;
  bottom: 40px;
  right: 22px;
  z-index: 99;
`;

const ZoomInButton = styled.button`
  width: 30px;
  height: 30px;
`;

const ZoomOutButton = styled.button`
  width: 30px;
  height: 30px;
`;
