import { useRef, useState, useEffect } from 'react';

import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { styled } from 'styled-components';

import moeat from '../assets/images/type= ui icon, state= disabled.svg';
import MainHeader from '../components/MainHeader';
import ZoomButton from '../components/ZoomButton';

const MainPage = () => {
  const mapRef = useRef();

  // 현재 위치 로직
  const [nowLocation, setNowLocation] = useState({
    center: {
      lat: 37.571009,
      lng: 126.9789398,
    },
    errMsg: null,
    isLoading: true,
  });

  useEffect(() => {
    if (navigator.geolocation) {
      // GeoLocation을 이용해서 접속 위치를 얻어옵니다
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setNowLocation((prev) => ({
            ...prev,
            center: {
              lat: position.coords.latitude, // 위도
              lng: position.coords.longitude, // 경도
            },
            isLoading: false,
          }));
        },
        (err) => {
          setNowLocation((prev) => ({
            ...prev,
            errMsg: err.message,
            isLoading: false,
          }));
        },
      );
    } else {
      setNowLocation((prev) => ({
        ...prev,
        errMsg: 'geolocation을 사용할수 없습니다.',
        isLoading: false,
      }));
    }
  }, [nowLocation.center.lat, nowLocation.center.lng]);

  // 확대 축소 로직
  const zoomIn = () => {
    const map = mapRef.current;
    map.setLevel(map.getLevel() - 1);
  };
  const zoomOut = () => {
    const map = mapRef.current;
    map.setLevel(map.getLevel() + 1);
  };
  return (
    <Container>
      <Map
        center={{ lat: nowLocation.center.lat, lng: nowLocation.center.lng }}
        style={{
          // 지도의 크기
          width: '100%',
          height: '100%',
        }}
        level={2} // 지도의 확대 레벨
        ref={mapRef}
      >
        {!nowLocation.isLoading && (
          <MapMarker
            position={nowLocation.center}
            image={{
              src: moeat,
              size: {
                width: 60,
                height: 70,
              },
            }}
          ></MapMarker>
        )}
      </Map>
      <MainHeader />
      <ZoomButton zoomIn={zoomIn} zoomOut={zoomOut} />
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  height: 800px;
  position: relative;
  border: 1px solid black;
`;

export default MainPage;
