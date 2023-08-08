import CategoryChinesefood from '../assets/images/CategoryChinesefood.jsx';
import CategoryConvenience from '../assets/images/CategoryConvenience.jsx';
import CategoryEtc from '../assets/images/CategoryEtc.jsx';
import CategoryFastfood from '../assets/images/CategoryFastfood.jsx';
import CategoryJapanesefood from '../assets/images/CategoryJapanesefood.jsx';
import CategoryKoreanfood from '../assets/images/CategoryKoreanfood.jsx';
import CategoryWestern from '../assets/images/CategoryWestern.jsx';
import CategoryBakery from '../assets/images/CategotyBakery.jsx';
const CategoryIcon = ({ iconColor, backgroundColor, category }) => {
  if (category === 'convenience') {
    return <CategoryConvenience iconColor={iconColor} backgroundColor={backgroundColor} />;
  } else if (category === 'japanese') {
    return <CategoryJapanesefood iconColor={iconColor} backgroundColor={backgroundColor} />;
  } else if (category === 'chinese') {
    return <CategoryChinesefood iconColor={iconColor} backgroundColor={backgroundColor} />;
  } else if (category === 'western') {
    return <CategoryWestern iconColor={iconColor} backgroundColor={backgroundColor} />;
  } else if (category === 'korean') {
    return <CategoryKoreanfood iconColor={iconColor} backgroundColor={backgroundColor} />;
  } else if (category === 'bakery') {
    return <CategoryBakery iconColor={iconColor} backgroundColor={backgroundColor} />;
  } else if (category === 'etc') {
    return <CategoryEtc iconColor={iconColor} backgroundColor={backgroundColor} />;
  } else if (category === 'fastfood') {
    return <CategoryFastfood iconColor={iconColor} backgroundColor={backgroundColor} />;
  }
};
export default CategoryIcon;
