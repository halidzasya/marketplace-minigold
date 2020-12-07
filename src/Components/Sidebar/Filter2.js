import React from 'react';
import { MDBCard, MDBCardBody, MDBModalFooter, MDBInput, MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import '../Style.css';
import { Link } from 'react-router-dom'
import { Checkbox } from 'react-input-checkbox';
import '.././Style.css'

const posts = [
    {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
    {id: 2, title: 'Installation', content: 'You can install React from npm.'}
  ];

const Filter2 = props => {
    return (
        <MDBCol sm='2'>
                <MDBContainer className='my-2 '>
                <h6 class='font-weight-bold mb-3'>FILTER</h6>
        <h6 class='font-weight-bold'>Lokasi</h6>
            <form>
                <input className='mr-1'
                    onChange="{handleFruitChange}"
                    type="checkbox"
                    name="fruit"
                    value="apple"
                />Jabodetabek<br></br>
                <input className='mr-1'
                    onChange="{handleFruitChange}"
                    type="checkbox"
                    name="fruit"
                    value="orange"
                />DKI Jakarta<br></br>
                    <input className='mr-1'
                    onChange="{handleFruitChange}"
                    type="checkbox"
                    name="fruit"
                    value="watermelon"
                />Jawa Barat
            </form>
            </MDBContainer>
            <MDBContainer className='my-4 '>
            <h6 class='font-weight-bold mb-3'>Harga</h6>
            <input type="text " placeholder="Harga Minimum"  className="form-control" />
             <input type="text " placeholder="Harga Maximum"  className="form-control" />
            </MDBContainer>
            
        </MDBCol>


    )
}

export default Filter2;