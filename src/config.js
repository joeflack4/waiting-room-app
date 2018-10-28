// import auth0 from 'auth0-js';

// class Auth {
//     auth0 = new auth0.WebAuth({
//         domain: 'health-hub.auth0.com',
//         clientID: 'g3Wl3YmJqRYwk2lp9JQszJfXPuT0L2G0',
//         redirectUri: 'http://localhost:3000',
//         audience: 'https://health-hub.auth0.com/userinfo',
//         responseType: 'token id_token',
//         scope: 'openid'
//     })

//     constructor() {
//         this.login = this.login.bind(this);
//     }

//     login() {
//         this.auth0.authorize()
//     }

    // - Going the Cordova route instead.
    // handleAuthentication() {
    //   this.auth0.parseHash((err, authResults) => {
    //     if (authResults)
    //       break;
    //   })
    // }

    // isAuthenticated() {

    // }
// }

// import { Auth0Cordova } from '@auth0/cordova';
// const client = new Auth0Cordova({
//   domain: 'health-hub.auth0.com',
//   clientId: '33J_d5GVfJY4lISoRNQeLu6Ar1HwpDRk',
//   packageIdentifier: 'net.joeflack4.HealthHubMobile'
// });

const appMode = 'diabetes';
const config = {
  platform: {
    mobile: 'mobile',
    web: 'web'
  }['mobile'],
  content: {
    all: 'all',
    diabetes: 'diabetes'
  }[appMode],
  title: {
    all: 'Waiting Room App',
    diabetes: 'Diabetes'
  }[appMode],
  // auth: client,
  // authCordova: client,
  // authWeb: Auth
};
export default config;
