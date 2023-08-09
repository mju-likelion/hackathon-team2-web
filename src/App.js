import { ThemeProvider } from 'styled-components';

import DetailFooter from './components/DetailFooter.jsx';
import GlobalStyle from './styles/GlobalStyles';
import { Theme } from './styles/Theme';

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <DetailFooter />
    </ThemeProvider>
  );
};

export default App;
