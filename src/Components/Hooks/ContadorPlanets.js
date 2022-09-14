import { useState } from "react";

export const UsePlanetas = () => {
  const [planetas, setPlanetas] = useState([]);
  const [Contador, setContador] = useState(1);

  const dismin = () => {
    if (Contador <= 1) {
      setContador(1);
    } else {
      setContador(Contador - 1);
    }
  };
  const aumen = () => {
    if (Contador < 6) {
      setContador(Contador + 1);
    } else {
      setContador(6);
    }
  };

  const getAllPlanetas = async (numberPage) => {
    try {
      var requestOptions = {
        method: "GET",
        redirect: "follow",
      };
      await fetch(
        `https://swapi.dev/api/planets/?page=${numberPage}`,
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => setPlanetas(result.results))
        .catch((error) => console.log("error", error));
    } catch (error) {
      console.log(error);
    }
  };

  return {
    getAllPlanetas,
    planetas,
    Contador,
    aumen,
    dismin,
  };
};
