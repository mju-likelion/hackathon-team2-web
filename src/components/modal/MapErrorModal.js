import { styled } from 'styled-components';

import ErrorIcon from '../../assets/images/large-exclamation-icon.svg';

const MapErrorModal = () => {
  return (
    <Container>
      <ErrorImg src={ErrorIcon} />
      <ErrorText>
        죄송합니다. <br />
        정보를 가져올 수 없습니다.(500)
      </ErrorText>
    </Container>
  );
};
const Container = styled.div`
  width: 268px;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  z-index: 99;
  background-color: #ffffff;
  border-radius: 12px;
`;

const ErrorImg = styled.img`
  margin-top: 21px;
`;
const ErrorText = styled.p`
  width: 164px;
  height: 37px;
  margin-top: 10px;
  text-align: center;
  ${({ theme }) => theme.typographies.body12}
  color: #000000;
`;
export default MapErrorModal;
