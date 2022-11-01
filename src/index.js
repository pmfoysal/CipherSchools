import React from 'react';
import App from 'app/app';
import 'styles/scss/reset.scss';
import ReactDOM from 'react-dom/client';
import reportWebVitals from 'tests/reportWebVitals';
import AppWrapper from 'components/helpers/appWrapper';
import * as serviceWorkerRegistration from 'tests/serviceWorkerRegistration';

const app = ReactDOM.createRoot(document.querySelector("[data-app='pmfoysal']"));

app.render(
   <React.StrictMode>
      <AppWrapper>
         <App />
      </AppWrapper>
   </React.StrictMode>
);

reportWebVitals();
serviceWorkerRegistration.unregister();
