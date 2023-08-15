import bakery from '../assets/images/bakery-pin.svg';
import chinese from '../assets/images/chinese-pin.svg';
import convenience from '../assets/images/convenience-pin.svg';
import etc from '../assets/images/etc-pin.svg';
import fastfood from '../assets/images/fastfood-pin.svg';
import japanese from '../assets/images/japanesefood-pin.svg';
import korean from '../assets/images/koreanfood-pin.svg';
import western from '../assets/images/westernfood-pin.svg';
const Category = (data) => {
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

  return null;
};

export default Category;
