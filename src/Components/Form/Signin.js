import React from 'react';
import {  MDBCard, MDBCardBody, MDBModalFooter, MDBInput, MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import '../Style.css';

const Signin = () => {
    return (
        <MDBContainer>
            <MDBRow>
                <MDBCard className="card-sign">
                    <MDBCardBody className='mx-4'>
                        <h3 className='mb-2 text-center dark-grey-text'>Sign up</h3>
                        <MDBInput
                            label="Your Fullname" group type="name" validate error="wrong" success="right"/>
                        <MDBInput
                            label="Your email" group type="email" validate error="wrong" success="right"/>
                        <MDBInput label="Your password" group type="password" validate
                            containerClass="mb-0"/>
                        <MDBInput label="Confirm password" group type="password" validate
                            containerClass="mb-0"/>
                        <a href="#!" className="font-small text-s d-flex justify-content-end pb-3">
                            Forgot Password?
                        </a>
                        <button className='mb-3 btn center-block'>Login</button>
                        <MDBModalFooter className="mx-5 pt-3 mb-1">
                            <p className="font-small grey-text d-flex justify-content-end">
                                Not a member?
                                 <a href="#!" className="text-s ml-1">Sign Up </a>
                            </p>
                        </MDBModalFooter>
                    </MDBCardBody>
                </MDBCard>
            </MDBRow>
        </MDBContainer>
    )
}

export default Signin;