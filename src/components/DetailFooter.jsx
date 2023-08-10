import React from 'react';

import { styled } from 'styled-components';

import Warn from '../assets/images/warn.svg';

const DetailFooter = () => {
  return (
    <FooterContainer>
      <FooterBox>
        <img src={Warn} alt="warn-icon" />
        <FooterContentBox>
          <FooterTitle>아동급식카드 사용처 안내</FooterTitle>
          <FooterContent>
            아동급식카드 가맹점 입니다.매장에서의 아동급식카드 사용 여부는 방문 전 한 번 더 확인을 부탁드립니다.
          </FooterContent>
          <FooterDetail>서울특별시 제공</FooterDetail>
        </FooterContentBox>
      </FooterBox>
    </FooterContainer>
  );
};

export default DetailFooter;

const FooterContainer = styled.div`
  display: inline-flex;
  padding: 11px 16px;
`;

const FooterBox = styled.div`
  display: flex;
  align-items: center;
`;

const FooterContentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-left: 16px;
`;

const FooterTitle = styled.div`
  width: 288px;
  height: 17px;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: #636363;
`;

const FooterContent = styled.div`
  width: 288px;
  height: 63px;
  color: #d0d0d0;
  ${({ theme }) => theme.typographies.body12};
`;

const FooterDetail = styled.div`
  width: 288px;
  height: 16px;
  color: #d0d0d0;
  ${({ theme }) => theme.typographies.body12}
`;
