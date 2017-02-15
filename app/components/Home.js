// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Home.css';


export default class Home extends Component {
  render() {
    return (
      <div>
        <div className={styles.container}>
          <h2>Email Builder</h2>
          <Link to="/builder">New Email</Link>
        </div>
      </div>
    );
  }
}
