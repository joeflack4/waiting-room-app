// var Auth0Cordova =  require('@auth0/cordova');
// import { Auth0Cordova } from '@auth0/cordova';
import React from 'react';
import ReactDOM from 'react-dom';
// import registerServiceWorker from './registerServiceWorker';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

// import './index.css';
import App from './App';
// import config from './config';

// (function main() {
// function intentHandler(url) {
// Auth0Cordova.onRedirectUri(url);
// }
// window.handleOpenURL = intentHandler;
const appProps = {};
    // auth: new config.auth()s
// };
const app = <App props={appProps} />;
ReactDOM.render(app, document.getElementById('root'));
// registerServiceWorker();  // unrelated to auth
// })();
// document.addEventListener('deviceready', main)
document.addEventListener('deviceready', app);  // Will this work?

// --------------------------------------------------------
// function main() {
//   var app = new App();
//   function intentHandler(url) {
//     Auth0Cordova.onRedirectUri(url);
//   }
//   window.handleOpenURL = intentHandler;
//   app.run('#app');
// }
// document.addEventListener('deviceready', main);
