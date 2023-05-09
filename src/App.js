import React, { Component } from 'react';
import GeneralInfo from './components/GeneralInfo';
import ExperienceInfo from './components/ExperienceInfo';
import EducationInfo from './components/EducationInfo';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <GeneralInfo />
        <EducationInfo />
        <ExperienceInfo />
      </div>
    );
  }
}

export default App;
