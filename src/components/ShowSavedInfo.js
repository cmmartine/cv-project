import React, { Component } from 'react';
import ShowExperience from './ShowExperience';

class ShowSavedInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const general = this.props.general[0];
    const education = this.props.education[0];
    const experiences = this.props.experience;
    const br = <br></br>;

    return (
      <div className="review-div">
        <h2 className="review-title">Review</h2>
          <div className="review-section">
            <p><strong>Name:</strong>{br}</p>
            <p className="review-highlight">{general.name}</p>

            <p><strong>Email:</strong>{br}</p>
            <p className="review-highlight">{general.email}</p>

            <p><strong>Phone:</strong>{br}</p>
            <p className="review-highlight">{general.phone}</p>
          </div>

        <div className="review-section">
          <p><strong>School:</strong>{br}</p>
          <p className="review-highlight">{education.school}</p>

          <p><strong>Degree:</strong>{br}</p>
          <p className="review-highlight">{education.degree}</p>
          
          <p><strong>Appr. Start Date:</strong>{br}</p>
          <p className="review-highlight">{education.start}</p>

          <p><strong>Appr. Finish Date:</strong>{br}</p>
          <p className="review-highlight">{education.finish}</p>
        </div>

        <ul>
          {experiences.map((exp) => (
            <li key={experiences.indexOf(exp)} className="review-section">
              <ShowExperience experience={exp} />
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default ShowSavedInfo;