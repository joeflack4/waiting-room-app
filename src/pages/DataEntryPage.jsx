import React from 'react';
import {Icon, Page, Navigator, Toolbar, ToolbarButton} from 'react-onsenui';
import moment from 'moment';

import BigBlueBox from '../components/BigBlueBox';
import DataEntryCalendarPage from './DataEntry.CalendarPage';
import DataEntryDiagnosticsPage from './DataEntry.DiagnosticsPage';
import DataEntrySymptomsPage from './DataEntry.SymptomsPage';


// TODO
// - Settings to show/hide fields
// - Date / time fields
//   - Selecting date field opens calendar
// - Validation
//   Diagnostic
//     iop: int, 0-60, default 0
//     cornea thickness, micrometer: int, 400-699, default 400
//     cornea thickness, correction value: float, -10.0 - +10.0, default 0
//   Symptoms
//     boolean or 1-10
class DataEntryPage extends React.Component {
  state = {
    moment: moment(),
  };
  
  pushPage(page) {
    const component = {
        'DataEntryCalendarPage': DataEntryCalendarPage,  // TODO: how to pass props?
        'DataEntryDiagnosticsPage': DataEntryDiagnosticsPage,
        'DataEntrySymptomsPage': DataEntrySymptomsPage
      }[page];
    this.props.navigator.pushPage({
      component: component,
      props: {key: page}});
  }
  
  // saveForm = () => {
  //   // Some save logic.
  // };
  
  handleFieldChange = (fieldName, e) => {
    const obj = {};
    obj[fieldName] = e.target.value;
    this.setState(obj);
  };
  
  render() {
    return (
      <Page
        renderToolbar={() =>
          <Toolbar>
            <div className='left' style={{width: '72px'}}>
              <ToolbarButton onClick={() => this.pushPage('DataEntryCalendarPage')}>
                <Icon style={{color: '#7A797B'}} icon='fa-calendar'/>
              </ToolbarButton>
            </div>
            <div className='center' style={{textAlign: 'center'}}>Record Data</div>
            <div className='right' style={{width: '72px'}}/>
          </Toolbar>
        }
      >
        
        <br/><br/>
        
        <div className='center'
             style={{textAlign: 'center'}}
             onClick={() => this.pushPage('DataEntryCalendarPage')}>
          <h2>{this.state.moment.format('MMMM Do, h:mm a')}</h2>
        </div>
        
          <br/><br/><br/>
        
        <div style={{textAlign: 'center', width: '70%', margin: 'auto auto auto auto'}}>
          <div onClick={() => this.pushPage('DataEntryDiagnosticsPage')}>
            <BigBlueBox>
              <div style={{textAlign: 'center', padding: '30px, 30px, 30px, 30px'}}>
                <h2>Enter</h2>
                <h2>Diagnostics</h2>
              </div>
            </BigBlueBox>
          </div>
          
          <br/>
          
          <div onClick={() => this.pushPage('DataEntrySymptomsPage')}>
            <BigBlueBox>
              <div style={{textAlign: 'center', padding: '30px, 30px, 30px, 30px'}}>
                <h2>Enter</h2>
                <h2>Symptoms</h2>
              </div>
            </BigBlueBox>
          </div>
        </div>
        
      </Page>
    );
  }
}

// export default DataEntryPage;
export default class extends React.Component {
  renderPage(route, navigator) {
    const props = route.props || {};
    props.navigator = navigator;

    return React.createElement(route.component, props);
  }

  render() {
    return (
      <Navigator
        initialRoute={{component: DataEntryPage, props: {key: 'DataEntryPage'}}}
        renderPage={this.renderPage}
      />
    );
  }
}
