import React, { Component } from 'react';

class ShowExperience extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const experience = this.props.experience;
    const br = <br></br>;

    return(
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
    )
  }
}

export default ShowExperience;