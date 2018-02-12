import React, { Component } from 'react';
import axios from 'axios';
import ContactList from './ContactList';
import ContactDetails from './ContactDetails';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state ={contacts: [], showList: true, showDetails: false, id: null};
    this.handleShowList = this.handleShowList.bind(this);
    this.handleShowDetails = this.handleShowDetails.bind(this);
  }

  componentWillMount() {
    const self = this;
    axios.get('/api/contacts')
      .then(function(response){
        self.setState({contacts: response.data});
      })
  }

  handleShowList() {
    this.setState({showList: true, showDetails: false, id: null});
  }

  handleShowDetails(id) {
    this.setState({showList: false, showDetails: true, id: id});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
        {this.state.contacts.length === 0 &&
          <p>No contacts found. Make sure you started express!</p>
        }
        {this.state.showList &&
          <ContactList contacts={this.state.contacts} handleShowDetails={this.handleShowDetails} />
        }
        {this.state.showDetails &&
          <ContactDetails contact={this.state.contacts[this.state.id]} handleShowList={this.handleShowList} />
        }
        </div>
      </div>
    );
  }
}

export default App;
