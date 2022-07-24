import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import { HelmetProvider } from 'react-helmet-async';
import { AppView } from './App_view';
import './styles/index.module.css'

function App() {
  return (
    <BrowserRouter>
      <CookiesProvider>
        <HelmetProvider>
          <AppView/>
        </HelmetProvider>
      </CookiesProvider>
    </BrowserRouter>
  );
}

export default App;
