import { styled } from 'styled-components';

import Next from '../assets/images/Next';

const ModifyDetail = ({ img, children }) => {
  return (
    <ModifyContainer>
      <img src={img} alt="icon" />
      <ModifyBox>
        <ModifyText>{children}</ModifyText>
        <Next />
      </ModifyBox>
    </ModifyContainer>
  );
};

export default ModifyDetail;

const ModifyContainer = styled.div`
  padding: 13px 16px;
  display: inline-flex;
`;

const ModifyBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 23px;
  gap: 9px;
`;
const ModifyText = styled.div`
  width: 226px;
  height: 19px;
`;
