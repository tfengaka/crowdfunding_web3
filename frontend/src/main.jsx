import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ContextProviver } from './context';
import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ThirdwebProvider chainId={ChainId.BinanceSmartChainTestnet} activeChain="binance-testnet">
    <BrowserRouter>
      <ContextProviver>
        <App />
      </ContextProviver>
    </BrowserRouter>
  </ThirdwebProvider>
);
