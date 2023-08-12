import { useEffect, useState } from 'react';

import { styled } from 'styled-components';

import CategoryIcon from './CategoryIcon';

const FilterChip = ({ children, category, filter }) => {
  const [isCheck, setIsCheck] = useState(false);
  const [iconColor, setIconColor] = useState('#FFF');
  const [backgroundColor, setBackgroundColor] = useState('#FFF');

  useEffect(() => {
    switch (category) {
      case 'convenience':
        setBackgroundColor('#FFB763');
        break;
      case 'japanese':
        setBackgroundColor('#5E7FF6');
        break;
      case 'chinese':
        setBackgroundColor('#E75A5A');
        break;
      case 'western':
        setBackgroundColor('#33DBBD');
        break;
      case 'korean':
        setBackgroundColor('#5DB6F5');
        break;
      case 'bakery':
        setBackgroundColor('#8A6942');
        break;
      case 'etc':
        setBackgroundColor('#64557C');
        break;
      case 'fastfood':
        setBackgroundColor('#FF8A00');
        break;
      default:
        break;
    }
  }, []);

  const handleClick = () => {
    setIsCheck((prev) => !prev);

    if (!isCheck) {
      setIconColor(backgroundColor);
      setBackgroundColor('#FFF');
      filter((prev) => ({
        ...prev,
        [category]: true,
      }));
    } else {
      setBackgroundColor(iconColor);
      setIconColor('#FFF');
      filter((prev) => ({
        ...prev,
        [category]: false,
      }));
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
