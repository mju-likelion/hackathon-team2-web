import { ThemeProvider } from 'styled-components';

import ChildCardLabel from './components/ChildCardLabel.jsx';
import GlobalStyle from './styles/GlobalStyles';
import { Theme } from './styles/Theme';

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <ChildCardLabel />
    </ThemeProvider>
  );
};

export default App;
