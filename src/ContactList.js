import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Contact from './Contact';

class ContactList extends Component {
  // constructor(props) {
  //   super(props);
  //
  // }

  render() {
    return (
      <div>
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
