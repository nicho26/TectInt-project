import React, { useEffect, useState } from 'react'
import './App.css'
import Accordion from './Accordion.jsx'
import Image from './Image.jsx'
import MotoImage from './assets/moto.jpeg'
import CaschiImage from './assets/caschi.jpeg'
import AbbigliamentoImage from './assets/abbigliamento.jpg'

import { Link } from "react-router-dom";

export default function App() {
  const [data, setData] = useState([])
  useEffect(()=>{
    fetch('http://localhost:8081')
    .then(res => res.json())
    .then(data => setData(data))
    .catch(err => console.log(err));
  },[])

  return (
    <>
    <html lang="en">
    <body>    
        <h1 className="Title">Motorcycle Shop</h1>
        
        <Accordion></Accordion>

        <Image></Image>
    
        <div className="grid-container">
            <div className="item1">
              <Link to={'/ktm'}><button className="buttonKTM"></button></Link>
            </div>
            <div className="item4">
              <Link to={'/kawasaki'}><button className="buttonKAWA"></button></Link>
            </div>
            <div className="item2">
              <Link to={'/airoh'} ><button className="buttonAIROH"></button></Link> 
            </div>
            <div className="item5">
              <Link to={'/fox'} ><button className="buttonFOX"></button></Link> 
            </div>
            <div className="item3">
              <Link to={'/ufo'}><button className="buttonUFO"></button></Link>  
            </div>
            <div className="item6">
              <Link to={'alpinestar'} ><button className="buttonALP"></button></Link> 
            </div>
        </div>
    </body>
    </html>
        </>
  )
}

