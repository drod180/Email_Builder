// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Builder.css';

class Builder extends Component {
  props: {
    addModule: () => void,
    removeModule: () => void
  };

  render() {
    const { addModule, removeModule } = this.props;
    return (
      <div>
        <div>
          <div className={styles.backButton}>
            <Link to="/">
              <i className="fa fa-arrow-left fa-3x" />
            </Link>
          </div>
          <div className={`counter ${styles.counter}`} />
          <div className={styles.btnGroup}>
            <button className={styles.btn} onClick={addModule}>
              <i className="fa fa-plus" />
            </button>
          </div>
          <div className={styles.btnGroup}>
            <button className={styles.btn} onClick={removeModule}>
              <i className="fa fa-minus" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Builder;
