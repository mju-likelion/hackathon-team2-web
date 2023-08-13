import { useState } from 'react';

import { styled } from 'styled-components';

import FilterChip from '../components/FilterChip';

const Filters = () => {
  const [categories, setCategories] = useState({
    convenience: false,
    bakery: false,
    korean: false,
    chinese: false,
    western: false,
    japanese: false,
    fastfood: false,
    etc: false,
  });
  const CATEGORY = [
    { category: 'convenience', title: '편의점' },
    { category: 'bakery', title: '제과점' },
    { category: 'korean', title: '한식' },
    { category: 'chinese', title: '중식' },
    { category: 'western', title: '양식' },
    { category: 'japanese', title: '일식' },
    { category: 'fastfood', title: '패스트푸드' },
    { category: 'etc', title: '기타' },
  ];

  return (
    <FilterContainer>
      {CATEGORY.map((data, index) => (
        <FilterChip filter={setCategories} key={index} category={data.category}>
          {data.title}
        </FilterChip>
      ))}
    </FilterContainer>
  );
};

export default Filters;

const FilterContainer = styled.div`
  width: 100%;
  position: absolute;
  display: flex;
  top: 60px;
  z-index: 3;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 11px;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
