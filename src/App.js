import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, styled } from 'styled-components';

import DetailPage from './pages/DetailPage';
import ErrorPage from './pages/ErrorPage';
import MainPage from './pages/MainPage';
import ModifyInfoPage from './pages/ModifyInfoPage';
import GlobalStyle from './styles/GlobalStyles';
import { Theme } from './styles/Theme';
const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Router>
        <Layout>
          <Frame>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/detail/:id" element={<DetailPage />} />
              <Route path="/detail/:id/modify" element={<ModifyInfoPage />} />
              <Route path="/404Error" element={<ErrorPage errorCode="404" />} />
              <Route path="/500Error" element={<ErrorPage errorCode="500" />} />
            </Routes>
          </Frame>
        </Layout>
      </Router>
    </ThemeProvider>
  );
};

export default App;

const Layout = styled.div`
  max-width: 393px;
  height: 100vh;
  margin: 0 auto;
`;

const Frame = styled.div`
  width: 100%;
  height: 100%;
`;
