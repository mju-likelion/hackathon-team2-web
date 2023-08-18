import { useEffect, useState } from 'react';

import { Outlet, useLocation, useParams } from 'react-router-dom';
import { styled } from 'styled-components';

import { AxiosDetail } from '../api/Detail';
import likeLion from '../assets/images/large-likelion-logo.svg';
import DetailFooter from '../components/DetailFooter';
import DetailHeader from '../components/DetailHeader';
import FindMap from '../components/FindMap';
import ModifyInfo from '../components/ModifyInfo';
import StoreDetail from '../components/StoreDetail';

const DetailPage = () => {
  const { id } = useParams();
  const [detailData, setDetailData] = useState(null);
  useEffect(() => {
    AxiosDetail(id, setDetailData, handleError);
  }, []);
  const handleError = (error) => {
    if (error.response.data.statusCode === 404) {
      navigate('/404Error');
    } else if (error.response.data.statusCode === 500) {
      navigate('/500Error');
    }
  };

  if (!detailData) {
    return 'loading...';
  }

  return (
    <>
      <AllContainer>
        <DetailHeader>상세정보</DetailHeader>
        <ContentContainer>
          <DetailContainer>
            <StoreImgBox>
              <StoreImg src={likeLion} />
            </StoreImgBox>
            <FindMap data={detailData} />
            <StoreDetail data={detailData} />
            <ModifyInfo id={id} />
          </DetailContainer>
          <DetailFooter />
        </ContentContainer>
      </AllContainer>
      <Outlet />
    </>
  );
};

const AllContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  z-index: 100;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #ffffff;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
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
