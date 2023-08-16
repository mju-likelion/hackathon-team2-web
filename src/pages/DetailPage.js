import { useLocation, useParams } from 'react-router-dom';
import { styled } from 'styled-components';

import likeLion from '../assets/images/large-likelion-logo.svg';
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
            <StoreImgBox>
              <StoreImg src={likeLion}></StoreImg>
            </StoreImgBox>
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

const StoreImgBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 28px 73px 102px 55px;
`;
const StoreImg = styled.img``;

export default DetailPage;
