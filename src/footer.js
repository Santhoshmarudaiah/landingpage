import React from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import logo from './images/logo.png'
import './footer.css'


function footer() {
    return (
        <div className='footer-background'>
            <MDBFooter bgColor='bg-secondary' className='text-center text-lg-start text-muted foot'>


                <section className='footer-content'>
                    <MDBContainer className='text-center text-md-start mt-5'>
                        <MDBRow className='mt-3'>
                            <MDBCol md="2" lg="3" xl="3" className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-2'>
                                    <MDBIcon icon="camera" animate='bounce' />
                                    <img src={logo} className='footer-img' />
                                </h6>

                            </MDBCol>

                            <MDBCol md="4" lg="4" xl="4" className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4 business'><strong>Business</strong></h6>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        <h6 className='business'>Project</h6>
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        <h6 className='business'>
                                            Features
                                        </h6>
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        <h6 className='business'>                                        privacy policy
                                        </h6>
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        <h6 className='business'>      Returning and Refund Policy
                                        </h6>                                    </a>
                                </p>
                            </MDBCol>

                            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4 business'><strong>Useful links</strong></h6>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        <h6 className='business'>Home</h6>
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        <h6 className='business'>About</h6>
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        <h6 className='business'>Services</h6>
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                       <h6 className='business'> Contact US</h6>
                                    </a>
                                </p>
                            </MDBCol>

                            <MDBCol md="3" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4 business'><strong>Get In Touch</strong></h6>
                                <p className='business'>
                                    <MDBIcon icon="home" className="me-2" />
                                    R.R, Balamani Complex, kongampalayam, Chithode, Tamil Nadu 638102
                                </p>

                                <p className='business'>
                                    <MDBIcon icon="phone" className="me-3" />Phone No: +91 87787 97843
                                </p>
                                <p className='business'>
                                    <MDBIcon icon="print" className="me-3" />www.incandescentgroupofcompanies.com
                                </p>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </section>

                <div className='text-center p-4' style={{ backgroundColor: 'black' }}>
                    Copyright:© 2023 Incandescent
                    <a className='text-reset fw-bold' href=''>
                        |Powered by Incandescent.
                        ©                     </a>
                </div>
            </MDBFooter>

        </div>
    )
}

export default footer