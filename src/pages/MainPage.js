import { useEffect, useState } from 'react';

import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { styled } from 'styled-components';

import MainHeader from '../components/MainHeader';
import ResearchButton from '../components/ResearchButton';
const MainPage = () => {
  const [MmValue, setMmValue] = useState();
  const [isOpenResearch, setIsOpenResearch] = useState(false);
  // 최대 최소 위도 경도 -> 버튼 로직
  useEffect(() => {
    if (MmValue) {
      setIsOpenResearch(true);
    } else {
      setIsOpenResearch(false);
    }
  }, [MmValue]);
  // 재검색 버튼 로직
  const MarkerResearch = () => {}; // 마커 데이터 재호출

  return (
    <Container>
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
        onDragEnd={(map) =>
          setMmValue({
            sw: map.getBounds().getSouthWest().toString(),
            ne: map.getBounds().getNorthEast().toString(),
          })
        }
      />
      <MainHeader />
      {isOpenResearch && (
        <ReButton
          onClick={() => {
            MarkerResearch;
            setIsOpenResearch(false);
          }}
        >
          <ResearchButton
            bgColor={'#FFE070'}
            position={'absolute'}
            isOpenResearch={isOpenResearch}
            setIsOpenResearch={setIsOpenResearch}
          />
        </ReButton>
      )}
      {!!MmValue && (
        <>
          <p>
            {'영역좌표 남서쪽 위도, 경도는  ' + MmValue.sw + ' 이고'}
            <br />
            {'북동쪽 위도, 경도는  ' + MmValue.ne + '입니다'}
          </p>
        </>
      )}
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  height: 800px;
  position: relative;
  border: 1px solid black;
`;
const ReButton = styled.button``;
export default MainPage;
