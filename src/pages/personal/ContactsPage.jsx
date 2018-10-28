import React from 'react';
import {Page, Toolbar} from 'react-onsenui';

export default class SettingsPage extends React.Component {
  render() {
    return (
      <Page
        renderToolbar={() =>
          <Toolbar>
            {/*ion-person-add*/}
            <div className='center' style={{textAlign: 'center'}}>Contacts</div>
          </Toolbar>
        }
      >
        <div>
          Contacts Page
        </div>
      </Page>
    );
  }
}