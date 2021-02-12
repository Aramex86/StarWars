import React, { FC } from "react";
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
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

type PropsType = {
  films: Array<FilmsType>;
  people: Array<PeopleType>;
  planets: Array<PlanetsType>;
  species: Array<SpeciesType>;
  starships: Array<StarshipsType>;
  vehicles: Array<VehiclesType>;
};

const useStyles = makeStyles({
  table: {
    minWidth: 400,
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
}) => {
  const classes = useStyles();

  const [...film] = films;
  const [person] = people;
  const [planet] = planets;
  const [specie] = species;
  const [starship] = starships;
  const [vehicle] = vehicles;

  const allObject = [
    {
      film,
      ...person,
      ...planet,
      ...specie,
      ...starship,
      vehicle,
    },
  ];
  console.log("----person---");
  console.log(person);
  console.log("----film---");
  console.log(film);
  console.log("----X---");
  console.log(allObject);

  return (
    <div className="objectwrap">
      <TableContainer component={Paper}>
        <Table
          className={classes.table}
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableCell}>Description</TableCell>
            </TableRow>
          </TableHead>
              {allObject.map(item=>
          <TableBody>
            <TableRow>
              <TableCell
                component="th"
                scope="row"
                className={classes.tableCell}
              >
                Name
              </TableCell>
              <TableCell className={classes.tableCell}>
                {item.name}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.tableCell}>Birth year</TableCell>
              <TableCell className={classes.tableCell}>
                {item.birth_year}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.tableCell}>Eye color</TableCell>
              <TableCell className={classes.tableCell}>
                {item.eye_color}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.tableCell}>Gender</TableCell>
              <TableCell className={classes.tableCell}>
                {item.gender}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.tableCell}>Hair color</TableCell>
              <TableCell className={classes.tableCell}>
                {item.hair_color}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.tableCell}>Height</TableCell>
              <TableCell className={classes.tableCell}>
                {item.height}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.tableCell}>Skin color</TableCell>
              <TableCell className={classes.tableCell}>
                {item.skin_color}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.tableCell}>Mass</TableCell>
              <TableCell className={classes.tableCell}>
                {item.mass}
              </TableCell>
            </TableRow>
          </TableBody>
            )}
        </Table>
      </TableContainer>
    </div>
  );
};

export default SelectedItem;
// homeworld: "http://swapi.dev/api/planets/22/"
// mass: "80"
// species: []
// starships: (2) ["http://swapi.dev/api/starships/10/", "http://swapi.dev/api/starships/22/"]
// url: "http://swapi.dev/api/people/14/"
// vehicles: []
