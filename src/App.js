import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import RoutesMain from './routes/routes';
import { GlobalStyle } from './styles/global';

function App() {
  return (
    <>
      <ul class="background">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <RoutesMain />
      <GlobalStyle />
    </>


  );
}

export default App;
