import { ThemeProvider } from 'styled-components';

import ResearchButton from './components/ResearchButton.jsx';
import GlobalStyle from './styles/GlobalStyles';
import { Theme } from './styles/Theme';

const App = () => {
  return (
    <ThemeProvider theme={Theme} >
      <GlobalStyle />
      <ResearchButton></ResearchButton>
    </ThemeProvider>
  );
};

export default App;
