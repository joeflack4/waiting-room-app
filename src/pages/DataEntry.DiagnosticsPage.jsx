import React from 'react';
import {BackButton, Button, Input, Page, Toolbar} from 'react-onsenui';


export default class DataEntryDiagnosticsPage extends React.Component {
  state = {
    iopLeft: 0,
    iopRight: 0,
    corneaThicknessLeft: 0,
    corneaThicknessRight: 0,
    corneaThicknessCorrectionLeft: 0,
    corneaThicknessCorrectionRight: 0,
  };
  
  saveForm = () => {
    // Some save logic.
  };
  
  render() {
    return (
      <Page
        renderToolbar={() =>
        <Toolbar>
          <div className='left' style={{width: '72px'}}><BackButton>Back</BackButton></div>
          <div className='center' style={{textAlign: 'center'}}>Diagnostic Data</div>
            <div className='right' style={{width: '72px'}}/>
        </Toolbar>
        }
      >
        
        <br/><br/><br/><br/><br/><br/>
        
        <form>
          <section style={{textAlign: 'center'}}>
            <p>
              <Input
                value={this.state.iopLeft}
                onChange={(e) => this.handleFieldChange('iopLeft', e)}
                modifier='underbar'
                float
                placeholder='Pressure (mm Hg), left' />
            </p>
            <p>
              <Input
                value={this.state.iopRight}
                onChange={(e) => this.handleFieldChange('iopRight', e)}
                modifier='underbar'
                float
                placeholder='Pressure (mm Hg), right' />
            </p>
            <p>
              <Input
                value={this.state.corneaThicknessLeft}
                onChange={(e) => this.handleFieldChange('corneaThicknessLeft', e)}
                modifier='underbar'
                float
                placeholder='Cornea thickness (micrometer), left' />
            </p>
            <p>
              <Input
                value={this.state.corneaThicknessRight}
                onChange={(e) => this.handleFieldChange('corneaThicknessRight', e)}
                modifier='underbar'
                float
                placeholder='Cornea thickness (micrometer), right' />
            </p>
            <p>
              <Input
                value={this.state.corneaThicknessCorrectionLeft}
                onChange={(e) => this.handleFieldChange('corneaThicknessCorrectionLeft', e)}
                modifier='underbar'
                float
                placeholder='Cornea thickness correction, left' />
            </p>
            <p>
              <Input
                value={this.state.corneaThicknessCorrectionRight}
                onChange={(e) => this.handleFieldChange('corneaThicknessCorrectionRight', e)}
                modifier='underbar'
                float
                placeholder='Cornea thickness correction, right' />
            </p>
          </section>
          
          <br/><br/>
          
          <section style={{textAlign: 'center', marginLeft: 'auto', marginRight: 'auto', width: '75%'}}>
            <p>
              {/*TODO: Disable if no data has been entered*/}
              <Button modifier={'large'} onClick={this.saveForm}>Save</Button>
            </p>
          </section>
        </form>
        
      </Page>
    );
  }
}
