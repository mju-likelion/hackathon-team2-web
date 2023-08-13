import { styled } from 'styled-components';

const ChildCardLabel = () => {
  return (
    <LabelContainer>
      <LabelContent>아동급식카드 가맹점</LabelContent>
    </LabelContainer>
  );
};

export default ChildCardLabel;

const LabelContainer = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 21px 63px;
  border-radius: 999px;
  background: #12e2bd;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.25);
  position: absolute;
  top: -86px;
`;

const LabelContent = styled.div`
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  line-height: 18px;
`;
