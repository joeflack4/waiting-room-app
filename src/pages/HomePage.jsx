import React from 'react';
import {Button, Page, Toolbar} from 'react-onsenui';

// TODO
// - Render differently if data
export default class HomePage extends React.Component {
  // constructor(props) {  // 1
  //   super(props);
  //   this.login = this.props.login.bind(this);
  //   this.logout = this.props.logout.bind(this);
  // }
  loggedIn = false ? true : false;
  username = 'SomeUser';
  
  render() {
    return (
      <Page
        renderToolbar={() =>
          <Toolbar>
            <div className='center' style={{textAlign: 'center'}}>Diabetes App</div>
          </Toolbar>
        }
      >
       
       <br/><br/>
        
        <section style={{textAlign: 'center'}}>
          <p>No data has yet been entered.</p>
          <p>To start recording data, click select the 'form' button from the bottom.</p>
        </section>

        <br/>

        <section style={{textAlign: 'center'}}>{this.loggedIn
          ? <React.Fragment>
              <p>You are logged in.</p>
              {/* <p>You are logged in as {this.auth}.</p> */}
              {/* TODO: Print the user name. */}
              <p><Button onClick={e => this.props.logout(e)}>Logout</Button></p>
              {/* <p><Button onClick={e => this.logout(e)}>Logout</Button></p> */}
            </React.Fragment>
          : <React.Fragment>
              <p>You are not logged in.</p>
              {/* <p><Button onClick={this.props.auth.login}>Login</Button></p> */}
              <p><Button onClick={e => {
                this.props.login(e)
                // this.login(e)
              }}>Login</Button></p>
            </React.Fragment>
        }</section>
        
      </Page>
    );
  }
}