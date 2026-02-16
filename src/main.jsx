import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import { setupStore } from './api/index.ts';
import './index.css';

import App from './App.jsx';


createRoot(document.getElementById("root")).render(
 <StrictMode>
    <Provider store={setupStore()}>

        <Suspense fallback={<div></div>}>
          <App />
        </Suspense>

    </Provider>
  </StrictMode>
);
