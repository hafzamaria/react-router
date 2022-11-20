import React from 'react'
import "./index.css"
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faAlignLeft,  faArrowLeft,  faArrowRight } from '@fortawesome/fontawesome-free-solid'
const Footer = () => {
 let footStyle={
    position:"relative",
    top:'60vh',
    width:'100%',
    paddingTop:'5px',
    paddingBottom:'5px',
    display:'flex',
    justifyContent:'Center'
  }
    const navigate= useNavigate();
  return (
    <>
     <footer className='back' style={footStyle}>
    <button onClick={()=>{navigate(-1)}}>
          <FontAwesomeIcon icon={faArrowLeft} /></button>
    <button onClick={()=>{navigate(+1)}}><FontAwesomeIcon icon={faArrowRight} /></button>
    </footer>
    </>
  )
}

export default Footer
