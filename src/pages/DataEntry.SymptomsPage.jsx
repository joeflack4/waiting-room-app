import React from 'react';
import {BackButton, Button, Page, Range, Toolbar} from 'react-onsenui';


import BigBlueBox from '../components/BigBlueBox';

// TODO: Fontawesome smileys.
class Likert extends React.Component {
  state = {
    value: this.props.initialValue
  };
  handleFieldChange = (fieldName, e) => {
    const obj = {};
    const val = Number.parseInt(e.target.value, 10);  // radix=10 means decimal
    obj[fieldName] = val;
    obj.value = val;
    this.setState(obj);
  };
  render() {
    // noinspection JSUnresolvedVariable
    return <BigBlueBox>
      <h2>{this.props.title} ({this.state.value}/5)</h2>
      <br/>
      <span style={{fontSize: '1.4em'}}>
        {/*<Icon icon="md-thumb-up"/>*/}
        0
        {/*;-)*/}
        {/*<Icon icon="fa-smile"/>*/}
        &nbsp;&nbsp;</span>
      <Range
        value={this.state.value}
        onChange={(e) => this.handleFieldChange(this.props.fieldName, e)}
        min={0}
        max={5}
        style={{width: '67%'}}  // TODO: This should be 100%, and handle width outside w/ flexbox.
      />
      <span style={{fontSize: '1.4em'}}>
        &nbsp;&nbsp;
        5
        {/*<Icon icon="fa-smile"/>*/}
        {/*<Icon icon="md-thumb-down"/>*/}
      </span>
    </BigBlueBox>
  }
}

export default class DataEntrySymptomsPage extends React.Component {
  state = {
    eyePain: 0,
    nightHalos: 0,
    tunnelVision: 0,
    blurredVision: 0,
    swellingAndRedness: 0,
    accompanyingNausea: 0,
    suddenVisualDisturbance: 0,
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
          <div className='center' style={{textAlign: 'center'}}>Symptoms</div>
            <div className='right' style={{width: '72px'}}/>
        </Toolbar>
        }
      >
        
        {/*<br/><br/><br/>*/}
        <form>
          <section className='center' style={{textAlign: 'center', width: '90%', marginLeft: 'auto', marginRight: 'auto'}}>
            <p>Record from 0 (non-symptomatic) to 5 (very symptomatic).</p>
            
              <Likert
                initialValue={this.state.eyePain}
                fieldName='eyePain'
                title='Eye pain'/>
              <Likert
                initialValue={this.state.nightHalos}
                fieldName='nightHalos'
                title='Night halos'/>
              <Likert
                initialValue={this.state.tunnelVision}
                fieldName='tunnelVision'
                title='Tunnel vision'/>
              <Likert
                initialValue={this.state.blurredVision}
                fieldName='blurredVision'
                title='Blurred vision'/>
              <Likert
                initialValue={this.state.swellingAndRedness}
                fieldName='swellingAndRedness'
                title='Swelling and redness'/>
              <Likert
                initialValue={this.state.accompanyingNausea}
                fieldName='accompanyingNausea'
                title='Accompanying nausea'/>
              <Likert
                initialValue={this.state.suddenVisualDisturbance}
                fieldName='suddenVisualDisturbance'
                title='Sudden visual disturbance'/>
            {/*</div>*/}
            
          </section>{/*<br/>*/}
          
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
