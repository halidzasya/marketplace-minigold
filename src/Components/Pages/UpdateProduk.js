import React from "react";
import { MDBCarousel, MDBRow, MDBCard, MDBCardBody, MDBCardGroup, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from
  "mdbreact";
import Navbar from "../Navbar/Navbar";
import CardKategoriProduk from "../Cards/CardKategoriProduk";
import CardProduk from "../Cards/CardProduk";
import CarosoulProduk from "../Carosoul/CarosoulProduk";
import ic1 from "../../Images/26151.jpg";
import kk from "../../Images/gold1.jfif";
import kk2 from "../../Images/gold2.jfif";
import '.././Style.css'
import Footer from "../Footer/Footer";
import Faq from "../Accordion/Faq";



const UpdateProduk = () => {
  return (
    <>
      <Navbar />
      <MDBContainer fluid class='mx-5' style={{marginTop: '100px' }} >
      <CarosoulProduk/>
      <MDBCard className="cardluar mt-4">
      <li className='list-inline-item '>
              <h5 className="font-weight-bold mb-4" >Kategori</h5>
            </li>
        <MDBRow >
          <CardKategoriProduk judul="Logam Mulia"  />
          <CardKategoriProduk judul="Mini Gold"  />
          <CardKategoriProduk judul="Card Gold"  />
          <CardKategoriProduk judul="Aksesoris Mini Gold"  />  
          </MDBRow>
        </MDBCard>
      
        
        {/* <MDBCard className="cardluar mt-4"> */}
          {/* <ul className='list-unstyled list-inline'>
            <li className='list-inline-item '>
             
            </li>
          </ul> */}
         
          
     
        {/* </MDBCard> */}
       
        <MDBCard className="cardluar mt-4">
          <ul className='list-unstyled list-inline'>
            <li className='list-inline-item '>
              <h5 className="font-weight-bold" >Produk Terlaris</h5>
            </li>
            <li className='list-inline-item'>
              <h6 className="my-2 text-select">Lihat Semua <i class="fas fa-chevron-right "></i></h6>
            </li>
          </ul>
            <MDBRow>
            <CardProduk judul="BLACK SERIES 0,05 Gram" img={kk} harga="67.075" stok="250" />
            <CardProduk judul="WHITE SERIES 0,05 Gram" img={kk} harga="65.650" stok="250" />
            <CardProduk judul="BLACK SERIES 0,1 Gram" img={kk2} harga="125.800" stok="250" />
            <CardProduk judul="WHITE SERIES 0,1 Gram" img={kk} harga=" 123.750" stok="250" />
            <CardProduk judul="BLACK SERIES 0,25 Gram" img={kk2} harga="295.750" stok="250" />
            <CardProduk judul="BLACK SERIES 0,25 Gram" img={kk2} harga="295.750" stok="250" />
            </MDBRow>
 
 </MDBCard>
      </MDBContainer>
  
      <Faq/>
    
   
      <Footer/>
    </>
  );
}

export default UpdateProduk;