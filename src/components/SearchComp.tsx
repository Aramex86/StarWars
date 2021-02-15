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
import SelectedItem from "./SelectedItem";
import hero from "../assets/herostarwars.png";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(0),
        width: 100 + "%",
      },
      marginBottom: 25,
      marginTop: 10,
      "& .MuiInputBase-input": {
        fontSize: "1.5rem",
        color: "#fff",
        fontWeight: "bolder",
        textTransform: "capitalize",
        width: "100%",
        margin: 0,
      },
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "#fff !important",
        fontSize: "1.5rem",
        borderRadius: "100px",
      },
      "& .Mui-focused": {
        borderColor: "#fff !important",
        fontSize: "1.5rem",
        color: "#fff !important",
      },
      "& .MuiInputLabel-root": {
        color: "#fff !important",
        fontSize: "1.5rem",
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
      return { ...state, error: "action.error" };
    default:
      return state;
  }
};

const SearchComp = () => {
  const classes = useStyles();
  const [state, dispatch] = useReducer(reducer, initialState);
  const [values, setValue] = useState<string>("");
  const [info, setInfo] = useState(false);
  const [showResult, setShowResult] = useState(false);
  useEffect(() => {
    if (values.length > 3) {
      axios
        .get(`https://swapi.dev/api/people/?search=${values}`)
        .then((res) => {
          // if (res.data.count === 0) {
          //   dispatch({type:"Error"})
          // } else {
          dispatch({ type: "People", people: res.data.results });
          // }
        })
        .catch((error) => dispatch({ type: "Error", error: error }));

      axios
        .get(`https://swapi.dev/api/films/?serarch=${values}`)
        .then((res) => {
          // if (res.data.count === 0) {
          //   dispatch({type:"Error"})
          // } else {
          dispatch({ type: "Films", films: res.data.results });
          // }
        })
        .catch((error) => dispatch({ type: "Error", error: error }));
      axios
        .get(`https://swapi.dev/api/planets/?search=${values}`)
        .then((res) => {
          // if (res.data.count === 0) {
          //   dispatch({type:"Error"})
          // } else {
          dispatch({ type: "Planets", planets: res.data.results });
          // }
        })
        .catch((error) => dispatch({ type: "Error", error: error }));

      axios
        .get(`https://swapi.dev/api/species/?search=${values}`)
        .then((res) => {
          // if (res.data.count === 0) {
          //   dispatch({type:"Error"})
          // } else {
          dispatch({ type: "Species", species: res.data.results });
          // }
        })
        .catch((error) => dispatch({ type: "Error", error: error }));

      axios
        .get(`https://swapi.dev/api/starships/?search=${values}`)
        .then((res) => {
          // if (res.data.count === 0) {
          //   dispatch({type:"Error"})
          // } else {
          dispatch({ type: "Starships", starships: res.data.results });
          // }
        })
        .catch((error) => dispatch({ type: "Error", error: error }));

      axios
        .get(`https://swapi.dev/api/vehicles/?search=${values}`)
        .then((res) => {
          // if (res.data.count === 0) {
          //   dispatch({type:"Error"})
          // } else {
          dispatch({ type: "Vehicle", vehicles: res.data.results });
          // }
        })
        .catch((error) => dispatch({ type: "Error", error: error }));
    }
  }, [values]);

  const handaleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
    if (event.currentTarget.value === "") {
      setInfo(false);
      setShowResult(false);
    } else {
      setShowResult(true);
    }
  };

  const handleInfo = () => {
    setInfo(true);
  };

  const handleClose = () => {
    setValue("");
    setInfo(false);
    setShowResult(false);
  };

  return (
    <div className="searchwrap">
      <img src={hero} alt="hero" />
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          label="Search for Star Heroes..."
          id="outlined-size-small"
          value={values}
          placeholder="Search for Star Heroes..."
          variant="outlined"
          size="small"
          onChange={handaleChange}
          className={classes.root}
        />
      </form>
      {info ? (
        <SelectedItem
          films={state.films}
          people={state.people}
          planets={state.planets}
          species={state.species}
          starships={state.starships}
          vehicles={state.vehicles}
          handleClose={handleClose}
        />
      ) : (
        <SearchResults
          searchValue={values}
          films={state.films}
          people={state.people}
          planets={state.planets}
          species={state.species}
          starships={state.starships}
          vehicles={state.vehicles}
          state={state}
          handleInfo={handleInfo}
          showResult={showResult}
          error={state.error}
        />
      )}
    </div>
  );
};

export default SearchComp;
