import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"


export default function Prodotto(){

    const {id}=useParams()
    const navigate = useNavigate()
    const [prodotto, setProdotto] = useState([])
    
    function fetchProdotto(){
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then((r) => {

                if(!r.data || !r.data.id){
                    navigate("/Prodotti")
                    return
                }

                setProdotto(r.data)
                console.log(r.data)
            })
            .catch(err => {
                if (err.response && err.response.status === 404) {
                    navigate("/Errore404")
                    return
                }
            })
    }

    useEffect(fetchProdotto,[id])

    return(
        <>
        <div className="card">
            <img className="card-img-top" src={prodotto.img} alt="Card image cap"/>
            <div className="card-body">
                <h1>{prodotto.title}</h1>
                <p className="card-text">{prodotto.description}</p>
            </div>
        </div>
        <button onClick={() => navigate(`/Prodotti/${prodotto.id - 1}`)}>Indietro</button>
        <button onClick={() => navigate(`/Prodotti/${prodotto.id + 1}`)}>Avanti</button>
        </>
    )
}