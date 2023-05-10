import React, { Component } from 'react';
import GeneralInfo from './components/GeneralInfo';
import ExperienceInfo from './components/ExperienceInfo';
import EducationInfo from './components/EducationInfo';

class App extends Component {
  constructor() {
    super();

    this.state = {
      general: [{name: '', email: '', phone: ''}],
      education: [{school: '', degree: '', start: '', finish: ''}],
      experience: [{company: 'one', position: '', duties: '', start: '', finish: ''}],
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

  handleEducationState = (newSchool, newDegree, newStart, newFinish) => {
    this.setState({
      education: [{
        school: newSchool,
        degree: newDegree,
        start: newStart,
        finish: newFinish,
      }]
    })
  }

  handleExperienceState = (newCompany, newPosition, newDuties, newStart, newFinish) => {
    this.setState({
      experience: [{
        company: newCompany,
        position: newPosition,
        duties: newDuties,
        start: newStart,
        finish: newFinish,
      }]
    })
  }

  render() {
    const { general, education, experience } = this.state;

    return (
      <div>
        <GeneralInfo general={general} handleState={this.handleGeneralState} />
        <EducationInfo education={education} handleState={this.handleEducationState} />
        <ExperienceInfo experience={experience} handleState={this.handleExperienceState} />
      </div>
    );
  }
}

export default App;
