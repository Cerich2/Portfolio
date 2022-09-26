import React from 'react';
import styles from './.module.css';

const Header = ({ details, menus }) => {
  return (
    <div className={styles['header-pane']}>
      <div className={styles['name']}>{details.first_name}</div>
      <div className={styles['header']}>
        <div className={styles['right-pane']}>
          {menus.map((m, i) => {
            return (
              <div key={i} className={styles['header-labels']}>
                {m.name}
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles['last-panel']}>
        <label style={{ marginBottom: '5em' }}>
          <b>Let' Chat</b>
        </label>
      </div>
    </div>
  );
};

export default Header;
