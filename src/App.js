// import auth0 from 'auth0-js';
// import { Auth0Cordova } from '@auth0/cordova';
import React, { Component } from 'react';
import {Tabbar, Tab} from 'react-onsenui';

import DataEntryPage from './pages/DataEntryPage';
import HomePage from './pages/HomePage';
import PersonalPage from './pages/PersonalPage';

// TODO
// - Style the app red.
// - Properly color icons when selected or not.
// Example URL after logging in:
// http://localhost:3000/#access_token=LqnynZsMGpwDNOQ7aGwS598SE5Lau-fK
// &expires_in=7200
// &token_type=Bearer
// &state=NKj7qwNoYG2Q8DjTfRUttytTjkkszFPz
// &id_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik5FTTFPRU0xTmpVNE9UZEZOVUk1T1VOQk1qYzVNVU0wTVVORVJqVkVOamsyT0VJME16ZEdNUSJ9.eyJpc3MiOiJodHRwczovL2hlYWx0aC1odWIuYXV0aDAuY29tLyIsInN1YiI6ImF1dGgwfDViNTUwOWFjZDZkYjA4MmFkOGJiMTQ0OSIsImF1ZCI6ImczV2wzWW1KcVJZd2sybHA5SlFzekpmWFB1VDBMMkcwIiwiaWF0IjoxNTMyMjk5ODU1LCJleHAiOjE1MzIzMzU4NTUsImF0X2hhc2giOiJneHNXSFV5RlZsdjNyUUJHMUpUaVNBIiwibm9uY2UiOiJSUjhPOS1ZUWNWWWd0b3JTMFBVWXlaZDlUQmg3THUzViJ9.wpAE9FI1jI6_SzenIPv5t6CvZmTZy7GcXdwATAE01_8i1XC_Hgo1linocVE4xLB5KFjAYJoA-ut9hdB1VM8cVGLt56SLDLesyUgadRBZpalN_WtFQyi2wabFOA46Iyxi0ygYPKxUKrkn_OFiQXxUpFfSd35BgtJkop0QLSIXjRiaTSAmtwpKD_Ppmpoy0In2X6PVc6RXStBciTeB5dXO2QEH2j_U9we8ZGGK77Wq-o7X5ZfVTIprWwwo3w5JFS0BVMY7sPmc-LPj6WSwEwAxAmjYzsdarHFZRDvwik3fEPkM5lyZnlDHhZ_HzaS5hGbGyxL8lrPfjorlHhOqP1ZkEA
// NOTES
// - How to pass methods: https://reactjs.org/docs/faq-functions.html
export default class App extends Component {
  // auth0 = new auth0.Authentication({
  // auth0 = new auth0.Authentication({
  //   domain: 'health-hub.auth0.com',
  //   clientID: '33J_d5GVfJY4lISoRNQeLu6Ar1HwpDRk'
  // });
  
  // state = {
  //   authenticated: false,
  //   accessToken: false,
  // }

  login(e) {
    // e.target.disabled = true;

    // let clientOptions = {
    //   domain: 'health-hub.auth0.com',
    //   clientId: '33J_d5GVfJY4lISoRNQeLu6Ar1HwpDRk',
    //   packageIdentifier: 'net.joeflack4.HealthHubMobile'
    // };

    // var a = Auth0Cordova;
    // var b = new Auth0Cordova;
    // console.log(Auth0Cordova);
    // console.log(a);
    // console.log(b);
    
    // debugger

    // var client = Auth0Cordova({
  //   var client = new Auth0Cordova({
  //     domain: 'health-hub.auth0.com',
  //     clientId: '33J_d5GVfJY4lISoRNQeLu6Ar1HwpDRk',
  //     packageIdentifier: 'net.joeflack4.HealthHubMobile'
  //   });
  //   var options = {
  //     scope: 'openid profile',
  //     audience: 'https://health-hub.auth0.com/userinfo'
  //   };
  //   var self = this;
  //   client.authorize(options, function(err, authResult) {
  //     if (err) {
  //       console.log(err);
  //       return (e.target.disabled = false);
  //     }
  //     localStorage.setItem('access_token', authResult.accessToken);
  //     self.resumeApp();
  //   });
  };
  
  logout(e) {
    // localStorage.removeItem('access_token');
    // this.resumeApp();
  };

  // loadProfile(cb) {
  //   this.auth0.userInfo(this.state.accessToken, cb);
  // };
  //
  // static resumeApp() {
  //   var accessToken = localStorage.getItem('access_token');
  //   if (accessToken) {
  //     this.setState({
  //       authenticated: true,
  //       accessToken: accessToken
  //     });
  //   } else {
  //     this.setState({
  //       authenticated: false,
  //       accessToken: null
  //     });
  //   }
  // };

  // static run() {  // needed?
  // // run = (id) => {
  //   // this.container = getBySelector(id);
  //   this.resumeApp();
  // };

  static renderTabs() {
    return [
      {
        content: <HomePage key={'home'} {...this.props} login={e => this.login(e)} logout={e => this.logout(e)} />,  // 2
        tab: <Tab key='home' label='' icon='fa-home' />
      },
      {
        content: <DataEntryPage key={'data-entry'} {...this.props} />,
        tab: <Tab key='data-entry' label='' icon='fa-clipboard' />
      },
      {
        content: <PersonalPage key={'personal'} {...this.props} />,
        tab: <Tab key='personal' label='' icon='fa-user-circle' />
      }
    ]
  }

  render() {
    return (
      <Tabbar {...this.props} initialIndex={0} renderTabs={App.renderTabs}
      login={e => this.login(e)}
      logout={e => this.logout(e)} />
    );
  }
}
