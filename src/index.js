import React from 'react';
import * as ReactDomClient from 'react-dom/client';

import './index.css';
import App from './App';

const root = ReactDomClient.createRoot(document.getElementById('root'));
root.render(<App />);
