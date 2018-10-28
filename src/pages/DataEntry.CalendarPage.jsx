import React from 'react';
import {BackButton, Page, Toolbar} from 'react-onsenui';
import InputMoment from 'input-moment';
import moment from 'moment';
import './styles/input-moment.css'


// https://wangzuo.github.io/input-moment/
class DatePicker extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      moment: this.props.moment ? this.props.moment : moment()
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      moment: date
    });
  }
  
  handleSave() {
    // logic
  }

  render() {
    return <InputMoment
      moment={this.state.moment}
      onChange={this.handleChange}
      onSave={this.handleSave}
      minStep={1} // default
      hourStep={1} // default
      prevMonthIcon="ion-ios-arrow-left" // default
      nextMonthIcon="ion-ios-arrow-right" // default
    />
  }
}

export default class DataEntryCalendarPage extends React.Component {
  state = {
    iopLeft: '',
    iopRight: '',
    corneaThicknessLeft: '',
    corneaThicknessRight: '',
    corneaThicknessCorrectionLeft: '',
    corneaThicknessCorrectionRight: '',
    eyePain: 0,
    nightHalos: 0,
    tunnelVision: 0,
    blurredVision: 0,
    swellingAndRedness: 0,
    accompanyingNausea: 0,
    suddenVisualDisturbance: 0,
    time: '',
    date: '',
    startDate: '',
  };
  
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
          <div className='left' style={{width: '72px'}}><BackButton>Back</BackButton></div>
          <div className='center' style={{textAlign: 'center'}}>Diagnostic Data</div>
            <div className='right' style={{width: '72px'}}/>
        </Toolbar>
        }
      >
        
        <br/><br/>
        
        <div className='center' style={{textAlign: 'center'}}>
          <DatePicker/>
        </div>
        
      </Page>
    );
  }
}
