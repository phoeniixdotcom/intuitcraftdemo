import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Contact.css';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.handleShowDetailsWithId = this.handleShowDetailsWithId.bind(this);
  }

  handleShowDetailsWithId() {
    console.log('id', this.props.contact.id);
    this.props.handleShowDetails(this.props.contact.id);
  }

  render() {
    return (
      <div className="contact" onClick={this.handleShowDetailsWithId}>
        <span>{this.props.contact.firstName}</span>
        <span>{this.props.contact.lastName}</span>
      </div>
    );
  }
};

Contact.propTypes = {
  contact: PropTypes.object,
  handleShowDetails: PropTypes.func.isRequired
};

export default Contact;
