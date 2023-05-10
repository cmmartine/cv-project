import React, { Component } from 'react';
import '../styles/forms.css'

class GeneralInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const general = this.props.general[0];
    let newName = general.name;
    let newEmail = general.email;
    let newPhone = general.phone;
    const handleState = this.props.handleState;

    return (
      <div>
        <h2 className="form-section-header">General</h2>
        <form>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder={newName} onChange={(e) => {newName = e.target.value}}/>

          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder={newEmail}onChange={(e) => {newEmail = e.target.value}}/>

          <label htmlFor="phone">Phone</label>
          <input type="tel" id="phone" placeholder={newPhone} onChange={(e) => {newPhone = e.target.value}}/>

          <input type="submit" className="form-submit" value="Save" onClick={(e) => { 
          e.preventDefault();
          handleState(newName, newEmail, newPhone)}}/>
        </form>
      </div>
    )
  }
}

export default GeneralInfo;