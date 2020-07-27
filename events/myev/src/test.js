import React from 'react';

import './App.css';

class App extends React.Component {

  showMessage = (event) => {
    console.log(event); // => nullified object.
    console.log(event.type); // => "click"
    const eventType = event.type; // => "click"
    console.log(eventType)

    setTimeout(() => {
      console.log(event.type); // => null
      console.log(eventType); // => "click"
    }, 0);

    // Won't work. this.state.clickEvent will only contain null values.
    this.setState({ clickEvent: event });

    // You can still export event properties.
    this.setState({ eventType: event.type });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <button 
            onClick = {this.showMessage}
            >
              Click me!
            </button>
          </div>
        </header>
        <body>

        </body>
      </div>
    );
  }
}

export default App;
