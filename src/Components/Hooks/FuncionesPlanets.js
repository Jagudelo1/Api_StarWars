import axios from "axios";

const todosPlanetas = async (state) => {
    const peticion = await axios.get(`https://swapi.dev/api/planets`)
    state(peticion.data.results)
}

const unicoPlaneta = async (id) => {
    const peticion = await fetch(`https://swapi.dev/api/planets/${id}/`)
    const dato = peticion.json()
    return dato
}

export {
    todosPlanetas,
    unicoPlaneta
}