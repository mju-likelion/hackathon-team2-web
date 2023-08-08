import styled from 'styled-components';

import { ReactComponent as Research } from '../assets/images/research.svg';

const ResearchButton = () => {
  return (
    <ButtonContainer>
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
  background-color: ${({ theme }) => {
    theme.colors.YELLOW;
  }};
  border-radius: 50%;
`;
const ContentWrapper = styled.div`
  width: 146px;
  height: 24px;
  display: flex;
  justify-content: space-between;
`;
const IconWrapper = styled.div`
  width: 24px;
  height: 24px;
  background-color: #ffffff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ResearchText = styled.div`
  font-size: 13px;
  font-weight: 500;
  line-height: 18px;
`;
export default ResearchButton;
