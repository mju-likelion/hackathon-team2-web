import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

import closeIcon from '../assets/images/large-cancel.svg';

const DetailHeader = ({ children }) => {
  const navigate = useNavigate();
  const closeDetail = () => {
    navigate(-1);
  };
  return (
    <Container>
      <TitleWrapper>
        <Title>{children}</Title>
        <CloseIcon src={closeIcon} onClick={closeDetail} />
      </TitleWrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 54px;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  background-color: ${({ theme }) => theme.colors.YELLOW};
  padding: 15px 22px;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
`;
const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const CloseIcon = styled.img`
  cursor: pointer;
`;
const Title = styled.p`
  color: #ffffff;
  ${({ theme }) => theme.typographies.mainTitle}
`;
export default DetailHeader;
