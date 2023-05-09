import React, { Component } from 'react';
import '../styles/forms.css'

class GeneralInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2 class="form-section-header">General</h2>
        <form>
          <label htmlFor="name">Name</label>
          <input type="text" id="name"/>

          <label htmlFor="email">Email</label>
          <input type="email" id="email"/>

          <label htmlFor="phone">Phone</label>
          <input type="tel" id="phone"/>

          <input type="submit" class="form-submit" value="Save"/>
        </form>
      </div>
    )
  }
}

export default GeneralInfo;