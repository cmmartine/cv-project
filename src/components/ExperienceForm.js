import React, { Component } from 'react';

class ExperienceForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const count = this.props.experienceCount;
    const experience = this.props.experience;
    let newCompany = experience.company;
    let newPosition = experience.position;
    let newDuties = experience.duties;
    let newStart = experience.start;
    let newFinish = experience.finish;
    let saved = experience.saved;
    const handleState = this.props.handleState;
    const editState = this.props.editState;

    if (saved === false) {
      return (
        <div>
          <form>
            <label htmlFor="company">Company</label>
            <input type="text" id="company" defaultValue={newCompany} onChange={(e) => {newCompany = e.target.value}}/>

            <label htmlFor="position">Position Title</label>
            <input type="text" id="position" defaultValue={newPosition} onChange={(e) => {newPosition = e.target.value}} />

            <label htmlFor="job-duties">Main Duties</label>
            <textarea rows="10" id="job-duties" defaultValue={newDuties} onChange={(e) => {newDuties = e.target.value}} />

            <label htmlFor="job-start-date">Start Date (Approximate)</label>
            <input type="date" id="job-start-date" defaultValue={newStart} onChange={(e) => {newStart = e.target.value}} />
              
            <label htmlFor="job-finish-date">Finish Date (Approximate)</label>
            <input type="date" id="job-finish-date" defaultValue={newFinish} onChange={(e) => {newFinish = e.target.value}} />

            <input type="submit" className="form-submit" value="Save" 
            onClick={(e) => { 
            e.preventDefault();
            handleState(newCompany, newPosition, newDuties, newStart, newFinish, count);
              }}/>
          </form>
        </div>
      )
    } else {
      return(
        <div>
          <form>
            <label htmlFor="company">Company</label>
            <input type="text" id="company" placeholder={newCompany} disabled/>

            <label htmlFor="position">Position Title</label>
            <input type="text" id="position" placeholder={newPosition} disabled />

            <label htmlFor="job-duties">Main Duties</label>
            <textarea rows="10" id="job-duties" placeholder={newDuties} disabled />

            <label htmlFor="job-start-date">Start Date (Approximate)</label>
            <input type="date" id="job-start-date" placeholder={newStart} disabled />
              
            <label htmlFor="job-finish-date">Finish Date (Approximate)</label>
            <input type="date" id="job-finish-date" placeholder={newFinish} disabled />

            <input type="submit" className="form-submit" value="Edit" 
            onClick={(e) => { 
            e.preventDefault();
            editState(newCompany, newPosition, newDuties, newStart, newFinish, count);
              }}/>
          </form>
        </div>
      )
    }
  }
}

export default ExperienceForm;