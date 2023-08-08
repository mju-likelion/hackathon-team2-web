import { styled } from 'styled-components';

import ZoomIn from '../assets/images/zoom-in.svg';
import ZoomOut from '../assets/images/zoom-out.svg';
const ZoomButton = () => {
  const handleZoomIn = () => {
    // 줌인 버튼 눌렀을때 이벤트
  };

  const handleZoomOut = () => {
    //줌 아웃 눌렀을때 이벤트
  };

  return (
    <ButtonContainer>
      <ZoomInButton onClick={handleZoomIn}>
        <img src={ZoomIn} alt="zoom-in" />
      </ZoomInButton>
      <ZoomOutButton onClick={handleZoomOut}>
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
`;

const ZoomInButton = styled.button`
  width: 30px;
  height: 30px;
  margin-bottom: 6px;
`;

const ZoomOutButton = styled.button`
  width: 30px;
  height: 30px;
`;
