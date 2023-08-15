import { useLocation, useParams } from 'react-router-dom';
import { styled } from 'styled-components';

import StoreLogo from '../assets/images/likelion-logo.svg';
import DetailFooter from '../components/DetailFooter';
import DetailHeader from '../components/DetailHeader';
import FindMap from '../components/FindMap';
import ModifyInfo from '../components/ModifyInfo';
import StoreDetail from '../components/StoreDetail';

const DetailPage = () => {
  const location = useLocation();
  const { id } = useParams();
  return (
    <TestMobile>
      <AllContainer>
        <DetailHeader>상세정보</DetailHeader>
        <ContentContainer>
          <DetailContainer>
            <StoreImgWrapper>
              <StoreImgBox src={StoreLogo} />
            </StoreImgWrapper>
            <FindMap data={location.state} />
            <StoreDetail data={location.state} />
            <ModifyInfo id={id} />
          </DetailContainer>
          <DetailFooter />
        </ContentContainer>
      </AllContainer>
    </TestMobile>
  );
};
const TestMobile = styled.div`
  margin: auto;
  width: 100%;
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

const StoreImgWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px 73px 102px 55px;
`;
const StoreImgBox = styled.img`
  width: 232px;
  height: 26px;
`;

export default DetailPage;
