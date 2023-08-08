import styled from 'styled-components';

import { ReactComponent as Research } from '../assets/images/research.svg';

const ResearchButton = () => {
  const MarkerResearch = () => {}; // 마커 데이터 재호출

  return (
    <ButtonContainer onClick={MarkerResearch}>
      <ContentWrapper>
        <IconWrapper>
          <Research></Research>
        </IconWrapper>
        <ResearchText>이 지역에서 다시 검색</ResearchText>
      </ContentWrapper>
    </ButtonContainer>
  );
};

const ButtonContainer = styled.button`
  width: 162px;
  height: 44px;
  padding: 10px 8px;
  background-color: ${({ theme }) => theme.colors.YELLOW};
  border-radius: 23px; // 이거 값 물어봐야됨.
`;
const ContentWrapper = styled.div`
  width: 146px;
  height: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const IconWrapper = styled.div`
  width: 24px;
  height: 100%;
  background-color: #ffffff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ResearchText = styled.div`
  width: 117px;
  height: 18px;
  font-size: 13px;
  font-weight: 500;
  line-height: 18px;
`;
export default ResearchButton;
