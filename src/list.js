import React, { Component } from "react";

export default class list extends Component {
  componentDidMount() {
    console.log(this.props.match);
  }
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <div>list</div>;
  }
}
