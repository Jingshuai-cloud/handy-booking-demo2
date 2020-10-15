import React from "react";

import styles from "./AccountMenu.module.scss";

class AccountMenu extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <div className={styles.menuHeader}>
          <div className={styles.avatarContainer}>
            <img
              className={styles.avatarImg}
              src={require("./coffee.png")}
              alt="user_photo"
            />
          </div>
          <div className={styles.userName}>Jingshuai</div>
        </div>
      </div>
    );
  }
}

export default AccountMenu;
