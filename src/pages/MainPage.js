import { useState, useEffect, useRef } from 'react';

import { Map, MapMarker, CustomOverlayMap } from 'react-kakao-maps-sdk';
import { styled } from 'styled-components';

import { GetPin } from '../api/GetPin';
import nowLocationLogo from '../assets/images/logoIcon.svg';
import DetailToolTip from '../components/DetailToolTip';
import Filters from '../components/Filters';
import MainHeader from '../components/MainHeader';
import MainToolTip from '../components/MainToolTip';
import SearchButton from '../components/SearchButton';
import ZoomButton from '../components/ZoomButton';
import { useGeolocation } from '../hooks/useGeolocation';
import Category from '../util/Category';

const MainPage = () => {
  const mapRef = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [MmValue, setMmValue] = useState({});
  const [isOpenResearch, setIsOpenResearch] = useState(false);
  const [markerOpenStates, setMarkerOpenStates] = useState([]);
  const [initialstate, setInitialState] = useState(true);
  const { nowLocation } = useGeolocation();

  const [locationData, setLocationData] = useState([]);
  const [categories, setCategories] = useState({
    편의점: false,
    제과점: false,
    한식: false,
    중식: false,
    양식: false,
    일식: false,
    패스트푸드: false,
    일반대중음식: false,
  });

  useEffect(() => {
    if (mapRef.current && initialstate) {
      const neLat = mapRef.current.getBounds().getNorthEast().getLat();
      const neLng = mapRef.current.getBounds().getNorthEast().getLng();
      const swLat = mapRef.current.getBounds().getSouthWest().getLat();
      const swLng = mapRef.current.getBounds().getSouthWest().getLng();

      const data = {
        maxLatitude: neLat,
        maxLongitude: neLng,
        minLatitude: swLat,
        minLongitude: swLng,
      };
      setInitialState(false);
      GetPin(data, callBackFunction);
      setIsOpenResearch(false);
      setIsLoading(true);
    } else {
      return;
    }
  }, [mapRef.current]);

  // 최대 최소 위도 경도 -> 버튼 로직
  useEffect(() => {
    if (MmValue && isLoading) {
      setIsOpenResearch(true);
    } else {
      setIsOpenResearch(false);
    }
  }, [MmValue]);
  // 재검색 버튼 로직

  const handleCategory = (data) => {
    const item = data.category;
    if (categories[item]) {
      return true;
    } else {
      return false;
    }
  };

  const handleClick = (index) => {
    const updatedMarkerOpenStates = Array(locationData.length).fill(false);
    updatedMarkerOpenStates[index] = !updatedMarkerOpenStates[index];
    setMarkerOpenStates(updatedMarkerOpenStates);
  };

  const handleMapChange = (map) => {
    const bounds = map.getBounds();
    map.setMaxLevel(10);
    setMmValue({
      maxLatitude: bounds.getNorthEast().getLat(),
      maxLongitude: bounds.getNorthEast().getLng(),
      minLatitude: bounds.getSouthWest().getLat(),
      minLongitude: bounds.getSouthWest().getLng(),
    });
  };
  // 확대 축소 로직
  const zoomIn = () => {
    const map = mapRef.current;
    map.setLevel(map.getLevel() - 1);
  };
  const zoomOut = () => {
    const map = mapRef.current;
    map.setLevel(map.getLevel() + 1);
  };

  const MarkerResearch = () => {
    setIsOpenResearch(false);
    GetPin(MmValue, callBackFunction);
  }; // 마커 데이터 재호출

  const callBackFunction = (data) => {
    setLocationData(data);
  };

  return (
    <Container>
      <MainHeader />
      <Filters setCategories={setCategories} />
      <Map
        // center={{ lat: 37.52309083858311, lng: 127.02633730039574 }}
        center={{ lat: nowLocation.center.lat, lng: nowLocation.center.lng }}
        style={{
          // 지도의 크기
          width: '100%',
          height: '100%',
        }}
        level={2} // 지도의 확대 레벨
        onBoundsChanged={handleMapChange}
        // onDragEnd={handleMapChange}
        ref={mapRef}
      >
        <ul>
          {locationData &&
            locationData.map((item, index) => (
              <li key={item.id}>
                {handleCategory(item) && (
                  <MapMarker
                    onClick={() => handleClick(index)}
                    position={{ lat: item.latitude, lng: item.longitude }}
                    image={{
                      src: Category(item), // 마커이미지의 주소입니다
                      size: {
                        width: 24,
                        height: 24,
                      }, // 마커이미지의 크기입니다
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
        </ul>

        {!nowLocation.isLoading && (
          <>
            <MapMarker
              position={nowLocation.center}
              image={{
                src: nowLocationLogo,
                size: {
                  width: 60,
                  height: 70,
                },
              }}
            />

            <CustomOverlayMap
              position={{ lat: nowLocation.center.lat, lng: nowLocation.center.lng }}
              xAnchor={0.5}
              yAnchor={2.2}
            >
              <MainToolTip />
            </CustomOverlayMap>
          </>
        )}
      </Map>
      {isOpenResearch && (
        <button onClick={MarkerResearch}>
          <SearchButton
            bgcolor="#FFE070"
            position="absolute"
            isOpenResearch={isOpenResearch}
            setIsOpenResearch={setIsOpenResearch}
          />
        </button>
      )}

      <ZoomButton zoomIn={zoomIn} zoomOut={zoomOut} />
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export default MainPage;
