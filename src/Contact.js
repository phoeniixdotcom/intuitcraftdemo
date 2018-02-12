import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Common.css';

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
      <div className="selector" onClick={this.handleShowDetailsWithId}>{this.props.contact.firstName} {this.props.contact.lastName} {this.props.contact.phones[2].number}</div>
    );
  }
};

Contact.propTypes = {
  contact: PropTypes.object,
  handleShowDetails: PropTypes.func.isRequired
};

export default Contact;
