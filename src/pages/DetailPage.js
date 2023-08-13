import { styled } from 'styled-components';

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
            <StoreImg />
            <FindMap />
            <StoreDetail />
            <ModifyInfo />
          </DetailContainer>
          <DetailFooter />
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
const ContentContainer = styled.div`
  margin-top: 56px;
`;
const DetailContainer = styled.div`
  margin-bottom: 31px;
`;

const StoreImg = styled.img`
  width: 100%;
  height: 155px;
`;

export default DetailPage;
