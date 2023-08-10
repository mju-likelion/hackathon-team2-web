import { ThemeProvider } from 'styled-components';

import FindMap from './components/FindMap.jsx';
import GlobalStyle from './styles/GlobalStyles';
import { Theme } from './styles/Theme';

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <FindMap />
    </ThemeProvider>
  );
};

export default App;
