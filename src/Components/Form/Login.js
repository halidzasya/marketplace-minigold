import React from 'react';
import { MDBCard, MDBCardBody, MDBModalFooter, MDBCardImage,  MDBInput, MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import '.././Style.css'
import { Link } from 'react-router-dom'
import kk from "../../Images/gold1.jfif";

const Login = () => {
    return (
        <>
        <MDBContainer fluid className='contain'>
                 <h2>MINIGOLD</h2>
            <MDBCard className="card-sign">
                <MDBCard className='cardatas d-flex justify-content-center align-items-center flex-column p-4 '>
                    <h3 className='font-weight-bold'>Log In</h3>
               
                </MDBCard>
                <MDBCardBody className='mx-4'>
                    {/* <h3 className='mb-2 text-center dark-grey-text'>Log in</h3> */}
                    <MDBInput
                        label="Your email" group type="email" validate error="wrong" success="right" />
                    <MDBInput label="Your password" group type="password" validate
                        containerClass="mb-0" />
                    <a href="#!" className="font-small text-s d-flex justify-content-end pb-3">
                        Forgot Password?
                        </a>
                    <button className='mb-3 btn center-block'>Login</button>
                    <MDBModalFooter className="mx-5 pt-3 mb-1">
                        <p className="font-small grey-text d-flex justify-content-end">
                            Not a member?
                                 <Link to="#Register" className="text-s ml-1">Sign Up </Link>
                        </p>
                    </MDBModalFooter>
                </MDBCardBody>
            </MDBCard>
        </MDBContainer>
        </>
    )
}

export default Login;