import React from 'react';
import { MDBCard, MDBCardBody, MDBModalFooter, MDBInput, MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import '../Style.css';
import { Link } from 'react-router-dom'
import '.././Style.css'

const Register = () => {
    return (

        <MDBContainer fluid className='contain'>

            <MDBCard className="card-sign">
                <MDBCard className='cardatas d-flex justify-content-center align-items-center flex-column p-4 '>
                    <h3 className='font-weight-bold'>Daftar</h3>
                </MDBCard>
                <MDBCardBody className='mx-3'>
                    {/* <h3 className='mb-2 text-center dark-grey-text'>Log in</h3> */}
                    <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
                        Your name
        </label>
                    <input type="text " id="defaultFormRegisterNameEx" className="form-control" />
                    <br />
                    <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
                        Your email
        </label>
                    <input type="email" id="defaultFormRegisterEmailEx" className="form-control" />
                    <br />
                    <label htmlFor="defaultFormRegisterConfirmEx" className="grey-text">
                        Confirm your email
        </label>
                    <input type="email" id="defaultFormRegisterConfirmEx" className="form-control" />
                    <br />
                    <label htmlFor="defaultFormRegisterPasswordEx" className="grey-text">
                        Your password
        </label>
                    <input type="password" id="defaultFormRegisterPasswordEx" className="form-control" />
                    <button className='mb-3 btn center-block'>Daftar</button>
                    <MDBModalFooter className="mx-5 pt-3 mb-1">
                        <p className="font-small grey-text d-flex justify-content-end">
                            Have an account ?
                                 <Link to="#Register" className="text-s ml-1">Log In </Link>
                        </p>
                    </MDBModalFooter>
                </MDBCardBody>
            </MDBCard>
        </MDBContainer>

    )
}

export default Register;