import { styled } from 'styled-components';

import callIcon from '../assets/images/call.svg';
import locationIcon from '../assets/images/pin.svg';
import timeIcon from '../assets/images/time.svg';
import webIcon from '../assets/images/web.svg';

const StoreDetail = ({ address1, address2, link, callNum }) => {
  return (
    <AllContainer>
      <ListContainer>
        <LocationContainer>
          <LocationImg src={locationIcon}></LocationImg>
          <AddressBox>
            <Address1>{address1}</Address1>
            <Address2>{address2}</Address2>
          </AddressBox>
        </LocationContainer>
        <TimeContainer>
          <TimeImg src={timeIcon}></TimeImg>
          <TimeInfo>정보 없음</TimeInfo>
          <TimeContentBox>
            <TimeTitle>
              <OpenTitle>여는 시간</OpenTitle>
              <CloseTitle>닫는 시간</CloseTitle>
            </TimeTitle>
            <TimeContent>
              <OpenContent>정보 없음</OpenContent>
              <CloseContent>정보 없음</CloseContent>
            </TimeContent>
          </TimeContentBox>
        </TimeContainer>
        <WebContainer>
          <WebImg src={webIcon}></WebImg>
          <WebContent>{link}</WebContent>
        </WebContainer>
        <CallContainer>
          <CallImg src={callIcon}></CallImg>
          <CallContent>{callNum}</CallContent>
        </CallContainer>
      </ListContainer>
    </AllContainer>
  );
};
const AllContainer = styled.div`
  padding: 50px 25px;
  width: 100%;
  border: 1px solid black;
`;

const ListContainer = styled.div`
  width: 310px;
  height: 189px;
  display: flex;
  flex-direction: column;
`;
const LocationContainer = styled.div`
  width: 310px;
  display: flex;
  align-items: center;
  margin-bottom: 19px;
`;
const LocationImg = styled.img`
  margin-right: 18px;
`;
const AddressBox = styled.div`
  height: 38px;
  display: flex;
  flex-direction: column;
`;
const Address1 = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  margin-bottom: 4px;
`;
const Address2 = styled.div`
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  color: ${({ theme }) => theme.colors.GRAY1};
`;

const TimeContainer = styled.div`
  width: 310px;
  height: 46px;
  display: flex;
  align-items: center;
  margin-bottom: 19px;
`;
const TimeImg = styled.img`
  margin-right: 12px;
`;
const TimeInfo = styled.div`
  font-size: 13px;
  font-weight: 700;
  line-height: 18px;
  margin-right: 12px;
  white-space: nowrap;
`;
const TimeContentBox = styled.div`
  width: 241px;
  display: flex;
`;
const TimeTitle = styled.div`
  height: 46px;
  display: flex;
  flex-direction: column;
  margin-right: 4px;
`;
const OpenTitle = styled.div`
  width: 58px;
  height: 22px;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  margin-bottom: 2px;
`;
const CloseTitle = styled.div`
  width: 58px;
  height: 22px;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: ${({ theme }) => theme.colors.RED1};
`;

const TimeContent = styled.div`
  display: flex;
  flex-direction: column;
`;
const OpenContent = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  margin-bottom: 6px;
`;
const CloseContent = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  margin-bottom: 4px;
  color: ${({ theme }) => theme.colors.RED1};
`;

const WebContainer = styled.div`
  width: 282px;
  display: flex;
  align-items: center;
  margin-bottom: 19px;
`;
const WebImg = styled.img`
  margin-right: 18px;
`;
const WebContent = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: ${({ theme }) => theme.colors.BLUE2};
`;

const CallContainer = styled.div`
  width: 282px;
  display: flex;
  align-items: center;
`;
const CallImg = styled.img`
  margin-right: 18px;
`;
const CallContent = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
`;

export default StoreDetail;
