import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Login from './Components/Form/Login';
import Register from './Components/Form/Register';
import Navbar from './Components/Navbar/Navbar';
import Signin from './Components/Form/Signin';
import UpdateProduk from './Components/Pages/UpdateProduk';
import Produk from './Components/Pages/Produk';
import CardDetailProduk from './Components/Cards/CardDetailProduk';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';

const App = () => {
  return (
    <Router>
      
      <Switch>
      <Route exact path="/" render={() => (
    <Redirect to="/UpdateProduk" component={UpdateProduk}/>
      )}/>
        <Route path="/UpdateProduk" component={UpdateProduk} />
        <Route path="/Login" component={Login} />
        <Route path="/Register" component={Register} />
        <Route path="/Register" component={Register} />
        <Route path="/Produk" component={Produk} />
        <Route path="/CardDetailProduk" component={CardDetailProduk} />

        


      </Switch>
    </Router>

  );
}


export default App;
