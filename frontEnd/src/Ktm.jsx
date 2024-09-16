import React, { useEffect, useState } from 'react'
import './Ktm.css'



export default function App() {
  const [data, setData] = useState([])
  useEffect(()=>{
    fetch('http://localhost:8081/ktm')
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
            <img src={d.Foto} alt="Immagine Moto" className="image" />
        </div>
        <div className="column">
            <div id="example1">
                <h2>{d.Nome_Moto}</h2>
                <ul className="b">
                <div key={i}>
                    <li>{d.Nome_Moto}</li>
                    <li>{d.Categoria}</li>
                    <li>{d.Inizio_Prod}</li>
                    <li>{d.Peso_secco}</li>
                    <li>{d.Cilindrata}</li>
                    <li>{d.Tipo_Motore}</li>
                    <li>{d.Tempi}</li>
                    <li>{d.Cilindri}</li>
                    <li>{d.Raffreddamento}</li>
                    <li>{d.Avviamento}</li>
                    <li>{d.Alimentazione}</li>
                    <li>{d.Emissioni}</li>
                    <li>{d.Numero_Marce}</li>
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

