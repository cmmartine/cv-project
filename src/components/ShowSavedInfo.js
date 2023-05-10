import React, { Component } from 'react';

class ShowSavedInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const general = this.props.general[0];
    const education = this.props.education[0];
    const experience = this.props.experience[0];
    const br = <br></br>;

    return (
      <div className="review-div">
        <h2 className="review-title">Review</h2>
          <div>
            <p><strong>Name:</strong>{br}</p>
            <p className="review-highlight">{general.name}</p>

            <p><strong>Email:</strong>{br}</p>
            <p className="review-highlight">{general.email}</p>

            <p><strong>Phone:</strong>{br}</p>
            <p className="review-highlight">{general.phone}</p>
          </div>

        <div>
          <p><strong>School:</strong>{br}</p>
          <p className="review-highlight">{education.school}</p>

          <p><strong>Degree:</strong>{br}</p>
          <p className="review-highlight">{education.degree}</p>
          
          <p><strong>Appr. Start Date:</strong>{br}</p>
          <p className="review-highlight">{education.start}</p>

          <p><strong>Appr. Finish Date:</strong>{br}</p>
          <p className="review-highlight">{education.finish}</p>
        </div>

        <div>
          <p><strong>Company:</strong>{br}</p>
          <p className="review-highlight">{experience.company}</p>

          <p><strong>Position:</strong>{br}</p>
          <p className="review-highlight">{experience.position}</p>

          <p><strong>Main Duties:</strong>{br}</p>
          <p className="review-highlight">{experience.duties}</p>

          <p><strong>Appr. Start Date:</strong>{br}</p>
          <p className="review-highlight">{experience.start}</p>

          <p><strong>Appr. Finish Date:</strong>{br}</p>
          <p className="review-highlight">{experience.finish}</p>
        </div>
      </div>
    )
  }
}

export default ShowSavedInfo;