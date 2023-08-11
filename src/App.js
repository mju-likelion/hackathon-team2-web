import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, styled } from 'styled-components';

import GlobalStyle from './styles/GlobalStyles';
import { Theme } from './styles/Theme';

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
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
