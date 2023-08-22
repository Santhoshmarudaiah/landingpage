import React from 'react'
import digitalmarketing from './images/digital marketing.jpg'
import './videosec.css'
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { motion } from "framer-motion"



function videosec() {
  return (

    <motion.div className="video-content" initial={{ scale: 0 }}
    animate={{ rotate: 360, scale: 1 }}
    transition={{
      type: "spring",
      stiffness: 260,
      damping: 20}}>
      <MDBRow>
        <MDBCol md='6' sm="8" xs="6" >
          <img className="video" src={digitalmarketing} />
        </MDBCol>
        <MDBCol md='6'>
          <h1 className="digi-title">
           <strong> DIGITAL MARKETING</strong>
          </h1>
          <p className="digi-text">
            Digital marketing, also called online marketing,<br></br> is the promotion of brands to connect with <br></br> potential customers using the internet <br></br> and other forms of digital communication.<br></br> This includes not only email, social <br></br>media, and web-based advertising, but<br></br> also text and multimedia messages as a <br></br>marketing channel.
          </p>

        </MDBCol>
      </MDBRow>

    </motion.div>


  )
}

export default videosec