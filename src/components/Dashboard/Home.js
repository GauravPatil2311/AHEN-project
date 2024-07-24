import React, { Component } from 'react';
import Dashcards from './Dashcards';
import Todayssessions from './Todayssessions';
import Linec from './Line_Chart/Linec';
import './Home.css';

export class Home extends Component {
  render() {
    return (
      <div className='home_container'>
       
          <Dashcards />
       
        <div className='content_container'>
          <div className='today_sessions'>
            <Todayssessions />
          </div>
          <div className='line_chart'>
            <Linec />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
