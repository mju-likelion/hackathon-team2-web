import { styled } from 'styled-components';

import FilterChip from '../components/FilterChip';

const Filters = ({ setCategories }) => {
  const CATEGORY = [
    { category: '편의점', title: '편의점' },
    { category: '제과점', title: '제과점' },
    { category: '한식', title: '한식' },
    { category: '중식', title: '중식' },
    { category: '양식', title: '양식' },
    { category: '일식', title: '일식' },
    { category: '패스트푸드', title: '패스트푸드' },
    { category: '일반대중음식', title: '기타' },
  ];
  const handleScroll = (e) => {
    if (!e.shiftKey) {
      e.preventDefault();
      const container = e.currentTarget;
      container.scrollLeft += e.deltaY * 0.5;
    }
  };
  return (
    <FilterContainer onWheel={handleScroll}>
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
