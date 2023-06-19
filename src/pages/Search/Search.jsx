// componente que muestra la busqueda de pokemones
import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Search = () => {
    const {data, loading, error} = useFetch('https://pokeapi.co/api/v2/pokemon');//se llama a la Api de pokemon desde el hook useFetch
    const [selectedPokemon, setSelectedPokemon] = useState(null); //se crea un estado para controlar el pokemon seleccionado
    console.log(data); //se imprime en consola la data de la API
    const navigate = useNavigate(); //se crea una constante para navegar entre las paginas

    //funcion que se ejecuta cuando se selecciona un pokemon a través del select
    const handleClick = () => {
        navigate(`/search/${selectedPokemon}`); 
        console.log(selectedPokemon); //se imprime en consola el pokemon seleccionado
    }
  return (
    <div className='container'>
        <h1>Select a Pokemon</h1>
        <div className='row'>
            <div className='col-12'>
                {loading && ( //si loading es true se muestra el spinner
                    <div className='spinner-border text primary'> 
                     <span className='viasualy-hidden'>Loading...</span>
                    </div>
                )}
                {error && ( //si error es true se muestra el mensaje de error
                    <div className='alert alert-danger' role='alert'>
                        {error.message}
                    </div>
                )

                }
                {data && ( //si data es true se muestra el select
                    <div className='input-group mb-3'> 
                        <select className='form-select' onChange={(e) => setSelectedPokemon(e.target.value)}> 
                            <option value=''>Select a Pokemon</option>
                            {data.results.map((pokemon) => ( 
                                <option key={pokemon.name} value={pokemon.name}>{pokemon.name}</option> //se muestran los nombres de los pokemones en el select 
                            ))}         
                        </select> 
                    {selectedPokemon && (
                        <button className='btn btn-dark' type='button' onClick={handleClick}>Review details</button> //si se selecciona un pokemon se muestra el boton de search
                    )}
                    </div>
                )}
            </div>
        </div>
    </div>
  )
}

export default Search
