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
    case 'convenience':
      return <CategoryConvenience iconColor={iconColor} backgroundColor={backgroundColor} />;
    case 'japanese':
      return <CategoryJapanesefood iconColor={iconColor} backgroundColor={backgroundColor} />;
    case 'chinese':
      return <CategoryChinesefood iconColor={iconColor} backgroundColor={backgroundColor} />;
    case 'western':
      return <CategoryWestern iconColor={iconColor} backgroundColor={backgroundColor} />;
    case 'korean':
      return <CategoryKoreanfood iconColor={iconColor} backgroundColor={backgroundColor} />;
    case 'bakery':
      return <CategoryBakery iconColor={iconColor} backgroundColor={backgroundColor} />;
    case 'etc':
      return <CategoryEtc iconColor={iconColor} backgroundColor={backgroundColor} />;
    case 'fastfood':
      return <CategoryFastfood iconColor={iconColor} backgroundColor={backgroundColor} />;
    default:
      return null;
  }
};
export default CategoryIcon;
