import { ThemeProvider } from 'styled-components';

import ModifyInfo from './components/ModifyInfo';
import GlobalStyle from './styles/GlobalStyles';
import { Theme } from './styles/Theme';

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <ModifyInfo />
    </ThemeProvider>
  );
};

export default App;
