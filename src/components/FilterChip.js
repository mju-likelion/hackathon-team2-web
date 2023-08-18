import { useEffect, useState } from 'react';

import { styled } from 'styled-components';

import CategoryIcon from './CategoryIcon';

const categoryCheckedColor = {
  편의점: '#FFB763',
  제과점: '#8A6942',
  한식: '#5DB6F5',
  중식: '#E75A5A',
  양식: '#33DBBD',
  일식: '#5E7FF6',
  패스트푸드: '#FF8A00',
  일반대중음식: '#64557C',
};

const FilterChip = ({ isChecked, children, category, filter }) => {
  const [iconColor, setIconColor] = useState('#FFF');
  const [backgroundColor, setBackgroundColor] = useState('#FFF');

  useEffect(() => {
    if (isChecked) {
      setIconColor(categoryCheckedColor[category]);
      setBackgroundColor('#FFF');
    } else {
      setIconColor('#FFF');
      setBackgroundColor(categoryCheckedColor[category]);
    }
  }, [isChecked]);

  const handleClick = () => {
    filter((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  return (
    <FilterChipContainer onClick={handleClick} $isCheck={isChecked} color={iconColor}>
      <FilterBox>
        <CategoryIcon
          category={category}
          iconColor={iconColor}
          backgroundColor={backgroundColor}
          setBackgroundColor={setBackgroundColor}
        />
        <FilterTitle $isCheck={isChecked} color={backgroundColor}>
          {children}
        </FilterTitle>
      </FilterBox>
    </FilterChipContainer>
  );
};

export default FilterChip;

const FilterChipContainer = styled.button`
  padding: 4px;
  border-radius: 999px;
  background-color: ${(props) => (props.$isCheck ? props.color : 'white')};
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.25);
`;
const FilterBox = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const FilterTitle = styled.div`
  white-space: nowrap;
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  color: ${(props) => (props.$isCheck ? props.color : 'black')};
`;
