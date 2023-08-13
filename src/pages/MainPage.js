import { useRef, useState, useEffect } from 'react';

import { Map, MapMarker, CustomOverlayMap } from 'react-kakao-maps-sdk';
import { styled } from 'styled-components';

import bakery from '../assets/images/bakery-pin.svg';
import chinese from '../assets/images/chinese-pin.svg';
import convenience from '../assets/images/convenience-pin.svg';
import etc from '../assets/images/etc-pin.svg';
import fastfood from '../assets/images/fastfood-pin.svg';
import japanese from '../assets/images/japanesefood-pin.svg';
import korean from '../assets/images/koreanfood-pin.svg';
import moeat from '../assets/images/type= ui icon, state= disabled.svg';
import western from '../assets/images/westernfood-pin.svg';
import DetailToolTip from '../components/DetailToolTip';
import Filters from '../components/Filters';
import MainHeader from '../components/MainHeader';
import ResearchButton from '../components/ResearchButton';
import ZoomButton from '../components/ZoomButton';

const MainPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const LocationData = [
    {
      id: '98de9785-8769-448c-aca7-ab6cad5406a5',
      name: '알부자알요리전문점',
      category: '한식',
      longitude: 127.027820307026,
      latitude: 37.5007020002887,
      fullAddress: '역삼동 817-34',
      roadNameAddress: '서울 강남구 강남대로98길 14',
      createdAt: '2023-08-04 08:11:51.109',
      updatedAt: '2023-08-04 08:11:51.109',
    },
  ];

  const handleCategory = (data) => {
    switch (data.category) {
      case '편의점':
        return convenience;
      case '일식':
        return japanese;
      case '중식':
        return chinese;
      case '양식':
        return western;
      case '한식':
        return korean;
      case '제과점':
        return bakery;
      case '기타':
        return etc;
      case '패스트푸드':
        return fastfood;
      default:
        break;
    }
  };

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
    console.log(map);
    map.setLevel(map.getLevel() - 1);
  };
  const zoomOut = () => {
    const map = mapRef.current;
    map.setLevel(map.getLevel() + 1);
  };
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
      <Filters />
      <Map
        center={{ lat: nowLocation.center.lat, lng: nowLocation.center.lng }}
        style={{
          // 지도의 크기
          width: '100%',
          height: '100%',
        }}
        level={2} // 지도의 확대 레벨
        onDragEnd={(map) =>
          setMmValue({
            maxLatitude: map.getBounds().getNorthEast().getLat().toString(),
            maxLongitude: map.getBounds().getNorthEast().getLng().toString(),
            minLatitude: map.getBounds().getSouthWest().getLat().toString(),
            minLongitude: map.getBounds().getSouthWest().getLng().toString(),
          })
        }
        ref={mapRef}
      >
        {LocationData.map((item) => (
          <li key={item.id}>
            <MapMarker
              onClick={() => setIsOpen((prev) => !prev)}
              position={{ lat: item.latitude, lng: item.longitude }}
              image={{
                src: handleCategory(item), // 마커이미지의 주소입니다
                size: {
                  width: 24,
                  height: 24,
                }, // 마커이미지의 크기입니다
              }}
            />
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
              />
            )}

            {isOpen && (
              <CustomOverlayMap position={{ lat: item.latitude, lng: item.longitude }} xAnchor={0.5} yAnchor={1.4}>
                <DetailToolTip data={item} setIsOpen={setIsOpen} />
              </CustomOverlayMap>
            )}
          </li>
        ))}
      </Map>
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
const ReButton = styled.button``;
export default MainPage;
