import React, { FC } from "react";
import {
  FilmsType,
  PeopleType,
  PlanetsType,
  SpeciesType,
  StarshipsType,
  VehiclesType,
} from "../types/types";

type PropsType = {
  searchValue: string;
  films: Array<FilmsType>;
  people: Array<PeopleType>;
  planets: Array<PlanetsType>;
  species: Array<SpeciesType>;
  starships: Array<StarshipsType>;
  vehicles: Array<VehiclesType>;
  state: any;
};
const SearchResults: FC<PropsType> = ({
  searchValue,
  films,
  people,
  planets,
  species,
  starships,
  vehicles,
  state = [],
}) => {
  return (
    <div className="resulstwrapper">
      <div className="resulstwrapper__left">{searchValue}</div>
      <div className="resulstwrapper__right">
        <ul className="categorylist">
          <li className="categorylist__item">{}</li>
          {/* <li className="categorylist__item">{people}</li>
              <li className="categorylist__item">{planets}</li>
              <li className="categorylist__item">{species}</li>
              <li className="categorylist__item">{starships}</li>
              <li className="categorylist__item">{vehicles}</li> */}
        </ul>
      </div>
    </div>
  );
};

export default SearchResults;
