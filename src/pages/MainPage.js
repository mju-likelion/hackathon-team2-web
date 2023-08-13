import { useState } from 'react';

import { Map, MapMarker, CustomOverlayMap } from 'react-kakao-maps-sdk';
import { styled } from 'styled-components';

import bakery from '../assets/images/bakery-pin.svg';
import chinese from '../assets/images/chinese-pin.svg';
import convenience from '../assets/images/convenience-pin.svg';
import etc from '../assets/images/etc-pin.svg';
import fastfood from '../assets/images/fastfood-pin.svg';
import japanese from '../assets/images/japanesefood-pin.svg';
import korean from '../assets/images/koreanfood-pin.svg';
import western from '../assets/images/westernfood-pin.svg';
import DetailToolTip from '../components/DetailToolTip';
import MainHeader from '../components/MainHeader';

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
            {isOpen && (
              <CustomOverlayMap position={{ lat: item.latitude, lng: item.longitude }} xAnchor={0.5} yAnchor={1.4}>
                <DetailToolTip data={item} setIsOpen={setIsOpen} />
              </CustomOverlayMap>
            )}
          </li>
        ))}
      </Map>
      <MainHeader />
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  border: 1px solid black;
`;

export default MainPage;
