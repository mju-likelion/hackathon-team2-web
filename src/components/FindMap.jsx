import { styled } from 'styled-components';

import LogoIcon from '../assets/images/logo-design-icon.svg';

import LinkComponent from './LinkComponent.jsx';

const FindMap = () => {
  return (
    <FindMapContainer>
      <ContentBox>
        <IconConatiner>
          <img src={LogoIcon} alt="logo-icon" />
          <IconText>여기 가볼래요 !</IconText>
        </IconConatiner>
        <LinkComponent text="카카오맵으로 길찾기" color="#007DFF" />
      </ContentBox>
    </FindMapContainer>
  );
};

export default FindMap;

const FindMapContainer = styled.div`
  display: inline-flex;
  height: 240px;
  padding: 16px 24px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background-color: #ffe070;
`;

const ContentBox = styled.div`
  display: flex;
  align-items: center;
`;

const IconConatiner = styled.div`
  display: flex;
  align-items: center;
  margin-right: 21px;
`;

const IconText = styled.div`
  margin-left: 15px;
  font-size: 18px;
  font-weight: 500;
  font-style: normal;
  line-height: 18px;
  text-align: center;
`;
