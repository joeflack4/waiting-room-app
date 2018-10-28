import React from 'react';
import {Page, Toolbar} from 'react-onsenui';

export default class SettingsPage extends React.Component {
  render() {
    return (
      <Page
        renderToolbar={() =>
          <Toolbar>
            <div className='center' style={{textAlign: 'center'}}>Add Contact</div>
          </Toolbar>
        }
      >
        <div>
          Add Contact Page
        </div>
      </Page>
    );
  }
}