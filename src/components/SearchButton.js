import { styled, css } from 'styled-components';

import { ReactComponent as Research } from '../assets/images/research.svg';

const SearchButton = ({ background, fontColor, position }) => {
  const markerResearch = () => {}; // 마커 데이터 재호출
  const goBack = () => {};
  return background === '#FFE070' ? (
    <ButtonContainer onClick={markerResearch} background={background} position={position}>
      <ContentWrapper>
        <Research />
        <ButtonText fontColor={fontColor}>이 지역에서 다시 검색</ButtonText>
      </ContentWrapper>
    </ButtonContainer>
  ) : (
    <ButtonContainer onClick={goBack} background={background}>
      <ButtonText fontColor={fontColor}>이전 페이지로 돌아가기</ButtonText>
    </ButtonContainer>
  );
};

const ButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 162px;
  height: 44px;
  padding: 10px 8px;
  background-color: ${({ background }) => background};
  border-radius: 999px;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.25);
  ${({ position }) =>
    position === 'absolute' &&
    css`
      position: absolute;
      bottom: 68px;
      z-index: 99;
      transform: translateX(-50%);
      left: 50%;
    `}
`;

const ContentWrapper = styled.div`
  width: 146px;
  height: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ButtonText = styled.p`
  display: flex;
  align-items: center;
  font-size: 13px;
  font-weight: 500;
  line-height: 18px;
  color: ${({ fontColor }) => fontColor};
`;
export default SearchButton;
