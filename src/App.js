import { useEffect, useState } from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, styled } from 'styled-components';

import DetailPage from './pages/DetailPage';
import ErrorPage from './pages/ErrorPage';
import MainPage from './pages/MainPage';
import ModifyInfoPage from './pages/ModifyInfoPage';
import GlobalStyle from './styles/GlobalStyles';
import { Theme } from './styles/Theme';
const App = () => {
  const [innerHeight, setInnerHeight] = useState(0);

  useEffect(() => {
    if (window !== 'undefined') {
      setInnerHeight(window.innerHeight);
    }
  }, []);

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Router>
        <Layout height={innerHeight}>
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
  height: ${(props) => props.height};
  margin: 0 auto;
`;

const Frame = styled.div`
  width: 100%;
  height: 100%;
`;
