import { styled } from 'styled-components';

import Next from '../assets/images/Next';

const ModifyDetail = ({ img, children }) => {
  return (
    <ModifyContainer>
      <img src={img} alt="icon" />
      <ModifyBox>
        <ModifyText>영업시간 수정할래요 !</ModifyText>
        <Next />
      </ModifyBox>
    </ModifyContainer>
  );
};

export default ModifyDetail;

const ModifyContainer = styled.button`
  padding: 13px 16px;
  display: flex;
  align-items: center;
`;

const ModifyBox = styled.div`
  display: flex;
  align-items: center;
  margin-left: 23px;
  gap: 9px;
`;
const ModifyText = styled.div`
  text-align: start;
  width: 226px;
  height: 19px;
  font-size: 15px;
  font-weight: 400;
  line-height: 18px;
`;
