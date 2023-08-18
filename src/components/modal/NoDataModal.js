import { styled } from 'styled-components';

import cancelIcon from '../../assets/images/middle-cancel.svg';

const NoDataModal = ({ setModalState }) => {
  const handleClick = () => {
    setModalState(false);
  };
  return (
    <ModalContainer>
      <CancelButton onClick={handleClick}>
        <img src={cancelIcon} alt="cancle-img" />
      </CancelButton>
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
  padding: 15px 12px 26px 12px;
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
  align-items: center;
  margin: 9px 0 10px 0;
`;

const CancelButton = styled.button`
  width: 16px;
  height: 16px;
  align-self: flex-end;
`;

const ModalTitle = styled.div`
  color: ${({ theme }) => theme.colors.BLUE2};
  text-align: center;
  font-size: 15px;
  font-weight: 700;
  line-height: 18px;
  margin-bottom: 17px;
`;

const ModalContent = styled.div`
  width: 244px;
  height: 37px;
  text-align: center;
  font-size: 11px;
  font-weight: 500;
  line-height: 18px;
`;
