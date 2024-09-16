import React, { useEffect, useState } from 'react'
import './Accordion.css'

export default function Accordion() {

    const [selected, setSelected] = useState(null)

    const toggle = (i) =>{
        if(selected == i){
            return setSelected(null)
        }

        setSelected(i)
    }
  return (
    <>  
        <div className='wrapper'>
            <div className='accordion'>
                {data.map((item,i)=>( 
                    <div className='item'>
                      <div className='title' onClick={()=> toggle(i)}>
                        <h2>{item.question}</h2>
                      </div>
                        <div className={selected == i ? 'content show' : 'content'}>{item.answer}</div>
                    </div>

                ))}
            </div>
        </div>
        
    </>
  )
}

const data = [
    {
        question: 'NEWS',

        answer: 'Tony Cairoli shock, addio Ktm. Il futuro è in Ducati .Il pluricampione del motocross lascia la casa austriaca dopo sei titoli vinti da pilota e uno vinto quest anno da team manager. Lo attende l impegno a Borgo Panigale con il nuovo progetto cross e enduro. Nemmeno il tempo di festeggiare la vittoria all ultimo Rally Legend, che Tony Cairoli si mette al lavoro verso nuovi risvolti professionali. In queste ore è stato annunciato che il messinese e la Ktm hanno diviso le loro strade professionali in vista del 2024. È la fine di un era per il MX moderno, visto che Cairoli proprio con la casa austriaca ha edificato gran parte della sua leggendaria carriera. A fianco a lui starebbe arrivando anche Alessandro Lupino che ha a fine 2023 in scadenza il suo contratto con Beta, il pilota di Viterbo classe 1991 tra i migliori italiani del cross degli ultimi anni potrebbe dare un buon impulso alla crescita del progetto.',
    },
    {
       question: 'CONTACT',

       answer: 'Felice Francesco Florenzano Matr.332773 /  Nicholas Avena Matr.332775',
               
    },
    {
        question: 'ABOUT US',

        answer: 'Motorcycle Shop nasce dall idea di due ragazzi con la passione delle due ruote. In questa piccola realtà cerchiamo far entrare quante piu persone in questo mondo. Qui potete trovare articoli di ogni tipo inerenti al mondo motociclistico. Ci auguriamo che possiate trovare cio che desiderate al prezzo che volevate ',
    },
]
