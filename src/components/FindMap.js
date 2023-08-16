import { styled } from 'styled-components';

import LogoIcon from '../assets/images/logo-design-icon.svg';

import CategoryIcon from './CategoryIcon';
import ChildCardLabel from './ChildCardLabel';
import LinkComponent from './LinkComponent';

const FindMap = ({ data }) => {
  // 업데이트 날짜 로직
  const updatedAtString = data.updatedAt;
  const updatedAtDate = new Date(updatedAtString);

  const year = updatedAtDate.getFullYear();
  const month = String(updatedAtDate.getMonth() + 1).padStart(2, '0');
  const day = String(updatedAtDate.getDate()).padStart(2, '0');
  const formattedDate = `${year}-${month}-${day}`;

  return (
    <FindMapContainer>
      <ContentContainer>
        <ChildCardLabel />
        <StoreInfoContainer>
          <ContentTop>
            <CategoryIconBox>
              <CategoryIcon category={data.category} />
            </CategoryIconBox>
            <StoreNameBox>
              <StoreName>{data.name}</StoreName>
              <StoreCategory>{data.category}</StoreCategory>
            </StoreNameBox>
          </ContentTop>
          <ContentBottom>
            <UpdateTitle>업데이트 날짜</UpdateTitle>
            <UpdateTime>{formattedDate}</UpdateTime>
          </ContentBottom>
        </StoreInfoContainer>
        <MapFindContainer>
          <IconContainer>
            <IconImg src={LogoIcon}></IconImg>
            <IconText>여기 가볼래요 !</IconText>
          </IconContainer>
          <a href={`https://map.kakao.com/link/to/${data.name},${data.latitude},${data.longitude}`} target="_blank">
            <LinkComponent color="#007DFF">카카오맵으로 길찾기</LinkComponent>
          </a>
        </MapFindContainer>
      </ContentContainer>
    </FindMapContainer>
  );
};

const FindMapContainer = styled.div`
  width: 100%;
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
  margin-bottom: 33px;
`;

const CategoryIconBox = styled.div`
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
  margin-right: 10px;
  ${({ theme }) => theme.typographies.body12}
  color: ${({ theme }) => theme.colors.GRAY2};
`;
const UpdateTime = styled.div`
  width: 170px;
  height: 20px;
  font-size: 12px;
  line-height: 18px;
  color: ${({ theme }) => theme.colors.GRAY2};
`;

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
