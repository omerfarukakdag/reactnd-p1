import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ProtectedRouter from './router/protected';
import * as PagePaths from './router/pagePaths';
import { ToastContainer, ToastContainerProps } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './assets/style/App.css';

const toastOptions: ToastContainerProps = {
  autoClose: 2000,
  draggable: false,
  position: 'top-right',
  newestOnTop: true,
  pauseOnHover: false,
};

const App = () => (
  <BrowserRouter basename={PagePaths.Base}>
    <ToastContainer {...toastOptions} />
    <ProtectedRouter />
  </BrowserRouter>
);

export default App;
