import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { styled } from 'styled-components';

import Filters from '../components/Filters';
import MainHeader from '../components/MainHeader';

const MainPage = () => {
  return (
    <Container>
      <Filters />
      <Map // 지도를 표시할 Container
        center={{
          // 지도의 중심좌표
          lat: 33.450701,
          lng: 126.570667,
        }}
        style={{
          // 지도의 크기
          width: '100%',
          height: '100%',
        }}
        level={3} // 지도의 확대 레벨
      />
      <MainHeader />
    </Container>
  );
};
export default MainPage;

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  border: 1px solid black;
`;
