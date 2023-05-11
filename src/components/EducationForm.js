import React, { Component } from 'react';

class EducationForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const education = this.props.education[0];
    let newSchool = education.school;
    let newDegree = education.degree;
    let newStart = education.start;
    let newFinish = education.finish;
    const handleState = this.props.handleState;

    return (
      <div>
        <h2 className="form-section-header">Education</h2>
        <form>
          <label htmlFor="school">School</label>
          <input type="text" id="school" placeholder={newSchool} onChange={(e) => {newSchool = e.target.value}}/>

          <label htmlFor="degree">Degree</label>
          <input type="text" id="degree" placeholder={newDegree} onChange={(e) => {newDegree = e.target.value}}/>

          <label htmlFor="school-start-date">Start Date (Approximate)</label>
          <input type="date" id="school-start-date" placeholder={newStart} onChange={(e) => {newStart = e.target.value}}/>
          
          <label htmlFor="school-finish-date">Finish Date (Approximate)</label>
          <input type="date" id="school-finish-date" placeholder={newFinish} onChange={(e) => {newFinish = e.target.value}}/>

          <input type="submit" className="form-submit" value="Save" 
          onClick={(e) => { 
          e.preventDefault();
          handleState(newSchool, newDegree, newStart, newFinish);
          }}/>
        </form>
      </div>
    )
  }
}

export default EducationForm;