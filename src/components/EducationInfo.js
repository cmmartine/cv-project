import React, { Component } from 'react';

class EducationInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2 className="form-section-header">Education</h2>
        <form>
          <label htmlFor="school">School</label>
          <input type="text" id="school"/>

          <label htmlFor="degree">Degree</label>
          <input type="text" id="degree"/>

          <label htmlFor="school-start-date">Start Date (Approximate)</label>
          <input type="date" id="school-start-date"/>
          
          <label htmlFor="school-finish-date">Finish Date (Approximate)</label>
          <input type="date" id="school-finish-date"/>

          <input type="submit" className="form-submit" value="Save"/>
        </form>
      </div>
    )
  }
}

export default EducationInfo;