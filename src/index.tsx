import { createRoot } from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import './index.css';
import { worker } from './mocks/browser';
import App from './App';

worker.start();

const container = document.getElementById('root');

if (container) {
  const root = createRoot(container);

  root.render(<App />);
} else {
  throw new Error('No container with the name of root found');
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
