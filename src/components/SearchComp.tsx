import React, { useEffect, useReducer, useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import {
  FilmsType,
  PeopleType,
  PlanetsType,
  SpeciesType,
  StarshipsType,
  VehiclesType,
} from "../types/types";
import axios from "axios";
import SearchResults from "./SearchResults";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        width: 600,
      },
    },
  })
);

const initialState = {
  films: [] as Array<FilmsType>,
  people: [] as Array<PeopleType>,
  planets: [] as Array<PlanetsType>,
  species: [] as Array<SpeciesType>,
  starships: [] as Array<StarshipsType>,
  vehicles: [] as Array<VehiclesType>,
  loading: true as boolean,
  error: "" as string,
};

type initialStateType = typeof initialState;

const reducer = (state: initialStateType = initialState, action: any) => {
  switch (action.type) {
    case "Films":
      return {
        ...state,
        loading: false,
        films: action.films,
      };
    case "People":
      return { ...state, people: action.people };
    case "Planets":
      return { ...state, planets: action.planets };
    case "Species":
      return { ...state, species: action.species };
    case "Starships":
      return { ...state, starships: action.starships };
    case "Vehicle":
      return { ...state, vehicles: action.vehicles };
    case "Error":
      return { ...state, error: action.error };
    default:
      return state;
  }
};

const SearchComp = () => {
  const classes = useStyles();
  const [state, dispatch] = useReducer(reducer, initialState);
  const [values, setValue] = useState<string>("han solo");

  console.log(state);

  useEffect(() => {
    if (values.length >= 3) {
      axios
        .get(`https://swapi.dev/api/films/?serarch=${values}`)
        .then((res) => dispatch({ type: "Films", films: res.data.results }))
        .catch((error) => dispatch({ type: "Error", error: error }));
      axios
        .get(`https://swapi.dev/api/people/?search=${values}`)
        .then((res) => dispatch({ type: "People", people: res.data.results }))
        .catch((error) => dispatch({ type: "Error", error: error }));
      axios
        .get(`https://swapi.dev/api/planets/?search=${values}`)
        .then((res) => dispatch({ type: "Planets", planets: res.data.results }))
        .catch((error) => dispatch({ type: "Error", error: error }));
      axios
        .get(`https://swapi.dev/api/species/?search=${values}`)
        .then((res) => dispatch({ type: "Species", species: res.data.results }))
        .catch((error) => dispatch({ type: "Error", error: error }));
      axios
        .get(`https://swapi.dev/api/starships/?search=${values}`)
        .then((res) =>
          dispatch({ type: "Starships", starships: res.data.results })
        )
        .catch((error) => dispatch({ type: "Error", error: error }));
      axios
        .get(`https://swapi.dev/api/vehicles/?search=${values}`)
        .then((res) =>
          dispatch({ type: "Vehicle", vehicles: res.data.results })
        )
        .catch((error) => dispatch({ type: "Error", error: error }));
    }
  }, [values]);

  const handaleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
  };

  return (
    <div>
      <h1>Search comp</h1>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          label="Search for Star Heroes..."
          id="outlined-size-small"
          defaultValue={values}
          placeholder="Search for Star Heroes..."
          variant="outlined"
          size="small"
          onChange={handaleChange}
          inputProps={{
            style: { textTransform: "capitalize", fontWeight: "bolder" },
          }}
        />
      </form>
      <SearchResults
        searchValue={values}
        films={state.films}
        people={state.people}
        planets={state.planets}
        species={state.species}
        starships={state.starships}
        vehicles={state.vehicles}
        state={state}
      />
    </div>
  );
};

export default SearchComp;
