import { styled } from 'styled-components';

const StoreBasic = ({ categorySrc, name, category, updateAt }) => {
  return (
    <Test>
      <Container>
        <ContentTop>
          <CategoryIcon src={categorySrc}></CategoryIcon>
          <StoreNameBox>
            <StoreName>{name}</StoreName>
            <StoreCategory>{category}</StoreCategory>
          </StoreNameBox>
        </ContentTop>
        <ContentBottom>
          <UpdateTitle>업데이트 날짜</UpdateTitle>
          <UpdateTime>{updateAt}</UpdateTime>
        </ContentBottom>
      </Container>
    </Test>
  );
};
const Test = styled.div`
  width: 320px;
  height: 800px;
  background-color: gray;
  padding: 10px;
`;
const Container = styled.div`
  width: 100%;
  height: 130px;
  padding: 18px 20px 10px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #ffffff;
`;

const ContentTop = styled.div`
  display: flex;
  justify-content: space-between;
`;
const CategoryIcon = styled.img`
  width: 24px;
  height: 24px;
`;
const StoreNameBox = styled.div`
  height: 49px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StoreName = styled.div`
  width: 220px;
  height: 100%;
  font-size: 18px;
  font-weight: 500;
  line-height: 18px;
  display: flex;
  justify-content: center;
`;
const StoreCategory = styled.div`
  width: 148px;
  height: 20px;
  font-size: 13px;
  font-weight: 400;
  line-height: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentBottom = styled.div`
  display: flex;
  justify-content: space-between;
`;
const UpdateTitle = styled.div`
  width: 80px;
  height: 20px;
  ${({ theme }) => theme.typographies.body12}
  color: ${({ theme }) => theme.colors.GRAY2};
`;
const UpdateTime = styled.div`
  width: 170px;
  height: 20px;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  color: ${({ theme }) => theme.colors.GRAY2};
`;

export default StoreBasic;
