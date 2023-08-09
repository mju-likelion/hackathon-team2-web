import { ThemeProvider } from 'styled-components';

import MainToolTip from './components/MainToolTip.jsx';
import GlobalStyle from './styles/GlobalStyles';
import { Theme } from './styles/Theme';
const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <MainToolTip />
    </ThemeProvider>
  );
};

export default App;
