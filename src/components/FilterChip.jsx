import { useEffect, useState } from 'react';

import { styled } from 'styled-components';

import CategoryIcon from './CategoryIcon.jsx';

const FilterChip = ({ title, category }) => {
  const [isCheck, setIsCheck] = useState(false);
  const [iconColor, setIconColor] = useState('#FFF');
  const [backgroundColor, setBackgroundColor] = useState('#FFF');
  useEffect(() => {
    if (category === 'convenience') {
      setBackgroundColor('#FFB763');
    } else if (category === 'japanese') {
      setBackgroundColor('#5E7FF6');
    } else if (category === 'chinese') {
      setBackgroundColor('#E75A5A');
    } else if (category === 'western') {
      setBackgroundColor('#33DBBD');
    } else if (category === 'korean') {
      setBackgroundColor('#5DB6F5');
    } else if (category === 'bakery') {
      setBackgroundColor('#8A6942');
    } else if (category === 'etc') {
      setBackgroundColor('#64557C');
    } else if (category === 'fastfood') {
      setBackgroundColor('#FF8A00');
    }
  }, []);
  const handleClick = () => {
    if (!isCheck) {
      setIsCheck((prev) => !prev);
      setIconColor(backgroundColor);
      setBackgroundColor('#FFF');
    } else {
      setIsCheck((prev) => !prev);
      setBackgroundColor(iconColor);
      setIconColor('#FFF');
    }
  };
  return (
    <FilterChipContainer onClick={handleClick} $isCheck={isCheck} color={iconColor}>
      <FilterBox>
        <CategoryIcon
          category={category}
          iconColor={iconColor}
          backgroundColor={backgroundColor}
          setBackgroundColor={setBackgroundColor}
        />
        <FilterTitle $isCheck={isCheck} color={backgroundColor}>
          {title}
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
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  color: ${(props) => (props.$isCheck ? props.color : 'black')};
`;
