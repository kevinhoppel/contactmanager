import React, { Component } from 'react';

//The WILL LCM's are being deprecated

class Test extends Component {
  state = {
    test: 'test'
  };

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentWillMount() {
    console.log('componentWillMount');
  }

  // Runs when something in state changes
  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  // Runs when something in state will change
  componentWillUpdate() {
    console.log('componentWillUpdate');
  }

  componentWillReceiveProps(nextProps, nextState) {
    console.log('componentWillReceiveProps');
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('getDerivedStateFromProps');
    return null;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate');
  }
  render() {
    return (
      <div>
        <h1>Test Component</h1>
      </div>
    );
  }
}

export default Test;
