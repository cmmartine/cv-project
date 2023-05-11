import React, { Component } from 'react';
import GeneralForm from './components/GeneralForm';
import ExperienceForm from './components/ExperienceForm';
import EducationForm from './components/EducationForm';
import ShowSavedInfo from './components/ShowSavedInfo';
import './styles/forms.css';
import './styles/general.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      general: [{name: '', email: '', phone: '', saved: false}],
      education: [{school: '', degree: '', start: '', finish: '', saved: false}],
      experience: [{company: '', position: '', duties: '', start: '', finish: '', saved: false}],
      experience_count: 0,
    }
  }

  handleGeneralState = (newName, newEmail, newPhone) => {
    this.setState({
      general: [{
        name: newName,
        email: newEmail,
        phone: newPhone,
        saved: true,
      }]
    })
  }
  
  editGeneralState = (newName, newEmail, newPhone) => {
    this.setState({
      general: [{
        name: newName,
        email: newEmail,
        phone: newPhone,
        saved: false,
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
        saved: true,
      }]
    })
  }

  editEducationState = (newSchool, newDegree, newStart, newFinish) => {
    this.setState({
      education: [{
        school: newSchool,
        degree: newDegree,
        start: newStart,
        finish: newFinish,
        saved: false,
      }]
    })
  }

  handleExperienceState = (newCompany, newPosition, newDuties, newStart, newFinish, count) => {
    const newExperience = {
      company: newCompany,
      position: newPosition,
      duties: newDuties,
      start: newStart,
      finish: newFinish,
      saved: true,
    }
    let copy = [...this.state.experience]
    copy.splice(count, 1, newExperience)
    this.setState({
      experience: copy,
    })
  }

  editExperienceState = (newCompany, newPosition, newDuties, newStart, newFinish, count) => {
    const newExperience = {
      company: newCompany,
      position: newPosition,
      duties: newDuties,
      start: newStart,
      finish: newFinish,
      saved: false,
    }
    let copy = [...this.state.experience]
    copy.splice(count, 1, newExperience)
    this.setState({
      experience: copy,
    })
  }

  additionalExperience = () => {
    this.setState({
      experience_count: this.state.experience_count + 1,
      experience: this.state.experience.concat({
        company: '',
        position: '',
        duties: '',
        start: '',
        finish: '',
        saved: false,
      })
    })
  }

  render() {
    const { general, education, experience } = this.state;

    return (
      <div className="content-container">
        <div className="left-forms-container">

          <GeneralForm general={general} handleState={this.handleGeneralState} editState={this.editGeneralState} />

          <EducationForm education={education} handleState={this.handleEducationState} editState={this.editEducationState}/>

          <h2 className="form-section-header">Experience</h2>
          <ul>
            {experience.map((exp) => (
              <li key={experience.indexOf(exp)}>
                <ExperienceForm experience={exp} handleState={this.handleExperienceState} editState={this.editExperienceState} experienceCount={experience.indexOf(exp)} />
              </li>
            ))}
          </ul>
          <button className="add-experience" onClick={this.additionalExperience}>Add Experience</button>
        </div>

        <ShowSavedInfo general={general} education={education} experience={experience}/>
        
      </div>
    );
  }
}

export default App;
