import React, { Component } from "react";
import { Container } from "reactstrap";
import { NavMenu } from "./NavMenu";
import "../css/Layout.css";
import NavBar from "./NavBar";
export class Layout extends Component {
  static displayName = Layout.name;

  render() {
    return (
      <div>
        <NavBar />
        <div className="mainContent">{this.props.children}</div>
      </div>
    );
  }
}
