import React from "react";
import "./browse.css";
import Details from "./components/details/Details";
import Price from "./components/price/Price";
import Descrip from "./components/descrip/Descrip";
import Offers from "./components/offers/Offers";
import Message from "./components/message/Message";
import TaskCard from "./components/task-card/TaskCard";
import axios from "axios";

class BrowseTask extends React.Component {
  constructor() {
    super();
    this.state = {
      taskId: 0,
    };
  }

  taskData = [
    {
      taskId: 0,
      title: "Clean a house",
      type: "in person",
      description:
        "I need to have my house cleaned to sound professional. Right now my resume is very dated.nearly 10 years. Have all necessary tools equipment and vehicle to get YOURnearly 10 years. Have all necessary tools equipment and vehicle to get YOUR job completed to YOUR SATISFACTION All my quotes include all labour costs and additional fees. No hidden extras ",
      taskLocation: "17 the Avenue, Malvern east",
      price: 200,
      openDate: "2020-07-01",
      taskDate: "2020-07-01",
      arranged: false,
      completed: false,
      expired: false,
      userName: "Aileen",
    },
    {
      taskId: 1,
      title: "Deliver a study table",
      type: "inPerson",
      description: "Deliver a Computer desk",
      taskLocation: "Docklands VIC, Australia",
      price: 50,
      openDate: "2020-07-01",
      taskDate: "2020-07-05",
      arranged: false,
      completed: false,
      expired: false,
      userName: "Snow",
    },
    {
      taskId: 2,
      title: "Pick up and deliver fridge",
      type: "inPerson",
      description: "Hello! I need to pickup and deliver my fridge",
      taskLocation: "Hawthorn East VIC, Australia",
      price: 70,
      openDate: "2020-07-01",
      taskDate: "2020-07-06",
      arranged: false,
      completed: false,
      expired: false,
      userName: "Sherry",
    },
    {
      taskId: 3,
      title: "Resume & cover letter help)",
      type: "remote",
      description:
        "Been a while since applying for work, not feeling super confident with my resume, some feedback/tweaking appreciated. Would also like a cover letter template one geared towards office admin work & one for animal care work.",
      taskLocation: "Truganina VIC, Australia",
      price: 50,
      openDate: "2020-07-01",
      taskDate: "2020-07-11",
      arranged: false,
      completed: false,
      expired: false,
      userName: "DD",
    },
    {
      taskId: 4,
      title: "House cleaned",
      type: "inPerson",
      description: "4 bed rooms/2 bathrooms/kitchen/living room/hallway",
      taskLocation: "Truganina VIC, Australia",
      price: 200,
      openDate: "2020-07-01",
      taskDate: "2020-07-06",
      arranged: false,
      completed: false,
      expired: false,
      userName: "Eric",
    },
  ];

  replyData = [
    {
      replyId: 0,
      description:
        "Hey there,\n\nMy names indie, I am reliable, fast, detailed and thorough. I complete all tasks to 110% utter perfection. I have all cleaning products required and outside equipment if required. You won’t be disappointed. Take care I hope to hear from you soon.",
      replyDate: null,
      accepted: false,
      userName: "Eric",
      taskId: 0,
    },
    {
      replyId: 1,
      description:
        "Hey,\nHow are you?\nI have bond and domestic cleaning experience and I'd love to help you, I’m available and I'm very thorough you can check my reviews.\n\nThank you!!",
      replyDate: null,
      accepted: false,
      userName: "DD",
      taskId: 0,
    },
    {
      replyId: 2,
      description:
        "Good Day!  I can help you with this task and clean your house. I have experience in housekeeper and cleaners.  I worked for a contractor, cleaning Arbnb houses, end of lease and holiday apartments. I`m very energetic, punctual, enthusiastic and efficient. I have all cleaning products but I don`t have mop and vacuum. I`m available :)",
      replyDate: null,
      accepted: false,
      userName: "Sherry",
      taskId: 0,
    },
    {
      replyId: 3,
      description: "Hi yuka where to where you want to move?",
      replyDate: null,
      accepted: false,
      userName: "Snow",
      taskId: 1,
    },
    {
      replyId: 4,
      description:
        "Hi Melissa!\nWe are in 2 professional guys and we’d be happy to come around and knock this task out as soon as you’d like. We have a single 4.5 tonne truck with 600kg tail lift, trolley, dolly, ratchet straps and blankets, fully insured, please let me know more about.\nMany thanks,\nChristopher",
      replyDate: null,
      accepted: false,
      userName: "Aileen",
      taskId: 1,
    },
    {
      replyId: 5,
      description:
        "Hi Melissa!\nWe are in 2 professional guys and we’d be happy to come around and knock this task out as soon as you’d like. We have a single 4.5 tonne truck with 600kg tail lift, trolley, dolly, ratchet straps and blankets, fully insured, please let me know more about.\nMany thanks,\nChristopher",
      replyDate: null,
      accepted: false,
      userName: "Aileen",
      taskId: 2,
    },

    {
      replyId: 6,
      description: "Hi yuka where to where you want to move?",
      replyDate: null,
      accepted: false,
      userName: "Snow",
      taskId: 3,
    },

    {
      replyId: 7,
      description: "Hi yuka where to where you want to move?",
      replyDate: null,
      accepted: false,
      userName: "Snow",
      taskId: 5,
    },
  ];

  changeTaskId = (item) => {
    console.log(item);
    this.setState({ taskId: item });
    console.log("taskID :  " + this.state.taskId);
  };

  render() {
    console.log(this.state.taskId);
    return (
      <div className="content-layout">
        <div className="content-left">
          <TaskCard getTaskId={this.changeTaskId} taskData={this.taskData} />
        </div>

        <div className="content-right">
          <div className="wrap-right">
            <div className="details-layout">
              <Details taskId={this.state.taskId} taskData={this.taskData} />
              <Price taskId={this.state.taskId} taskData={this.taskData} />
            </div>

            <Descrip taskId={this.state.taskId} taskData={this.taskData} />

            <div className="offers-layout">
              <Offers taskId={this.state.taskId} replyData={this.replyData} />
            </div>

            <div className="offers-layout">
              <Message />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BrowseTask;
