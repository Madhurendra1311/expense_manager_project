import React, { Component } from "react";
import Styled from 'styled-components'

const NavbarWrapper = Styled.div `
    display : flex;
    justify-content :space-between;
`
class DashBoard extends Component {
  render() {
    return (
      <>
        <NavbarWrapper>
           <div>Welcome "name"</div>
           <div></div>
        </NavbarWrapper>
      </>
    );
  }
}
export default DashBoard;