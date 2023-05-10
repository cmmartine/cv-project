import React, { Component } from 'react';
import GeneralInfo from './components/GeneralInfo';
import ExperienceInfo from './components/ExperienceInfo';
import EducationInfo from './components/EducationInfo';

class App extends Component {
  constructor() {
    super();

    this.state = {
      general: [{name: '', email: '', phone: ''}],
    }
  }

  handleGeneralState = (newName, newEmail, newPhone) => {
    this.setState({
      general: [{
        name: newName,
        email: newEmail,
        phone: newPhone,
      }]
    })
  }

  render() {
    const { general } = this.state;

    return (
      <div>
        <GeneralInfo general={general} handleState={this.handleGeneralState} />
        <EducationInfo />
        <ExperienceInfo />
      </div>
    );
  }
}

export default App;
