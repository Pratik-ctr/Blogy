import React from 'react';
import styles from './HeroBg.module.css';

const HeroBg = () => {
  return (
    <div className={styles.mainhero}>
      <div className={styles.contentWrapper}>
        <div className={styles.maintext}>
          See Our <br /><strong>Recent Posts</strong>
        </div>
        <div className={styles.mainimg}>
          <img src="https://plus.unsplash.com/premium_photo-1669904022334-e40da006a0a3?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YmxvZyUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D" alt="Blog background" />
        </div>
      </div>
    </div>
  );
};

export default HeroBg;