import React, { useEffect, useState } from 'react'
import './App.css'
import MotoImage from './assets/moto.jpeg'
import CaschiImage from './assets/caschi.jpeg'
import AbbigliamentoImage from './assets/abbigliamento.jpg'


export default function App() {

  return (
    <>
    <html lang="en">

        <div className="container">
            <img src={MotoImage} alt="Immagine Moto" className="image" />
            <div className="overlay">BIKE</div>
        </div>
    
        <div className="container_1">
            <img src={CaschiImage} alt="Immagine Casco" className="image_1" />
            <div className="overlay_1">HELMET</div>
        </div>
    
        <div className="container_2">
            <img src={AbbigliamentoImage} alt="Immagine Abbigliamento" className="image_2" />
            <div className="overlay_2">CLOTHING</div>
        </div>

    </html>
        </>
  )
}

