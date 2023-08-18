import { useState, useEffect, useRef } from 'react';

import { Map, MapMarker, CustomOverlayMap } from 'react-kakao-maps-sdk';
import { Outlet } from 'react-router-dom';
import { styled } from 'styled-components';

import { GetPin } from '../api/GetPin';
import geoLocation from '../assets/images/geolocation.svg';
import nowLocationLogo from '../assets/images/map-icon.svg';
import DetailToolTip from '../components/DetailToolTip';
import Filters from '../components/Filters';
import MainHeader from '../components/MainHeader';
import MainToolTip from '../components/MainToolTip';
import MapErrorModal from '../components/modal/MapErrorModal';
import NoDataModal from '../components/modal/NoDataModal';
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
  const [modalState, setModalState] = useState(false);

  const { nowLocation, setNowLocation } = useGeolocation();
  const [isOpenErrorModal, setIsOpenErrorModal] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);
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
      GetPin(data, callBackFunction, setIsOpenErrorModal);
      setIsOpenResearch(false);
      setIsLoading(true);
    } else {
      return;
    }
  }, [mapRef.current]);

  useEffect(() => {
    if (MmValue && isLoading) {
      setIsOpenResearch(true);
    } else {
      setIsOpenResearch(false);
    }
  }, [MmValue]);
  // 재검색 버튼 로직

  // 메인 툴팁 타이머 설정
  useEffect(() => {
    if (showTooltip) {
      const timer = setTimeout(() => {
        setShowTooltip(false);
      }, 7000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [showTooltip]);

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
    map.setMaxLevel(5);
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
    GetPin(MmValue, callBackFunction, setIsOpenErrorModal);
  }; // 마커 데이터 재호출

  const callBackFunction = (data) => {
    setLocationData(data);
    if (data.length === 0) {
      setModalState(true);
    }
  };

  const handleCenter = () => {
    if (nowLocation.state) {
      setNowLocation((prev) => ({
        ...prev,
        center: { lat: nowLocation.center.lat + 0.0000000000001, lng: nowLocation.center.lng + 0.0000000000001 },
        state: false,
      }));

      console.log(nowLocation);
    } else {
      setNowLocation((prev) => ({
        ...prev,
        center: { lat: nowLocation.center.lat - 0.0000000000001, lng: nowLocation.center.lng - 0.0000000000001 },
        state: true,
      }));
      console.log(nowLocation);
    }
  };

  return (
    <>
      <Container>
        <MainHeader />
        <Filters setCategories={setCategories} />
        {modalState && <NoDataModal modalState={modalState} setModalState={setModalState} />}
        <Map
          center={{ lat: nowLocation.center.lat, lng: nowLocation.center.lng }}
          style={{
            width: '100%',
            height: '100%',
          }}
          level={2}
          onBoundsChanged={handleMapChange}
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
                        src: Category(item),
                        size: {
                          width: 24,
                          height: 24,
                        },
                      }}
                    />
                  )}

                  {markerOpenStates[index] && (
                    <CustomOverlayMap
                      position={{ lat: item.latitude, lng: item.longitude }}
                      xAnchor={0.5}
                      yAnchor={1.4}
                    >
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
              {showTooltip && (
                <CustomOverlayMap
                  position={{ lat: nowLocation.center.lat, lng: nowLocation.center.lng }}
                  xAnchor={0.5}
                  yAnchor={2.2}
                >
                  <MainToolTip />
                </CustomOverlayMap>
              )}
            </>
          )}
          <GeoLocationButton onClick={handleCenter}>
            <img src={geoLocation} alt="geolocation-img" />
          </GeoLocationButton>
        </Map>
        {isOpenResearch && (
          <SearchButton
            background="#FFE070"
            position="absolute"
            font="black"
            isOpenResearch={isOpenResearch}
            setIsOpenResearch={setIsOpenResearch}
            onClick={MarkerResearch}
          />
        )}
        <ZoomButton zoomIn={zoomIn} zoomOut={zoomOut} />
        {isOpenErrorModal && <MapErrorModal />}
        <Outlet />
      </Container>
    </>
  );
};
const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const GeoLocationButton = styled.button`
  position: absolute;
  bottom: 121px;
  right: 18px;
  display: flex;
  width: 38px;
  height: 38px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  z-index: 3;
  border-radius: 999px;
  border: 1px solid ${({ theme }) => theme.colors.GRAY1};
  background: #fff;
`;

export default MainPage;
