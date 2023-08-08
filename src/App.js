import { ThemeProvider } from 'styled-components';

<<<<<<< HEAD
import MainHeader from './components/MainHeader.jsx';
=======
>>>>>>> develop
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
