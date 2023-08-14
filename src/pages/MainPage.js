import { useRef, useState, useEffect } from 'react';

import { Map, MapMarker, CustomOverlayMap } from 'react-kakao-maps-sdk';
import { styled } from 'styled-components';

import { GetPin } from '../api/GetPin';
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
  const [MmValue, setMmValue] = useState({});
  const [isOpenResearch, setIsOpenResearch] = useState(false);
  const [markerOpenStates, setMarkerOpenStates] = useState([]);
  //현재 위치 로직
  const [nowLocation, setNowLocation] = useState({
    center: {
      lat: 37.571009,
      lng: 126.9789398,
    },
    errMsg: null,
    isLoading: true,
  });

  const [locationData, setLocationData] = useState([]);

  const handleClick = (index) => {
    const updatedMarkerOpenStates = Array(locationData.length).fill(false);
    updatedMarkerOpenStates[index] = !updatedMarkerOpenStates[index];
    setMarkerOpenStates(updatedMarkerOpenStates);
  };

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
      case '일반대중음식':
        return etc;
      case '패스트푸드':
        return fastfood;
      default:
        break;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const initialData = await GetPin(MmValue);
        setLocationData(initialData);
      } catch (error) {
        console.error('Error fetching initial data:', error);
      }
    };
    fetchData();
  }, []);

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

  // 최대 최소 위도 경도 -> 버튼 로직
  useEffect(() => {
    if (MmValue) {
      setIsOpenResearch(true);
    } else {
      setIsOpenResearch(false);
    }
  }, [MmValue]);
  // 재검색 버튼 로직
  const MarkerResearch = () => {
    setIsOpenResearch(false);
    GetPin(MmValue, callBackFunction);
  }; // 마커 데이터 재호출


  const callBackFunction = (data) => {
    setLocationData(data);
  };
  return (
    <Container>
      <Filters />
      <Map
        center={{ lat: 37.52309083858311, lng: 127.02633730039574 }}
        // { lat: nowLocation.center.lat, lng: nowLocation.center.lng }
        style={{
          // 지도의 크기
          width: '100%',
          height: '100%',
        }}
        level={2} // 지도의 확대 레벨
        onDragEnd={(map) =>
          setMmValue({
            maxLatitude: map.getBounds().getNorthEast().getLat(),
            maxLongitude: map.getBounds().getNorthEast().getLng(),
            minLatitude: map.getBounds().getSouthWest().getLat(),
            minLongitude: map.getBounds().getSouthWest().getLng(),
          })
        }
        ref={mapRef}
      >

        {locationData &&
          locationData.map((item, index) => (
            <li key={item.id}>
              <MapMarker
                onClick={() => handleClick(index)}
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

              {markerOpenStates[index] && (
                <CustomOverlayMap position={{ lat: item.latitude, lng: item.longitude }} xAnchor={0.5} yAnchor={1.4}>
                  <DetailToolTip data={item} setMarkerOpenStates={setMarkerOpenStates} />
                </CustomOverlayMap>
              )}
            </li>
          ))}
      </Map>
      <MainHeader />
      {isOpenResearch && (
        <ReButton onClick={MarkerResearch}>
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
