import axios from "axios";

const todosPersonajes = async (state) => {
    const peticion = await axios.get(`https://swapi.dev/api/people`)
    state(peticion.data.results)
}

const unicoPersonaje = async (id) => {
    const peticion = await fetch(`https://swapi.dev/api/people/${id}/`)
    const data = peticion.json()
    return data
}

export {
    todosPersonajes,
    unicoPersonaje
}