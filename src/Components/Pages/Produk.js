import React, { Component } from "react";
import { MDBCarousel, MDBRow, MDBCol, MDBCard, MDBCardGroup, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from
  "mdbreact";
import { Form, FormControl } from 'react-bootstrap';
import Navbar from "../Navbar/Navbar";
import CardKategoriProduk from "../Cards/CardKategoriProduk";
import CardProduk from "../Cards/CardProduk";
import CarosoulProduk from "../Carosoul/CarosoulProduk";
import Filter from "../Sidebar/Filter2";
import kk from "../../Images/gold1.jfif";
import kk2 from "../../Images/gold2.jfif";
import '.././Style.css'
import Select from 'react-select';

const harga = [
  { value: 'min', label: 'Harga Terendah' },
  { value: 'max', label: 'Harga Tertinggi' },
];

class Produk extends Component {

  render() {
    return (
      <>
        <Navbar />
        <MDBContainer   style={{ height: '1000px', marginTop: '100px' }} >
          <CarosoulProduk />
        <MDBRow>
        <Filter/>
        <MDBCol sm='10'>
          <MDBRow className='p-0' >
            <ul className=' list-inline'>
              <li className='list-inline-item'>
              <h6 class=' font-weight-bold ml-2'>Urutkan</h6>
               </li>
             
              <li className='list-inline-item'>
               <button className='btnfltr'>Terlaris</button>
               </li>
                <li className='list-inline-item'>
               <button className='btnfltr'>Terbaru</button>
               </li>
              <li className='list-inline-item ml-4'>
              <Select className="select" placeholder="Harga" options={harga} />
               </li>
            </ul>
            </MDBRow>
            <MDBRow className=' p-0'>
              <CardProduk judul="BLACK SERIES 0,05 Gram" img={kk} harga="67.075" stok="250" />
              <CardProduk judul="WHITE SERIES 0,05 Gram" img={kk} harga="65.650" stok="250" />
              <CardProduk judul="BLACK SERIES 0,1 Gram" img={kk2} harga="125.800" stok="250" />
              <CardProduk judul="WHITE SERIES 0,1 Gram" img={kk} harga=" 123.750" stok="250" />
            
              <CardProduk judul="BLACK SERIES 0,05 Gram" img={kk} harga="67.075" stok="250" />
              <CardProduk judul="WHITE SERIES 0,05 Gram" img={kk} harga="65.650" stok="250" />
              <CardProduk judul="BLACK SERIES 0,1 Gram" img={kk2} harga="125.800" stok="250" />
              <CardProduk judul="WHITE SERIES 0,1 Gram" img={kk} harga=" 123.750" stok="250" />
              </MDBRow>
         
          </MDBCol>
          </MDBRow>
        </MDBContainer>
      </>
    );
  }
}
export default Produk;