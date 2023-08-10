import { styled } from 'styled-components';

import LogoIcon from '../assets/images/logo-design-icon.svg';

import ChildCardLabel from './ChildCardLabel';
import LinkComponent from './LinkComponent';
const FindMap = ({ categorySrc, name, category, updateAt }) => {
  return (
    <FindMapContainer>
      <ContentContainer>
        <ChildCardLabel />
        <StoreInfoContainer>
          <ContentTop>
            <CategoryIcon src={categorySrc}></CategoryIcon>
            <StoreNameBox>
              <StoreName>{name}</StoreName>
              <StoreCategory>{category}</StoreCategory>
            </StoreNameBox>
          </ContentTop>
          <ContentBottom>
            <UpdateTitle>업데이트 날짜</UpdateTitle>
            <UpdateTime>{updateAt}</UpdateTime>
          </ContentBottom>
        </StoreInfoContainer>
        <MapFindContainer>
          <IconContainer>
            <IconImg src={LogoIcon}></IconImg>
            <IconText>여기 가볼래요 !</IconText>
          </IconContainer>
          <LinkComponent color="#007DFF">카카오맵으로 길찾기</LinkComponent>
        </MapFindContainer>
      </ContentContainer>
    </FindMapContainer>
  );
};

const FindMapContainer = styled.div`
  /* width: 100%; */
  width: 360px;
  height: 252px;
  padding: 52px 24px 16px 24px;
  background-color: ${({ theme }) => theme.colors.YELLOW};
`;
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;
// 내부 가맹점 정보 카드 (white)
const StoreInfoContainer = styled.div`
  padding: 18px 20px 10px 20px;
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #ffffff;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.25);
`;

const ContentTop = styled.div`
  display: flex;
  justify-content: space-between;
`;
const CategoryIcon = styled.img`
  width: 24px;
  height: 24px;
`;
const StoreNameBox = styled.div`
  height: 49px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StoreName = styled.div`
  width: 220px;
  height: 100%;
  font-size: 18px;
  font-weight: 500;
  line-height: 18px;
  display: flex;
  justify-content: center;
`;
const StoreCategory = styled.div`
  width: 148px;
  height: 20px;
  font-size: 13px;
  font-weight: 400;
  line-height: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ContentBottom = styled.div`
  display: flex;
  justify-content: space-between;
`;
const UpdateTitle = styled.div`
  width: 80px;
  height: 20px;
  ${({ theme }) => theme.typographies.body12}
  color: ${({ theme }) => theme.colors.GRAY2};
`;
const UpdateTime = styled.div`
  width: 170px;
  height: 20px;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  color: ${({ theme }) => theme.colors.GRAY2};
`;
//
const MapFindContainer = styled.div`
  display: flex;
  align-items: center;
`;
const IconContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 21px;
`;
const IconImg = styled.img`
  margin-right: 15px;
`;
const IconText = styled.div`
  font-size: 18px;
  font-weight: 500;
  line-height: 18px;
`;

export default FindMap;
