import { styled } from 'styled-components';

import Cancle from '../../assets/images/large-cancel.svg';

const NoDataModal = ({ setModalState }) => {
  const handleClick = () => {
    setModalState(false);
  };
  return (
    <ModalContainer>
      <CancleButton onClick={handleClick}>
        <img src={Cancle} alt="cancle-img" />
      </CancleButton>
      <ModalBox>
        <ModalTitle>앗! 정보를 가져올 수 없어요!</ModalTitle>
        <ModalContent>
          가맹점의 정보를 찾을 수 없습니다 <br />
          다른 지역으로 이동하여 다시 한 번 검색해주세요.
        </ModalContent>
      </ModalBox>
    </ModalContainer>
  );
};

export default NoDataModal;

const ModalContainer = styled.div`
  display: inline-flex;
  padding: 14px 20px 32px 20px;
  flex-direction: column;
  align-items: flex-start;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.BLUE2};
  background-color: white;
`;

const ModalBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 17px;
`;

const CancleButton = styled.button`
  align-self: flex-end;
`;

const ModalTitle = styled.div`
  color: ${({ theme }) => theme.colors.BLUE2};
  text-align: center;
  font-size: 15px;
  font-weight: 700;
  line-height: 18px;
`;

const ModalContent = styled.div`
  width: 244px;
  height: 37px;
  text-align: center;
  font-size: 11px;
  font-weight: 500;
  line-height: 18px;
`;
