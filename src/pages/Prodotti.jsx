import { useState, useEffect } from "react"
import axios from "axios"

export default function Prodotti(){
    
    const [prodotti, setProdotti] = useState([])
    
    function fetchProdotti(){
        axios.get("https://fakestoreapi.com/products")
            .then((r) => {
                setProdotti(r.data)
                console.log(r.data)
    })
    }

    useEffect(fetchProdotti,[])

    return(
        <>
            <h2 className="text-center">Prodotti</h2>
            <p className="text-center">Una lista dei nostri prodotti disponibili:</p>
            <ul>
                {prodotti.map((prodotto) => (
                    <li key={prodotto.id}>{prodotto.title}</li>
                ))}
            </ul>
        </>
    )
}