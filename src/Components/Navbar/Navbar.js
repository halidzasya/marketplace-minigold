import React from 'react';
import { MDBContainer, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBIcon } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import { Link } from 'react-router-dom'
import './Navbar.css'
import InputSearch from "../Form/InputSearch";


class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  render() {
    const bg = { backgroundColor: '#dfbb00' }
    const container = { height: 1300 }
    return (
      <div>
      
          <MDBNavbar right style={bg} dark expand="md" scrolling fixed="top">
            <MDBNavbarBrand class="brand" href="/">
              <strong>MINIGOLD</strong>
            </MDBNavbarBrand>

            <MDBNavbarToggler onClick={this.onClick} />
            <MDBCollapse isOpen={this.state.collapse} navbar>
              <MDBNavbarNav right>
                <InputSearch/>
                <MDBNavItem >
                  <Link to="/Beranda/1" className="Navbar"><i class="fas fa-shopping-cart" /></Link>
                </MDBNavItem>
                
                <MDBNavItem active >
                  <Link to="/Beranda/1" className="Navbar">Beranda</Link>
                </MDBNavItem>
                <MDBNavItem>
                  <Link to="/UpdateProduk" className="Navbar">Update Produk</Link>
                </MDBNavItem>
                <MDBNavItem>
                  <Link to="/Berita" className="Navbar">Kemitraan</Link>
                </MDBNavItem>
                <MDBNavItem>
                  <Link to="/Login" className="Navbar">Login</Link>
                </MDBNavItem>

                <MDBNavItem>
                  <Link to="/Register" className="Navbar">Daftar</Link>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBNavbar>


      </div>
    );
  }
}

export default Navbar;