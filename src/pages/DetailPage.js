import { styled } from 'styled-components';

import ChildCardLabel from '../components/ChildCardLabel';
import DetailFooter from '../components/DetailFooter';
import DetailHeader from '../components/DetailHeader';
import FindMap from '../components/FindMap';
import ModifyInfo from '../components/ModifyInfo';
import StoreDetail from '../components/StoreDetail';
const DetailPage = () => {
  return (
    <TestMobile>
      <AllContainer>
        <DetailHeader />
        <ContentContainer>
          <DetailContainer>
            <StoreImg></StoreImg>
            <FindMap></FindMap>
            <StoreDetail></StoreDetail>
            <ModifyInfo></ModifyInfo>
          </DetailContainer>
          <DetailFooter></DetailFooter>
        </ContentContainer>
      </AllContainer>
    </TestMobile>
  );
};
const TestMobile = styled.div`
  margin: auto;
  width: 360px;
  height: 1072px;
`;
const AllContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
// 헤더 컴포
const ContentContainer = styled.div`
  margin-top: 56px;
`;
const DetailContainer = styled.div`
  margin-bottom: 31px;
`;
// 디테일 형제로 아동 급식 카드 사용자 안내

const StoreImg = styled.img`
  width: 100%;
  height: 155px;
`;
// 디테일 안에 안에 사진 컴포 + 3개 = 4개인데 그 위에 민트색 앱솔루트

export default DetailPage;
