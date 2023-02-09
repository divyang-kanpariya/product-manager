import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import CopyrightIcon from '@mui/icons-material/Copyright';


const Footer = () => {

  const footersx = {
    position : "fixed",
    bottom:"0",
    backgroundColor :"black",
    width : "100%",
    height:"64px"
  }

  return (
    <div style={footersx}>
    <div className=" mx-4 d-flex pt-4 justify-content-between text-white">
      <p><CopyrightIcon/>Divyang Kanpariya</p>
    <div className='mx-4'><InstagramIcon/>
      <FacebookIcon/></div>
      
    </div>
    </div>
  )
}

export default Footer