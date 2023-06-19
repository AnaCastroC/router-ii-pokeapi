import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import './SearchDetails.css'

const SearchDetails = () => {
const params = useParams(); // params es un objeto que contiene los parametros de la url
const navigate = useNavigate(); //se crea una constante para navegar entre las paginas
const {data, loading, error} = useFetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`); //se llama a la Api de pokemon desde el hook useFetch
console.log(data); //se imprime en consola la data de la API

  return (
    <div className='container'>
        {data && ( //si data es true se muestra la informacion del pokemon
            <div className='row content'>
                <div className='col-12'>
                    <h1>{data.name}</h1>
                    <img className='img' src={data.sprites.front_default} alt={data.name} />
                    <p>Height: {data.height}</p>
                    <p>Weight: {data.weight}</p>
                    <p>Base experience: {data.base_experience}</p>
                    <p>Abilities: {data.abilities.map((ability) => ( //se muestran las habilidades del pokemon
                        <span key={ability.ability.name}>{ability.ability.name}</span>
                    ))}</p>
                    <button className='btn btn-dark' type='button' onClick={() => navigate('/search')}>Back</button> {/*si se selecciona un pokemon se muestra el boton de back*/}
                </div>
            </div>
        )}
        {error && ( //si error es true se muestra el mensaje de error
            <div className='alert alert-danger' role='alert'>
                {error.message}
            </div>
        )}
        {loading && ( //si loading es true se muestra el spinner
            <div className='spinner-border text primary'>
                <span className='viasualy-hidden'>Loading...</span>
            </div>
        )}
    </div>
  )
}

export default SearchDetails