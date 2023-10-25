import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import { CookiesProvider } from 'react-cookie';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        {/* <CookiesProvider> */}
            {/* <BrowserRouter> */}
                <App />
            {/* </BrowserRouter> */}
        {/* </CookiesProvider> */}
    </React.StrictMode>
);
