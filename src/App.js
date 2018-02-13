import React, { Component } from 'react';
import './App.css';
import UserOp from './UserOutput/UserOutput';
import UserIp from './UserInput/UserInput';

class App extends Component {
  state = {
    unames: [
      { name: 'subho' },
      { name: 'sucheta' }
    ]
  }

  clickHandler = (n) => {
    this.setState ( {
      unames: [
        { name: n },
        { name: 'sucheta' }
      ]
    })
  }

  changeHandler = (event) => {
    this.setState ( {
      unames: [
        { name: 'subho' },
        { name: event.target.value }
      ]
    })
  }
  
  render() {
    const style = {
      backgroundColor: 'yellow',
      font: 'inherit',
      border: '1px solid blue',
      adding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <button style={style} onClick={this.clickHandler.bind(this, 'm=new')}>change</button>
        <UserOp
          name={this.state.unames[0].name}
          click={this.clickHandler.bind(this, 'hee')}
          // changed={this.changeHandler}
          />        
        <UserIp
          name={this.state.unames[1].name}
          changed={this.changeHandler}
        />
        <UserOp
          name={this.state.unames[1].name}
          />
        <ol>
          {/* <li>Create TWO new components: UserInput and UserOutput</li> */}
          {/* <li>UserInput should hold an input element, UserOutput two paragraphs</li> */}
          {/* <li>Output multiple UserOutput components in the App component (any paragraph texts of your choice)</li> */}
          {/* <li>Pass a username (of your choice) to UserOutput via props and display it there</li> */}
          {/* <li>Add state to the App component (=> the username) and pass the username to the UserOutput component</li> */}
          {/* <li>Add a method to manipulate the state (=> an event-handler method)</li> */}
          {/* <li>Pass the event-handler method reference to the UserInput component and bind it to the input-change event</li> */}
          {/* <li>Ensure that the new input entered by the user overwrites the old username passed to UserOutput</li> */}
          {/* <li>Add two-way-binding to your input (in UserInput) to also display the starting username</li> */}
          {/* <li>Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets</li> */}
        </ol>
      </div>
    );
  }
}

export default App;
