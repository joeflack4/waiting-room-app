import React from 'react';
import {Button, Input, Page, Toolbar} from 'react-onsenui';
// import {Button, Icon, Input, Page, Toolbar, ToolbarButton} from 'react-onsenui';

// TODO
// - Add date fields
// - Validation
export default class PersonalPage extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    birthDate: '',
    username: '',
    password: '',
    email: '',
    sinceDiagnosed: '',
    sinceSymptomatic: ''
  };
  
  saveForm = () => {
    // Some save logic.
  };
  
  handleFieldChange = (fieldName, e) => {
    const obj = {};
    obj[fieldName] = e.target.value;
    this.setState(obj);
  };

  handlePasswordChange(fieldName, e) {
    // Some password logic.
    this.handleFieldChange(e, fieldName);
  }
  
  render() {
    return (
      <Page
        renderToolbar={() =>
          <Toolbar>
            {/*<div className="left">*/}
              {/*<ToolbarButton>*/}
                {/*<Icon style={{color: '#7A797B'}} icon="fa-users"/>*/}
              {/*</ToolbarButton>*/}
            {/*</div>*/}
            <div className="center" style={{textAlign: 'center'}}>Personal</div>
            {/*<div className="right">*/}
              {/*<ToolbarButton>*/}
                {/*<Icon style={{color: '#7A797B'}}  icon="ion-gear-a"/>*/}
              {/*</ToolbarButton>*/}
            {/*</div>*/}
          </Toolbar>
        }
      >
       
        <br/><br/><br/>
        
        <form>
          <section style={{textAlign: 'center'}}>
            <p>Personal Details</p>
            <p>
              <Input
                value={this.state.firstName}
                onChange={(e) => this.handleFieldChange('firstName', e)}
                modifier='underbar'
                float
                placeholder='First name' />
            </p>
            <p>
              <Input
                value={this.state.lastName}
                onChange={(e) => this.handleFieldChange('lastName', e)}
                modifier='underbar'
                float
                placeholder='Last name' />
            </p>
            <p>
              <Input
                value={this.state.birthDate}
                onChange={(e) => this.handleFieldChange('birthDate', e)}
                modifier='underbar'
                float
                placeholder='Birthdate' />
            </p>
          </section>
  
          <br/>

          <section style={{textAlign: 'center'}}>
            <p>Health Profile</p>
            <p>
              <Input
                value={this.state.sinceDiagnosed}
                onChange={(e) => this.handleFieldChange('sinceDiagnosed', e)}
                modifier='underbar'
                float
                placeholder='Approximate date of diagnosis' />
            </p>
            <p>
              <Input
                value={this.state.sinceSymptomatic}
                onChange={(e) => this.handleFieldChange('sinceSymptomatic', e)}
                modifier='underbar'
                float
                placeholder='Approximate date of symptoms onset' />
            </p>
          </section>
          
          <br/>
          
          <section style={{textAlign: 'center'}}>
            <p>Account Details</p>
            <p>
              <Input
                value={this.state.username}
                autocomplete={'username'}
                onChange={(e) => this.handleFieldChange('username', e)}
                modifier='underbar'
                float
                placeholder='Username' />
            </p>
            <p>
              <Input
                type={'password'}
                autocomplete={'current-password'}
                value={this.state.password}
                onChange={(e) => this.handlePasswordChange('password', e)}
                modifier='underbar'
                float
                placeholder='Password' />
            </p>
            <p>
              <Input
                type={'password'}
                autocomplete={'current-password'}
                value={this.state.password}
                onChange={(e) => this.handlePasswordChange('passwordAgain', e)}
                modifier='underbar'
                float
                placeholder='Password (again)' />
            </p>
            <p>
              <Input
                type={'email'}
                value={this.state.email}
                onChange={(e) => this.handleFieldChange('email', e)}
                modifier='underbar'
                float
                placeholder='E-mail' />
            </p>
          </section>
          
          <br/>
          
          <section style={{textAlign: 'center', marginLeft: 'auto', marginRight: 'auto', width: '80%'}}>
            <p>
              <Button modifier={'large'} onClick={this.saveForm}>Save</Button>
            </p>
          </section>
        </form>
        
      </Page>
    );
  }
}