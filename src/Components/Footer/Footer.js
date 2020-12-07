import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import fb from '../../Images/Icons/facebook.png'
import tw from '../../Images/Icons/twitter.png'
import ig from '../../Images/Icons/instagram.png'
import app from '../../Images/Icons/appstore.png'
import play from '../../Images/Icons/playstore.png'
import '.././Style.css'

const Footer = () => {
  return (
    <MDBFooter className="text-white font-small pt-4 mt-4 " style={{color:'black',  backgroundColor:'#70431a'}}>
      <MDBContainer fluid className="text-center text-sm-left  px-4 py-5">
        <MDBRow  style={{marginLeft:'100px', marginRight:'100px'}}>
          <MDBCol md="3" >
            <h6 className="font-weight-bold">Minigold</h6>
            <li className="list-unstyled teks-footer">
                <a href="#!" class='teks-footer'>Tentang Minigold</a>
              </li>
              <li className="list-unstyled">
                <a href="#!" class='teks-footer'>Update Produk</a>
              </li>
    
              <li className="list-unstyled">
                <a href="#!" class='teks-footer'>Kemitraan</a>
              </li>
              <li className="list-unstyled">
                <a href="#!" class='teks-footer'>Kebijakan Minigold</a>
              </li>
              <li className="list-unstyled">
                <a href="#!" class='teks-footer'>Kebijakan Privasi</a>
              </li>
             
          
          </MDBCol>
           <MDBCol md="3">
           <h6 className="font-weight-bold">Artikel</h6>
            <li className="list-unstyled teks-footer">
                <a href="#!" class='teks-footer'>Artikel satu</a>
              </li>
              <li className="list-unstyled">
                <a href="#!" class='teks-footer'>Artikel dua</a>
              </li>
              <li className="list-unstyled">
                <a href="#!" class='teks-footer'>Artikel tiga</a>
              </li>
              <li className="list-unstyled">
                <a href="#!" class='teks-footer'>Artikel empat</a>
              </li>
              <li className="list-unstyled">
                <a href="#!" class='teks-footer'>Artikel lima</a>
              </li>
          </MDBCol>
          <MDBCol md="3">
          <h6 className="font-weight-bold">Bantuan</h6>
              <li className="list-unstyled">
                <a href="#!" class='teks-footer'>Support</a>
              </li>
              <li className="list-unstyled">
                <a href="#!" class='teks-footer'>Hubungi Kami</a>
              </li>
              
                <li className="list-unstyled">
                <a href="#!" class='teks-footer'>FAQs</a>
              </li>
        
              <h6 className="font-weight-bold mt-3">Ikuti Kami</h6>          
                <img src={ig} class='mr-1'/>
                <img src={tw} class='mr-1' />
                <img src={fb} class='mr-1' />
          
          </MDBCol>
          {/* <MDBCol md="2">
          <h6 className="font-weight-bold ">Ikuti Kami</h6>          
                <img src={ig} />
                <img src={tw} />
                <img src={fb} />
          </MDBCol> */}
         
          <MDBCol md='3'>
          <h6 className="font-weight-bold">Download Minigold</h6>          
                <img class='mx-0' src={app} style={{width:'125px'}}/>
                <p class='mt-3'>Copyright &copy; {new Date().getFullYear()}, PT. Minigold.</p>
                {/* <img src={play} style={{width:'140px'}}/> */}
          </MDBCol>
          
        </MDBRow>
      </MDBContainer>
      {/* <div className="footer-copyright text-center py-3"  >
        <MDBContainer fluid >
          Copyright &copy; {new Date().getFullYear()} Minigold
        </MDBContainer>
      </div> */}
    </MDBFooter>
  );
}

export default Footer;