import { styled } from 'styled-components';

import Logo from '../assets/images/big-logo.svg';
import call from '../assets/images/call.svg';
import pin from '../assets/images/pin.svg';
import price from '../assets/images/price-icon.svg';
import time from '../assets/images/time.svg';
import web from '../assets/images/web.svg';
import DetailHeader from '../components/DetailHeader';
import ModifyDetail from '../components/ModifyDetail';

const ModifyInfoPage = () => {
  return (
    <ModifyContainer>
      <DetailHeader>정보수정</DetailHeader>
      <ModifyBox>
        <ModifyTitleBox>
          <TitleWrapper>
            <ModifyTitle>정보가 잘못됐어요!</ModifyTitle>
            <TitleDetail>잘못된 정보를 알고 있는 정보로 제안해주세요!</TitleDetail>
          </TitleWrapper>
          <img src={Logo} alt="logo-icon" />
        </ModifyTitleBox>
        <ModifyContentBox>
          <ModifyDetail img={time}>영업시간 수정할래요 !</ModifyDetail>
          <ModifyDetail img={call}>전화번호 수정할래요 !</ModifyDetail>
          <ModifyDetail img={web}>홈페이지 정보 수정할래요 !</ModifyDetail>
          <ModifyDetail img={price}>가격정보 수정할래요 !</ModifyDetail>
          <ModifyDetail img={pin}>장소명 및 위치 수정할래요 !</ModifyDetail>
        </ModifyContentBox>
      </ModifyBox>
    </ModifyContainer>
  );
};

export default ModifyInfoPage;

const ModifyContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 94px;
  position: absolute;
  z-index: 300;
  top: 0;
  left: 0;
`;

const ModifyBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 37px;
`;

const ModifyTitleBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 37px;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const ModifyTitle = styled.div`
  height: 21px;
  font-size: 18px;
  font-weight: 700;
  line-height: 18px;
`;

const TitleDetail = styled.div`
  height: 16px;
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
`;

const ModifyContentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 13px;
`;
