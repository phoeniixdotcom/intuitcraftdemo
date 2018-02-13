import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Common.css';
import './ContactDetails.css'

class ContactDetails extends Component {

  render() {
    const contact = this.props.contact;

    return (
      <div className="ContactDetails">
        <div className="selector" onClick={this.props.handleShowList}>&laquo; back</div>
        <label>Contact</label>

        <div className="Section">
          <label>Name</label>
          <div>{contact.firstName} {contact.lastName}</div>
        </div>

        <div className="Section">
          <label>Phones</label>
          {contact.phones.map((phone) => {
            return phone.number !== ''
            ? (<div>{phone.number} {phone.type}</div>)
            : null;
          })}
        </div>

        <div className="Section">
          <label>Addresses</label>
          {contact.addresses.map((address) => {
            return (
              <div>
                <div>{address.type}</div>
                <div>{address.address}</div>
                <div>{address.address2}</div>
                <div>{address.city}</div>
                <div>{address.state}</div>
                <div>{address.zipcode}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
};

ContactDetails.propTypes = {
  contacts: PropTypes.object,
  handleShowList: PropTypes.func.isRequired
};

export default ContactDetails;
