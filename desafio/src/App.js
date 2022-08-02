import React from 'react';

import GlobalStyle from './styles/global';
import Home from './pages/Home/index';

import ProductProvider from './hooks/product';

function App() {
  return (
    <>
        <GlobalStyle />
        <ProductProvider>
        <Home />
        </ProductProvider>
    </>
  );
}

export default App;
