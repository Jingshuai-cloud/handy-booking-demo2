import React from "react";
import "./Offers.css";
import { AiFillStar } from "react-icons/ai";
import axios from "axios";

class Offers extends React.Component {
  constructor() {
    super();
    this.state = {
      reply: [],
      newId: 1,
    };
  }

  checkReply = (replyData) => {
    return replyData.taskId === this.props.taskId;
  };

  render() {
    const reply = this.props.replyData.filter(this.checkReply);
    console.log(reply);

    return (
      <div className="repley-display">
        <ul className="ul">
          {reply.map((reply) => (
            <li key={reply.replyId} className="list">
              <div className="reply-header">
                <img
                  src={require("./summer.jpg")}
                  alt="image"
                  id="reply-image"
                />
                <div className="detail-box">
                  <a className="reply-name">{reply.userName}</a>
                  <div className="star">
                    <AiFillStar color="rgb(233,165,45)" />
                    <AiFillStar color="rgb(233,165,45)" />
                    <AiFillStar color="rgb(233,165,45)" />
                    <AiFillStar color="rgb(233,165,45)" />
                    <AiFillStar color="rgb(233,165,45)" />
                    <div className="reply-score">4.9</div>
                  </div>
                  <div className="complete-rate">100% completed rate</div>
                </div>
              </div>
              <div className="reply-text">{reply.description}</div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Offers;
