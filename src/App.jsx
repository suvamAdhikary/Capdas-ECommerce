import { ThemeProvider } from 'styled-components';
import CapdaS from "./CapdaS";
import GlobalStyles from './components/styles/Global';
import Theme from "./components/styles/Theme";


export default function App() {

  return (

    <ThemeProvider theme={Theme}>
      <>
        <GlobalStyles />
        <CapdaS />
      </>
    </ThemeProvider>

  );
}