import React, { Component } from 'react';

import './App.css';



class App extends Component {
  render() {
    return (
      <div className="body">

        <div className="left">
            <div className="pink">
                <div className="chloe">Chloe</div>
                <div className="steph">Steph</div>
                <div className="design">designs</div>
            </div>
        </div>

        <div className="right">
            <div className="work">Work</div> 
            <div className="who">Who Is She</div>
            <div className="pro1">project name</div>
            <div className="pro2">project name</div>
            <div className="pro3">project name</div>
            <div className="pro4">project name</div>

            <span className="bottom">
              <div className="about">about me</div>
              <div className="contact">contact</div>
            </span>


        </div>

      </div>
    );
  }
}

export default App;
  