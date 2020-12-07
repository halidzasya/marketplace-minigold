import React, { Component } from "react";
import { MDBCol, MDBCard, MDBRow, MDBCardBody, MDBTable, MDBTableHead, MDBTableBody, MDBBtn, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from
    "mdbreact";
import '.././Style.css'
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import InputCounter from "../Form/InputCounter";
import kk from "../../Images/gold1.jfif";
import kk2 from "../../Images/gold2.jfif";
import { Form } from "react-bootstrap";

export default class CardDetailProduk extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         count: 1
    //     }
    // }
    // increment(e) {
    //     this.setState({
    //         count: this.state.count + 1
    //     });
    // }


    // decrement(e) {
    //     this.setState({
    //         count: this.state.count - 1
    //     });
    // }


    render() {
        return (
            <>
                <Navbar />
                <MDBRow style={{ marginTop: '100px', marginRight: '100px', marginLeft: '100px' }} >
                        <MDBCol sm='5'>
                            <img src={kk} class='thumbdetailpro' />
                        </MDBCol>
                        <MDBCol sm='5'>
                            <MDBCardBody className='mx-3'>
                                <h4>Black Series 0,05 Gram </h4>
                                <h6>115 Terjual/Bln</h6>

                                <MDBTable className="mt-3">
                                        <tr>
                                            <td>Harga</td>
                                            <td><h5 class='font-weight-bold' style={{color:'#dfbb00'}}>Rp105.500</h5></td>

                                        </tr>
                                        <tr>
                                            <td>Jumlah</td>
                                            <td>
                                            <InputCounter/>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Spesifikasi Produk</td>
                                            <td><tr>Berat: 0,05gr</tr><tr>Kategori: Logam</tr><tr>Stok: 11</tr></td>
                                    
                                        </tr>
                                        <tr>
                                            <td>Pengiriman</td>
                                            <td>Ke</td>
                                        </tr>
                                </MDBTable>
                               
                                <button className='btnbeli mr-2'>Beli</button>
                                        <button className='btncart'><i class="fas fa-plus mr-2" ></i>Keranjang</button>
                            </MDBCardBody>
                        </MDBCol>
                    </MDBRow>
                    {/* <MDBCard style={{width:'200px'}}>

                        <h5>Deskripsi Produk</h5>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                            Lorem Ipsum is simply dummy text of the printing</p>
                    </MDBCard> */}
                    <Footer/>

                
            </>
        );
    }
}
