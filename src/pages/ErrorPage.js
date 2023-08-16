import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

import errorIcon from '../assets/images/large-erroricon.svg';
import SearchButton from '../components/SearchButton';
const ErrorPage = ({ errorCode }) => {
  const navigate = useNavigate();
  const errorConfirm = (errorCode) => {
    if (errorCode === '404') {
      return '가맹점에 대한 정보를 찾을 수 없습니다. (404) \n 이전 페이지로 넘어가주시길 바랍니다.';
    } else if (errorCode === '505') {
      return '알 수 없는 오류가 발생했습니다. (500) \n이전 페이지로 넘어가주시길 바랍니다.';
    }
  };
  const handleClick = () => {
    navigate(-1);
  };
  return (
    <AllWrapper>
      <Container>
        <ContentBox>
          <ErrorIcon src={errorIcon} />
          <ErrorContainer>
            <ErrorTitle>ERROR</ErrorTitle>
            <ErrorContent>{errorConfirm(errorCode)}</ErrorContent>
          </ErrorContainer>
        </ContentBox>
        <SearchButton bgcolor="#5E7FF6" fontcolor="#ffffff" />
      </Container>
    </AllWrapper>
  );
};

const AllWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 33px;
`;

const ErrorIcon = styled.img``;
const ErrorContainer = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ErrorTitle = styled.p`
  width: 100px;
  height: 20px;
  font-size: 25px;
  font-weight: 700;
  line-height: 18px;
  margin-bottom: 17px;
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.colors.BLUE2};
`;
const ErrorContent = styled.p`
  width: 300px;
  height: 40px;
  font-size: 13px;
  font-weight: 500;
  line-height: 18px;
  display: flex;
  justify-content: center;
  text-align: center;
  white-space: pre-line; //줄바꿈 문자 유지
`;

export default ErrorPage;
