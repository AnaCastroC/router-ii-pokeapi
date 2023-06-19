//componente que nos ayuda a realizar peticiones a la API

import { useState, useEffect, useCallback} from "react";

 export const useFetch = (url) => {

 //estados para controlar la peticion
const [data, setData] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

//funcion que se ejecuta cuando se monta el componente
const getData = useCallback(async () => {
    setLoading(true);
    try {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
        setLoading(false);
    } catch (error) {
        setLoading(false);
        setError(error);
    } finally {
        setLoading(false);
    }   
}, [url]);

//se ejecuta cuando se monta el componente
useEffect(() => {
    getData();
}, [getData]);

return {data, loading, error};


 }