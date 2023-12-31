import { useEffect } from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, styled } from 'styled-components';

import DetailPage from './pages/DetailPage';
import ErrorPage from './pages/ErrorPage';
import MainPage from './pages/MainPage';
import ModifyInfoPage from './pages/ModifyInfoPage';
import GlobalStyle from './styles/GlobalStyles';
import { Theme } from './styles/Theme';
const App = () => {
  let vh = 0;
  useEffect(() => {
    vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }, []);
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Router>
        <Layout height={innerHeight}>
          <Frame>
            <Routes>
              <Route path="/" element={<MainPage />}>
                <Route path="detail/:id" element={<DetailPage />}>
                  <Route path="modify" element={<ModifyInfoPage />} />
                </Route>
              </Route>
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
  height: calc(var(--vh, 1vh) * 100);
  margin: 0 auto;
`;

const Frame = styled.div`
  width: 100%;
  height: 100%;
`;
