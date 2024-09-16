import React, { useEffect, useState } from 'react'
import './Ktm.css'



export default function App() {
  const [data, setData] = useState([])
  useEffect(()=>{
    fetch('http://localhost:8081/ufo')
    .then(res => res.json())
    .then(data => setData(data))
    .catch(err => console.log(err));
  },[])

  return (
    
    <html lang="en">

<body className="wallper">
    {data.map((d,i)=> (
    <div className="row">
        <div className="column">
            <img src={d.Foto} alt="Immagine Casco" className="image" />
        </div>
        <div className="column">
            <div id="example1">
                <h2>{d.Nome}</h2>
                <ul className="b">
                <div key={i}>
                    <li>{d.Marchio}</li>
                    <li>{d.Caratteristica_1}</li>
                    <li>{d.Caratteristica_2}</li>
                    <li>{d.Caratteristica_3}</li>
                    <li>{d.Caratteristica_4}</li>
                    <li>{d.Caratteristica_5}</li>
                </div>
                </ul>
                <button className="buttonBuy">{d.Prezzo}</button>
            </div>
        </div>
    </div>
    ))}
    </body>
    </html>
        
  )
}

