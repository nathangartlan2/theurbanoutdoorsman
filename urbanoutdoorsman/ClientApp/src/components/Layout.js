import React, { Component } from "react";
import { Container } from "reactstrap";
import { NavMenu } from "./NavMenu";
import "../css/Layout.css";
export class Layout extends Component {
  static displayName = Layout.name;

  render() {
    return (
      <div>
        <NavMenu />
        <Container className="mainContent" fluid>
          {this.props.children}
        </Container>
      </div>
    );
  }
}
