import { useState } from "react";

export const UsePersonajes = () => {
  const [personajes, setPersonajes] = useState([]);
  const [Contador, setContador] = useState(1);

  const dismin = () => {
    if (Contador <= 1) {
      setContador(1);
    } else {
      setContador(Contador - 1);
    }
  };
  const aumen = () => {
    if (Contador < 9) {
      setContador(Contador + 1);
    } else {
      setContador(9);
    }
  };

  const getAllPersonaje = async (numberPage) => {
    try {
      var requestOptions = {
        method: "GET",
        redirect: "follow",
      };
      await fetch(
        `https://swapi.dev/api/people/?page=${numberPage}`,
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => setPersonajes(result.results))
        .catch((error) => console.log("error", error));
    } catch (error) {
      console.log(error);
    }
  };
  
  return {
    getAllPersonaje,
    personajes,
    Contador,
    aumen,
    dismin,
  };
};
