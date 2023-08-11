import { styled } from 'styled-components';

import { ReactComponent as Research } from '../assets/images/research.svg';

const SearchButton = ({ bgColor, fontColor }) => {
  const markerResearch = () => {}; // 마커 데이터 재호출
  const goBack = () => {};
  return bgColor === '#FFE070' ? (
    <ButtonContainer onClick={markerResearch} bgColor={bgColor}>
      <ContentWrapper>
        <Research />
        <ButtonText fontColor={fontColor}>이 지역에서 다시 검색</ButtonText>
      </ContentWrapper>
    </ButtonContainer>
  ) : (
    <ButtonContainer onClick={goBack} bgColor={bgColor}>
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
  background-color: ${({ bgColor }) => bgColor};
  border-radius: 999px;
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
