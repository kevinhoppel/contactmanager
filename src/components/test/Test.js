import React, { Component } from 'react';

//The WILL LCM's are being deprecated

class Test extends Component {
  state = {
    title: '',
    body: ''
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(data =>
        this.setState({
          title: data.title,
          body: data.body
        })
      );
  }

  //   componentWillMount() {
  //     console.log('componentWillMount');
  //   }

  //   // Runs when something in state changes
  //   componentDidUpdate() {
  //     console.log('componentDidUpdate');
  //   }

  //   // Runs when something in state will change
  //   componentWillUpdate() {
  //     console.log('componentWillUpdate');
  //   }

  //   componentWillReceiveProps(nextProps, nextState) {
  //     console.log('componentWillReceiveProps');
  //   }

  //   static getDerivedStateFromProps(nextProps, prevState) {
  //     console.log('getDerivedStateFromProps');
  //     return null;
  //   }

  //   getSnapshotBeforeUpdate(prevProps, prevState) {
  //     console.log('getSnapshotBeforeUpdate');
  //   }

  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    );
  }
}

export default Test;
