import { styled } from 'styled-components';

import LogoIcon from '../assets/images/logo-modify-icon.svg';

import LinkComponent from './LinkComponent.jsx';

const ModifyInfo = () => {
  return (
    <ModifyInfoContainer>
      <ContentBox>
        <IconContainer>
          <img src={LogoIcon} alt="logo" />
          <IconText>정보가 잘못됐어요 !</IconText>
        </IconContainer>
        <LinkComponent text="정보 수정 제안하기" color="#636363" />
      </ContentBox>
    </ModifyInfoContainer>
  );
};

export default ModifyInfo;

const ModifyInfoContainer = styled.div`
  display: inline-flex;
  padding: 16px 18px;
  background-color: #ffe070;
`;

const ContentBox = styled.div`
  display: flex;
  align-items: center;
`;
const IconContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 14px;
`;

const IconText = styled.div`
  font-size: 18px;
  font-weight: 500;
  line-height: 18px;
  margin-left: 15px;
`;
