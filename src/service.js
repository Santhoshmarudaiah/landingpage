import React from 'react';
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import './service.css'

export default function App() {
    return (

        <div className='service'>
            <h1 >Our Services</h1>
            <MDBRow className='service-row' >

                <MDBCol lg='6' md='12' className='mb-4 service-col'>
                    <img src='https://mdbootstrap.com/img/new/standard/city/047.webp' className='img-fluid rounded' alt='' />
                <h3 className='title'>Digital Marketing</h3>
                </MDBCol>

                <MDBCol lg='6' md='6' className='mb-4 service-col'>
                    <img
                        src='https://mdbootstrap.com/img/new/standard/city/047.webp'
                        className='img-fluid rounded'
                        alt=''
                    />
                    <h3 className='title'>Business Consultancy</h3>
                </MDBCol>

                <MDBCol lg='6' md='6' className='mb-4 service-col'>
                    <img
                        src='https://mdbootstrap.com/img/new/standard/city/047.webp'
                        className='img-fluid rounded-pill'
                        alt=''
                    />
                    <h3 className='title'>Front End Development</h3>

                </MDBCol>
                
                    <MDBCol lg='6' md='6' className='mb-4 service-col'>
                        <img
                            src='https://mdbootstrap.com/img/new/standard/city/047.webp'
                            className='img-fluid rounded-pill'
                            alt=''
                        />
                        <h3 className='title'>Web Application</h3>

                    </MDBCol>
                    <MDBCol lg='6' md='6' className='mb-4 service-col'>
                        <img
                            src='https://mdbootstrap.com/img/new/standard/city/047.webp'
                            className='img-fluid rounded-pill'
                            alt=''
                        />
                        <h3 className='title'>Event Management</h3>

                    </MDBCol>
                    <MDBCol lg='6' md='6' className='mb-4 service-col'>
                        <img
                            src='https://mdbootstrap.com/img/new/standard/city/047.webp'
                            className='img-fluid rounded-pill'
                            alt=''
                        />
                        <h3 className='title'>Brand Development</h3>

                    </MDBCol>
                    <MDBCol lg='6' md='6' className='mb-4 service-col'>
                        <img
                            src='https://mdbootstrap.com/img/new/standard/city/047.webp'
                            className='img-fluid rounded-pill'
                            alt=''
                        />
                        <h3 className='title'> Marketing Campaigns</h3>

                    </MDBCol>
                    <MDBCol lg='6' md='6' className='mb-4 service-col'>
                        <img
                            src='https://mdbootstrap.com/img/new/standard/city/047.webp'
                            className='img-fluid rounded-pill'
                            alt=''
                        />
                        <h3 className='title'>Content Creation Marketing</h3>

                    </MDBCol>
              
            </MDBRow>
        </div>
    );
}