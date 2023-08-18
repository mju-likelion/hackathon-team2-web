import CategoryChinesefood from '../assets/images/CategoryChinesefood.js';
import CategoryConvenience from '../assets/images/CategoryConvenience.js';
import CategoryEtc from '../assets/images/CategoryEtc.js';
import CategoryFastfood from '../assets/images/CategoryFastfood.js';
import CategoryJapanesefood from '../assets/images/CategoryJapanesefood.js';
import CategoryKoreanfood from '../assets/images/CategoryKoreanfood.js';
import CategoryWestern from '../assets/images/CategoryWestern.js';
import CategoryBakery from '../assets/images/CategotyBakery.js';

const CategoryIcon = ({ iconColor, backgroundColor, category }) => {
  switch (category) {
    case '편의점':
      return <CategoryConvenience iconColor={iconColor} backgroundColor={backgroundColor} />;
    case '일식':
      return <CategoryJapanesefood iconColor={iconColor} backgroundColor={backgroundColor} />;
    case '중식':
      return <CategoryChinesefood iconColor={iconColor} backgroundColor={backgroundColor} />;
    case '양식':
      return <CategoryWestern iconColor={iconColor} backgroundColor={backgroundColor} />;
    case '한식':
      return <CategoryKoreanfood iconColor={iconColor} backgroundColor={backgroundColor} />;
    case '제과점':
      return <CategoryBakery iconColor={iconColor} backgroundColor={backgroundColor} />;
    case '일반대중음식':
      return <CategoryEtc iconColor={iconColor} backgroundColor={backgroundColor} />;
    case '패스트푸드':
      return <CategoryFastfood iconColor={iconColor} backgroundColor={backgroundColor} />;
    default:
      return null;
  }
};
export default CategoryIcon;
