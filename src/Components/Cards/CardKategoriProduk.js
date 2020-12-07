import React, {Component} from "react";
import { MDBCarousel, MDBCard, MDBCardBody, MDBCardGroup, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from
"mdbreact";
import '.././Style.css'
import { Link } from 'react-router-dom'

export default class CardKategoriProduk extends Component{
  render(){
  return (
      <>
           <Link to='/Produk'>
             <MDBCardGroup>
            <MDBCard className="cardkat mx-2 justify-content-center ">
                     <h6 className="mb-1 mx-3 font-weight-bold ">{this.props.judul}</h6>
                     <h6 class='mx-3'>10+ Produk</h6>
           
            </MDBCard>
            </MDBCardGroup>
          </Link>
    </>
  );
}
}
