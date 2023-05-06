import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

//client side rendered app: react(cra)
  // -> database which is Firebase
  // -> react-loading-skeleton
  // tailwind

  // folder structure
    // src
      //-> components, 
      //-> constants,
      //-> context, 
      //-> helpers,
      //-> hooks,
      //-> pages,
      //-> lib(firebase goung to live in here)
      //-> Services(firebase function in here)
      //-> styles (talwind's folder(app/tailwind))