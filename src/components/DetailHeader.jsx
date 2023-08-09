import { styled } from 'styled-components';

import { ReactComponent as CloseIcon } from '../assets/images/large-cancel.svg';

const DetailHeader = () => {
  return (
    <Test>
      <Container>
        <TitleWrapper>
          <Title>상세정보</Title>
          <CloseIcon className="closeIcon" />
        </TitleWrapper>
      </Container>
    </Test>
  );
};
const Test = styled.div`
  width: 360px;
  height: 800px;
`;
const Container = styled.div`
  width: 100%;
  height: 54px;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  background-color: ${({ theme }) => theme.colors.YELLOW};
  padding: 15px 22px;
`;
const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .closeIcon {
    cursor: pointer;
  }
`;
const Title = styled.p`
  color: #ffffff;
  ${({ theme }) => theme.typographies.mainTitle}
`;
export default DetailHeader;
