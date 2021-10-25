import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MultiProvider from './components/MultiProvider';
import { GlobalStateProvider } from './core/context/GlobalStateProvider';
import './assets/style/index.css';

const ProviderPack = ({ children }: { children: React.ReactElement }) => (
  <MultiProvider providers={[<GlobalStateProvider />]}>{children}</MultiProvider>
);

const Index = () => (
  <ProviderPack>
    <App />
  </ProviderPack>
);

ReactDOM.render(<Index />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
