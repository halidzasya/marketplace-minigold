import React, { Component } from "react";
import {Link} from 'react-router-dom';
import { MDBCarousel, MDBCard, MDBCardBody, MDBCardGroup, MDBBtn, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from
    "mdbreact";
import '.././Style.css'

export default class CardProduk extends Component {
    render() {
        return (
            <>
            <Link to='/CardDetailProduk'>
                <MDBCardGroup>
                <MDBCard className="cardproduk mx-2 my-2">
                <img className="thumbproduk" src={this.props.img} />
                    <MDBCardBody >
                        <p className="m-0 p">{this.props.judul}</p>
                        <p className="m-0 p font-weight-bold">Rp. {this.props.harga}/gram</p>
                        <p className="my-2 p" style={{color:'#808080'}}>Stok {this.props.stok} Pcs</p>
                        <button className='btnproduk'>Beli</button>
                    </MDBCardBody>
                </MDBCard>
                </MDBCardGroup>
            </Link>
            </>
        );
    }
}
