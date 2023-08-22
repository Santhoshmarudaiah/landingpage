import React from 'react'
import './App.css'
import logo from './images/logo.png'
import hero from './images/hero.png'
import Service from './service.js'
import Videosec from './videosec';
import Contact from './contact.js'
import Footer from './footer.js'
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { MDBBtn } from 'mdb-react-ui-kit';
import Vectorline from './images/Vectorline.png'
import {  motion } from "framer-motion"
import Modal from './modal.js'

function App() {
  return (

    < motion.div className="hero-content">
 <Modal />
      <img src={logo} className="logo" />
      <MDBRow>
<App/>
        <MDBCol md='6'>

          <motion.h1 animate={{ x: [10, 100, 0] }} className="join-content" ><strong>"Unlocking Exponential Growth: Mastering Digital Strategies for Elevating Your Business Income from 5 to 7 Figures"</strong></motion.h1>
          <h6 className='tamil'><strong>"அதிவேக வளர்ச்சியைத் திறத்தல்: உங்கள் <br></br>வணிக வருமானத்தை 5 முதல் 7 புள்ளிகள் <br></br> வரை உயர்த்துவதற்கான டிஜிட்டல் உத்திகளில் <br></br>தேர்ச்சி பெறுதல்"</strong></h6>
          <img src={Vectorline} className="vector-img" />
          <div className="join">
            <MDBBtn outline rounded className='mx-2' color='danger'  onClick={() => setToggle()} >
              Join Now
            </MDBBtn>
          
          </div>
        </MDBCol>

        <MDBCol md='6' animate={{ cx: [null, 100] }}>
          <img src={hero} className="hero-img" />
        </MDBCol>
      </MDBRow>


      <Videosec />
      <Service />
      <Contact />
      <Footer />
     
    </motion.div>
  )
}

export default App