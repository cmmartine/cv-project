import React, { Component } from 'react';

class ExperienceInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2 class="form-section-header">Experience</h2>
        <form>
          <label htmlFor="company">Company</label>
          <input type="text" id="company"/>

          <label htmlFor="position">Position Title</label>
          <input type="text" id="position"/>

          <label htmlFor="job-duties">Main Duties</label>
          <textarea rows="10" id="job-duties"/>

          <label htmlFor="job-start-date">Start Date (Approximate)</label>
          <input type="date" id="job-start-date"/>
          
          <label htmlFor="job-finish-date">Finish Date (Approximate)</label>
          <input type="date" id="job-finish-date"/>

          <input type="submit" class="form-submit" value="Save"/>
        </form>
      </div>
    )
  }
}

export default ExperienceInfo;