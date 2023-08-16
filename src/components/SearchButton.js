import { useNavigate } from 'react-router-dom';
import { css, styled } from 'styled-components';

import { ReactComponent as Research } from '../assets/images/research.svg';

const SearchButton = ({ background, fontColor, position, onClick }) => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  return background === '#FFE070' ? (
    <ButtonContainer background={background} position={position} onClick={onClick}>
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
const ButtonText = styled.div`
  display: flex;
  align-items: center;
  font-size: 13px;
  font-weight: 500;
  line-height: 18px;
  color: ${({ fontcolor }) => fontcolor};
`;
export default SearchButton;
