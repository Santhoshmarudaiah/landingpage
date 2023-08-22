import React from 'react'
import './contact.css'
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import girl from './images/girl.png'
import { MDBBtn } from 'mdb-react-ui-kit';



function contact() {
    return (
        <div className='contact'>
            <MDBRow>
                <MDBCol md='6'>
                    <h1 className='career'><strong> Still confused about your <br></br> career choice? consult with <br></br>
                        our experts</strong></h1>
                    <div className='contact-btn'>
                        <MDBBtn rounded className='mx-2' color='dark'>
                            Contact Us
                        </MDBBtn>
                    </div>
                </MDBCol>
                <MDBCol md='6' className='girl'>
                    <img src={girl} className='girl-img' />
                </MDBCol>
            </MDBRow>
        </div>
    )
}

export default contact