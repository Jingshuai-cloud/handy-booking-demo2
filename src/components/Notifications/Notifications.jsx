import React from "react";
import axios from "axios";

import AccountMenu from "./components/account-menu/AccountMenu";
import styles from "./Notifications.module.scss";

class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messagesData: [
        {
          messageId: 0,
          action: "comment on",
          messageDate: "2020-09-01",
          user: { userName: "Aileen" },
          task: { title: "Clean a House" },
        },
        {
          messageId: 1,
          action: "make an offer on ",
          messageDate: "2020-09-05",
          user: { userName: "Sherry" },
          task: { title: "Dlivery a Table" },
        },
        {
          messageId: 3,
          action: "comment on",
          messageDate: "2020-09-07",
          user: { userName: "Eric" },
          task: { title: "Pick up fridge" },
        },
        {
          messageId: 4,
          action: "make an offer on",
          messageDate: "2020-09-07",
          user: { userName: "Eric" },
          task: { title: "Pick up fridge" },
        },
        {
          messageId: 5,
          action: "comment on",
          messageDate: "2020-09-10",
          user: { userName: "Sherry" },
          task: { title: "Dlivery a Table" },
        },
        {
          messageId: 6,
          action: "make an offer",
          messageDate: "2020-09-11",
          user: { userName: "Aileen" },
          task: { title: "Clean a House" },
        },
      ],
    };
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.leftSide}>
            <AccountMenu messageDatas={this.state.messagesData} />
          </div>
          <div className={styles.rightSide}>
            <div className={styles.notificationWrapper}>
              <div className={styles.messageTitle}>
                Keep up to date with your tasks
              </div>
              {this.state.messagesData.map((message) => (
                <div
                  key={message.messageId}
                  className={styles.messageContainer}
                >
                  <div className={styles.messageInfo}>
                    <img
                      className={styles.userAvatar}
                      src={require("./sunny.png")}
                      alt="user_photo"
                    />
                    <span className={styles.userName}>
                      {message.user.userName}
                    </span>
                    <span className={styles.userAction}>{message.action}</span>
                    <a href={`/browse-tasks`} className={styles.messageTask}>
                      {message.task.title}
                    </a>
                  </div>
                  <span className={styles.messageTime}>
                    {message.messageDate}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Notifications;
