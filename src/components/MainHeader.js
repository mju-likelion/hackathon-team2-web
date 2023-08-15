import { styled } from 'styled-components';

import { ReactComponent as LogoIcon } from '../assets/images/logo-icon.svg';

const MainHeader = () => {
  return (
    <Container>
      <TitleWrapper>
        <Title>모잇</Title>
        <LogoIcon />
      </TitleWrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 46px;
  position: absolute;
  top: 0;
  z-index: 999;
  padding: 5px 30px;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  background-color: ${({ theme }) => theme.colors.YELLOW};
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
`;
const TitleWrapper = styled.div`
  width: 82px;
  height: 36px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Title = styled.p`
  width: 45px;
  height: 36px;
  font-size: 24px;
  font-weight: 900;
  color: #ffffff;
  display: flex;
  align-items: center;
`;

export default MainHeader;
