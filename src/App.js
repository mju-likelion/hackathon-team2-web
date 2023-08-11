import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, styled } from 'styled-components';

import call from './assets/images/call.svg';
import pin from './assets/images/pin.svg';
import price from './assets/images/price-icon.svg';
import time from './assets/images/time.svg';
import web from './assets/images/web.svg';
import ModifyDetail from './components/ModifyDetail';
import GlobalStyle from './styles/GlobalStyles';
import { Theme } from './styles/Theme';

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <ModifyDetail img={call} />
      <Router>
        <Layout>
          <Frame>
            <Routes>{/* <Route path="/" element={<Map />} /> */}</Routes>
          </Frame>
        </Layout>
      </Router>
    </ThemeProvider>
  );
};

export default App;

const Layout = styled.div`
  width: 393px;
  margin: 0 auto;
`;

const Frame = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
