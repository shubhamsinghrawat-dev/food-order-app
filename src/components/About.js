// About.js
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="max-w-4xl mx-auto p-4 mt-8">
        <h1 className="text-3xl font-bold mb-4 text-center">About Us</h1>
        <h5 className="text-xl font-medium mb-2 text-center">
          This is the About Us page of Food App
        </h5>
      </div>
    );
  }
}

export default About;
