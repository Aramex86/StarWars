import React, { FC } from "react";
import {
  FilmsType,
  PeopleType,
  PlanetsType,
  SpeciesType,
  StarshipsType,
  VehiclesType,
} from "../types/types";

import { BiFilm } from "react-icons/bi";
import { SiMyspace } from "react-icons/si";
import { BiPlanet } from "react-icons/bi";
import { GiSeaCreature } from "react-icons/gi";
import { FaSpaceShuttle } from "react-icons/fa";
import { GiSpaceship } from "react-icons/gi";

type PropsType = {
  searchValue: string;
  films: Array<FilmsType>;
  people: Array<PeopleType>;
  planets: Array<PlanetsType>;
  species: Array<SpeciesType>;
  starships: Array<StarshipsType>;
  vehicles: Array<VehiclesType>;
  state: any;
  handleInfo: () => void;
};
const SearchResults: FC<PropsType> = ({
  searchValue,
  films,
  people,
  planets,
  species,
  starships,
  vehicles,
  state,
  handleInfo,
}) => {
  const categoriesNames = () => {
    return Object.keys(state).slice(0, 5);
  };
  categoriesNames();

  return (
    <div className="resulstwrapper">
      <div className="resulstwrapper__left" onClick={handleInfo}>
        {searchValue}
      </div>
      <div className="resulstwrapper__right">
        <ul className="categorylist">
          {films.length !== 0 && searchValue.length > 3 ? (
            <li className="categorylist__item">
              <BiFilm /> {categoriesNames().slice(0, 1)}
            </li>
          ) : (
            ""
          )}

          {people.length !== 0 && searchValue.length > 3 ? (
            <li className="categorylist__item">
              <SiMyspace />
              {categoriesNames().slice(1, 2)}
            </li>
          ) : (
            ""
          )}

          {planets.length !== 0 && searchValue.length > 3 ? (
            <li className="categorylist__item">
              <BiPlanet /> {categoriesNames().slice(2, 3)}
            </li>
          ) : (
            ""
          )}

          {species.length !== 0 && searchValue.length > 3 ? (
            <li className="categorylist__item">
              <GiSeaCreature /> {categoriesNames().slice(3, 4)}
            </li>
          ) : (
            ""
          )}

          {starships.length !== 0 && searchValue.length > 3 ? (
            <li className="categorylist__item">
              <FaSpaceShuttle /> {categoriesNames().slice(4, 5)}
            </li>
          ) : (
            ""
          )}

          {vehicles.length !== 0 && searchValue.length > 3 ? (
            <li className="categorylist__item">
              <GiSpaceship /> {categoriesNames().slice(5, 6)}
            </li>
          ) : (
            ""
          )}
        </ul>
      </div>
    </div>
  );
};

export default SearchResults;
