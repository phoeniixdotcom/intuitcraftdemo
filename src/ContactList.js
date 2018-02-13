import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Contact from './Contact';
import './ContactList.css';

class ContactList extends Component {
  render() {
    return (
      <div className="ContactList">
        <label>List of Contacts</label>
        { this.props.contacts.map((contact) => {
          return (<Contact key={contact.id} contact={contact} handleShowDetails={this.props.handleShowDetails}/>)
        })}
      </div>
    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.array,
  handleShowDetails: PropTypes.func.isRequired
}

export default ContactList;
