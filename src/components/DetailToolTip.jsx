import { styled } from 'styled-components';

import cancelIcon from '../assets/images/cancel.svg';
import arrow from '../assets/images/large-speech.svg';
import moreIcon from '../assets/images/seemore.svg';

const DetailToolTip = ({ navigate, setIsOpen }) => {
  const goDetailPage = () => {
    navigate('/detail', { state: { key: value } }); // useLocation() - location.state 수신?
  };
  const closeToolTip = () => {
    setIsOpen(false);
  };
  return (
    <Container>
      <Body>
        <StoreImg></StoreImg>
        <ContentContainer>
          <ContentTop>
            <ContentList>
              <StoreName>하이요</StoreName>
              <StoreAddress1>안녕하세요 저는 이진혁 입니다아아아아아아</StoreAddress1>
              <StoreAddress2>하이요</StoreAddress2>
            </ContentList>
            <CancelIcon src={cancelIcon} onClick={closeToolTip} />
          </ContentTop>
          <ContentBottom>
            <MoreIcon src={moreIcon} onClick={goDetailPage}></MoreIcon>
          </ContentBottom>
        </ContentContainer>
      </Body>
      <LargeArrow src={arrow} />
    </Container>
  );
};
const Container = styled.div`
  width: 260px;
  height: 137px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: gray;
  position: relative;
`;
const Body = styled.div`
  width: 260px;
  height: 121px;
  border-radius: 12px;
  background-color: #ffffff;
  padding: 11px 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const StoreImg = styled.img`
  width: 74px;
  height: 86px;
  background-color: #d9d9d9;
`;
const ContentContainer = styled.div`
  width: 148px;
  height: 98px;
`;
const ContentTop = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ContentList = styled.div`
  display: flex;
  flex-direction: column;
`;
const StoreName = styled.div`
  // 스타일 컴포넌트 상속
  width: 120px;
  ${({ theme }) => theme.typographies.detailedTitle}
  margin-bottom: 4px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
const StoreAddress1 = styled.div`
  width: 120px;
  height: 36px;
  ${({ theme }) => theme.typographies.detailedContent}
  color: ${({ theme }) => theme.colors.GRAY2};
  margin-bottom: 4px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
const StoreAddress2 = styled.div`
  width: 120px;
  ${({ theme }) => theme.typographies.detailedContent}
  color: ${({ theme }) => theme.colors.GRAY1};
  margin-bottom: 4px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const CancelIcon = styled.img`
  cursor: pointer;
  width: 16px;
  height: 16px;
`;
const ContentBottom = styled.div`
  height: 18px;
  display: flex;
  justify-content: flex-end;
  display: flex;
  align-items: center;
`;

const MoreIcon = styled.img`
  cursor: pointer;
`;

const LargeArrow = styled.img`
  position: absolute;
  bottom: 2px;
  left: 50%;
  transform: translateX(-50%); // 너비 고려 중앙 정렬
`;

export default DetailToolTip;
