import React, { Component } from 'react';

class GeneralForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const general = this.props.general[0];
    let newName = general.name;
    let newEmail = general.email;
    let newPhone = general.phone;
    let saved = general.saved;
    const handleState = this.props.handleState;
    const editState = this.props.editState;

    if (saved === false) {
      return (
        <div>
          <h2 className="form-section-header">General</h2>
          <form>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" defaultValue={newName} onChange={(e) => {newName = e.target.value}}/>

            <label htmlFor="email">Email</label>
            <input type="email" id="email" defaultValue={newEmail} onChange={(e) => {newEmail = e.target.value}}/>

            <label htmlFor="phone">Phone</label>
            <input type="tel" id="phone" defaultValue={newPhone} onChange={(e) => {newPhone = e.target.value}}/>

            <input type="submit" className="form-submit" value="Save" 
            onClick={(e) => { 
            e.preventDefault();
            handleState(newName, newEmail, newPhone);
            }}/>
          </form>
        </div>
      )
    } else {
      return(
        <div>
          <h2 className="form-section-header">General</h2>
          <form>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder={newName} disabled/>

            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder={newEmail} disabled/>

            <label htmlFor="phone">Phone</label>
            <input type="tel" id="phone" placeholder={newPhone} disabled/>

            <input type="submit" className="form-submit" value="Edit" 
            onClick={(e) => { 
            e.preventDefault();
            editState(newName, newEmail, newPhone);
            }}/>
          </form>
        </div>
      )
    }

  }
}

export default GeneralForm;