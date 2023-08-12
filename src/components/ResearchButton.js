import { styled, css } from 'styled-components';

import { ReactComponent as Research } from '../assets/images/research.svg';

const ResearchButton = ({ bgColor, fontColor, position, setIsOpenResearch, isOpenResearch }) => {
  const MarkerResearch = () => {}; // 마커 데이터 재호출

  return (
    isOpenResearch && (
      <ButtonContainer
        onClick={() => {
          MarkerResearch;
          setIsOpenResearch(false);
        }}
        bgColor={bgColor}
        position={position}
      >
        {bgColor === '#FFE070' ? (
          <ContentWrapper>
            <Research />
            <ResearchText fontColor={fontColor}>이 지역에서 다시 검색</ResearchText>
          </ContentWrapper>
        ) : (
          <ResearchText fontColor={fontColor}>이 지역에서 다시 검색</ResearchText>
        )}
      </ButtonContainer>
    )
  );
};

const ButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 162px;
  height: 44px;
  padding: 10px 8px;
  background-color: ${({ bgColor }) => bgColor};
  border-radius: 999px;
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
const ResearchText = styled.p`
  width: 117px;
  height: 18px;
  display: flex;
  align-items: center;
  font-size: 13px;
  font-weight: 500;
  line-height: 18px;
  color: ${({ fontColor }) => fontColor};
`;
export default ResearchButton;
