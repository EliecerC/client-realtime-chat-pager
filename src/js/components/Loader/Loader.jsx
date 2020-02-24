import React from 'react';
import styles from './loader.scss';

export default function Chat() {
  // TO DO: add icon and animation to loader
  return (
    <div className={styles.root}>
      <h1 className="font-size-14">
        Loading...
      </h1>
    </div>
  );
}
