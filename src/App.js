import React from 'react';
import "antd/dist/antd.css";
import pic from './good_img.jpg';
import cat from './fallincat.gif'
import './App.css';
import { PageHeader, Tabs, Button, Statistic, Descriptions } from 'antd';
import ReactGA from 'react-ga';

class App extends React.Component {

  constructor(props) {
    super(props);

    const trackingId = "UA-155552720-1";
    ReactGA.initialize(trackingId);

    let response = fetch('https://dwuserver.herokuapp.com/express_backend').then((data) => {
      data.text().then((text) => this.setState({heading: text}))
    })
    this.state = {
      heading: '',
      clickCount: 0,
    }
  }

  handleClick = () => {
    console.log('INC', this.state.clickCount);
    this.setState({clickCount: this.state.clickCount+1});
    ReactGA.event({category: "Log Clicks", action:"User Clicked"});
  }


  render() {
const { TabPane } = Tabs;

    return (
      <div className="App">
      <PageHeader
        style={{
          border: '1px solid rgb(235, 237, 240)',
        }}
        title="WorldLog"
        subTitle="Super Clicking"
        footer={
          <Tabs defaultActiveKey="1">
            <TabPane tab="About" key="1">
              <h1>{this.state.heading}</h1>
              <img src={pic} className="pic" alt="pic" />
            </TabPane>
            <TabPane tab="Log" key="2">
              <img src={cat} />
              <Button type="primary" onClick={this.handleClick}> Click Meh </Button>
            </TabPane>
            <TabPane tab="Stuffs" key="3" />
            <TabPane tab="MegaStuffs" key="4" />
          </Tabs>
        }
      >
      </PageHeader>
      </div>
    );
  }
}

export default App;
