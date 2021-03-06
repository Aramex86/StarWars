import React, { FC, useState } from "react";
import {
  FilmsType,
  PeopleType,
  PlanetsType,
  SpeciesType,
  StarshipsType,
  VehiclesType,
} from "../types/types";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import { FaRegWindowClose } from "react-icons/fa";
import { useEffect } from "react";
import axios from "axios";
import { TableHead } from "@material-ui/core";

type PropsType = {
  films: Array<FilmsType>;
  people: Array<PeopleType>;
  planets: Array<PlanetsType>;
  species: Array<SpeciesType>;
  starships: Array<StarshipsType>;
  vehicles: Array<VehiclesType>;
  handleClose: () => void;
};

type HomeType = {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: string[];
  films: string[];
  created: Date;
  edited: Date;
  url: string;
};

type ShipType = {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  consumables: string;
  hyperdrive_rating: string;
  MGLT: string;
  starship_class: string;
  pilots: string[];
  films: string[];
  created: Date;
  edited: Date;
  url: string;
};

const useStyles = makeStyles({
  table: {
    minWidth: 500,
    background: "#ffffffe3",
  },
  tableCell: {
    fontSize: "1.6rem",
  },
});

const SelectedItem: FC<PropsType> = ({
  films,
  people,
  planets,
  species,
  starships,
  vehicles,
  handleClose,
}) => {
  const classes = useStyles();
  const [home, setHome] = useState<HomeType>();
  const [ship, setShip] = useState<ShipType>();
  const [races, setRaces] = useState<SpeciesType>();
  const [...film] = films;
  const [person] = people;
  const [planet] = planets;
  const [specie] = species;
  const [starship] = starships;
  const [vehicle] = vehicles;
  const allObject = {
    ...person,
    ...planet,
    ...specie,
    ...starship,
    ...vehicle,
  };
  const regex = /\d+/g;
  const homeworld = allObject.homeworld ? person.homeworld : null;
  const homeworldMatch = Number(homeworld?.match(regex));
  const personStarship = allObject.starships ? person.starships : null;
  const starshipsMatch = personStarship?.map((s) => Number(s.match(regex)));
  const race = species.map((r) => Number(r.url?.match(regex)));

  allObject.homeworld = home ? home.name : "";

  delete allObject.url;
  delete allObject.films;
  delete allObject.created;
  delete allObject.edited;
  delete allObject.starships;
  delete allObject.species;
  useEffect(() => {
    const fetchPlanet = async () => {
      if (people.length > 0) {
        const res = await axios
          .get(`http://swapi.dev/api/planets/${homeworldMatch}`)
          .then((response) => {
            return response.data;
          });
        setHome(res);
      }
    };
    const fetchStarship = async () => {
      const res = await axios
        .get(`http://swapi.dev/api/starships/${starshipsMatch}`)
        .then((response) => {
          return response.data;
        });
      setShip(res);
    };
    const fetchSpecies = async () => {
      const res = await axios
        .get(`http://swapi.dev/api/species/${race}`)
        .then((response) => {
          return response.data;
        });
      setRaces(res);
    };
    fetchPlanet();
    fetchStarship();
    fetchSpecies();
  }, [homeworldMatch,people.length,race,starshipsMatch]);

  const keyValue = Object.entries(allObject).map(([key, value]) => {
    const keyToCapitalize = key.charAt(0).toUpperCase() + key.slice(1);
    const removeUnderScore = keyToCapitalize.replace("_", " ");
    return (
        <TableRow key={key}>
          <TableCell className={classes.tableCell}>
            {removeUnderScore}:
          </TableCell>
          <TableCell className={classes.tableCell}>
            {" "}
            {value?.toString()}
          </TableCell>
        </TableRow>
    );
  });

  return (
    <div className="objectwrap">
      <div className="objectwrap__heading">
        <h1>Info Card</h1>
        <button className="objectwrap__btn" onClick={handleClose}>
          <FaRegWindowClose />
        </button>
      </div>
      <TableContainer>
        <Table className={classes.table}>
          <TableHead></TableHead>
          <TableBody>
            {keyValue}
            <TableRow>
            <TableCell className={classes.tableCell}>Films:</TableCell>
            <TableCell className={classes.tableCell}>
              {films.map((f) => (
                <span key={f.episode_id}>{`${f.title}`}, </span>
              ))}
            </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.tableCell}>Starships:</TableCell>
              <TableCell className={classes.tableCell}>{ship?.model}</TableCell>
              </TableRow>
              {race.length === 0 ? (
               null
                ) : (
                  <TableRow>
                  <TableCell className={classes.tableCell}>Species:</TableCell>
                  <TableCell className={classes.tableCell}>
                    {races?.name}
                  </TableCell>
                </TableRow>
              )}
              </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default SelectedItem;
