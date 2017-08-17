import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import NavBarDesktop from './../NavBar/NavBarDesktop';
import NavBariPad from './../NavBar/NavBariPad';

import DropdownMenu from './../DropdownMenu/DropdownMenu';
import { connect } from 'react-redux';


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuActive: true,
      itemAdded: this.props.itemAdded
    }

    this.toggleMenu = this.toggleMenu.bind(this);
    this.showItemAdded = this.showItemAdded.bind(this);

  }

toggleMenu() {
  console.log(this.state.menuActive)
  this.setState({
    menuActive: !this.state.menuActive
  })
}

showItemAdded(){
  this.setState({
    itemAdded: !this.props.itemAdded
  })
}

  render() {

    let itemAddedStyle = {display: 'none'};
    let qtyCount = 0;

    this.props.cart.forEach(  product => {
      qtyCount += parseInt(product.quantity, 10)
    })

    return (

      <div className="headerContainer">

        <div className="freeReturns">
        <p>FREE 3-DAY SHIPPING & FREE RETURNS</p>
        </div>
        <div className="header">


          <div className="logoContainer">
            <Link to="/" className="logoLink">
              <img className="tnfLogo" src="./../../images/logo-tnf.svg" alt="The North Face Logo"/>
            </Link>
          </div>

          <div className="mobileNavIcons">

          <Link to="/cart">
            <div className="cartAndCount">
              <div className="cartItemsCount">
                <p className="cartCount">
                {qtyCount}</p>
              </div>
              <img className="cartIcon"  src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Shopping_cart_font_awesome.svg/2000px-Shopping_cart_font_awesome.svg.png" alt="Cart icon" />
            </div>
          </Link>
            <div className="hamIcon" onClick={ this.toggleMenu } >
              <div className="hamRow"></div>
              <div className="hamRow"></div>
              <div className="hamRow"></div>
            </div>
          </div>

          <div className="linksContainer">
          <NavBarDesktop />
          <NavBariPad />
          </div>
        </div>
        <div className="itemAddedMsgiPhone" style={ this.state.itemAdded ? itemAddedStyle : null }>
          <div className="msgContainer">
            <p>YOU HAVE SUCCESSFULLY ADDED "PRODUCT NAME" TO YOUR SHOPPING CART.</p>
            <div className="viewCartButton">
              <p>VIEW CART</p>
            </div>
          </div>
        </div>

        <DropdownMenu menuActive={ this.state.menuActive} toggleMenu={this.toggleMenu} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart,
    itemAdded: state.itemAdded,
    addToCartClicked: state.addToCartClicked
  }
}

export default connect(mapStateToProps)(Header);
