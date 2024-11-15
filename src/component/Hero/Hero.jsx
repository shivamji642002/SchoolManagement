import React from 'react'
import './hero.css'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <>
    <div className='Hero'>
    <div>
        <h5 style={{color:'blue'}}>DASHBOARD</h5>
        </div>
    <div className='main'>       
    <h3>Welcome to eSchool Demo</h3>
        <div className="d-flex flex-row-reverse" id='absolute' >
        
        <div className="p-1" id='first'><Link to="/master"><Button variant="primary"><i class="bi bi-house-up-fill"></i> MASTER DASHBOARD</Button></Link></div>
        <div className="p-1" id='second'><Button variant="primary"><i class="bi bi-blockquote-left"></i>PUBLISH NOTICE</Button></div>
        <div className="p-1" id='third'><button type="button" class="btn btn-outline-secondary" ><i class="bi bi-chat"></i> SEND SMS</button></div>
        <div className="p-1" id='four'><button type="button" class="btn btn-outline-secondary" ><i class="bi bi-envelope-at"></i> SEND EMAIL</button></div>
      </div>
    </div>
    </div>
    </>
  )
}

export default Hero