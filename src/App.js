import { ThemeProvider } from 'styled-components';

import MainHeader from './components/MainHeader.jsx';
import GlobalStyle from './styles/GlobalStyles';
import { Theme } from './styles/Theme';

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <MainHeader></MainHeader>
    </ThemeProvider>
  );
};

export default App;
