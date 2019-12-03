import React from 'react';
import pic from './good_img.jpg';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);

    let response = fetch('https://dwuserver.herokuapp.com/express_backend').then((data) => {
      data.text().then((text) => this.setState({heading: text}))
    })
    this.state = {
      heading: ''
    }
  }


  render() {
    console.log();
    return (
      <div className="App">
        <h1>{this.state.heading}</h1>
        <img src={pic} className="pic" alt="pic" />
      </div>
    );
  }
}

export default App;
