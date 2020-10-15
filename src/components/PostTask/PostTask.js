import React from "react";
import WhatUNeed from "./components/WhatUNeed";
import BrowseTask from "../BrowseTask/BrowseTask";
import WhereWhen from "./components/WhereWhen";
import HowMuch from "./components/HowMuch";
import PostSuccess from "./components/PostSuccess";

class PostTask extends React.Component {
  state = {
    step: 1,
    title: "",
    details: "",
    type: "inPerson",
    date: "2020-07-01",
    openDate: "",
    location: "",
    price: 0,
  };

  //handle input change
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
    //console.log(this.state);
  };

  //Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    var today = new Date();
    this.setState({ step: step + 1, openDate: today });
  };

  //Go back to prev step
  preStep = () => {
    const { step } = this.state;

    this.setState({ step: step - 1 });
  };

  handlePost = () => {
    const { step } = this.state;

    this.setState({ step: step + 1 });
  };

  render() {
    const { step } = this.state;
    const { title, details, type, date, location, price } = this.state;
    const values = { title, details, type, date, location, price };

    switch (step) {
      case 1:
        return (
          <div>
            <BrowseTask />
            <WhatUNeed
              nextStep={this.nextStep}
              handleChange={this.handleChange}
              values={values}
            />
          </div>
        );
      case 2:
        return (
          <div>
            <BrowseTask />
            <WhereWhen
              nextStep={this.nextStep}
              preStep={this.preStep}
              handleChange={this.handleChange}
              values={values}
            />
          </div>
        );

      case 3:
        return (
          <div>
            <BrowseTask />
            <HowMuch
              preStep={this.preStep}
              handleChange={this.handleChange}
              handlePost={this.handlePost}
              values={values}
            />
          </div>
        );

      case 4:
        return (
          <div>
            <BrowseTask />
            <PostSuccess />
          </div>
        );
    }
  }
}

export default PostTask;
