import { useEffect, useState } from 'react';

import { styled } from 'styled-components';

import CategoryIcon from './CategoryIcon';

const FilterChip = ({ children, category, filter }) => {
  const [isCheck, setIsCheck] = useState(false);
  const [iconColor, setIconColor] = useState('#FFF');
  const [backgroundColor, setBackgroundColor] = useState('#FFF');

  useEffect(() => {
    switch (category) {
      case '편의점':
        setBackgroundColor('#FFB763');
        break;
      case '일식':
        setBackgroundColor('#5E7FF6');
        break;
      case '중식':
        setBackgroundColor('#E75A5A');
        break;
      case '양식':
        setBackgroundColor('#33DBBD');
        break;
      case '한식':
        setBackgroundColor('#5DB6F5');
        break;
      case '제과점':
        setBackgroundColor('#8A6942');
        break;
      case '일반대중음식':
        setBackgroundColor('#64557C');
        break;
      case '패스트푸드':
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
