import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import FirebaseContext from './context/firebase';
import { firebase, FeildValue } from './lib/firebase';
import './styles/app.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FirebaseContext.Provider value={{ firebase, FeildValue}}>
    <App/>
  </FirebaseContext.Provider> 
  );






// ReactDOM.render(
//   <FirebaseContext.Provider value={{ firebase, FeildValue}}>
//     <App/>
//   </FirebaseContext.Provider>, 
//   ReactDOM.createRoot(document.getElementById('root')
//   ));


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