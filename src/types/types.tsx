export type PeopleType = {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films?: string[];
  species?: any[];
  vehicles: string[];
  starships?: string[];
  created?: Date;
  edited?: Date;
  url?: string;
};
export type FilmsType = {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: Date;
  characters: string[];
  planets: string[];
  starships?: string[];
  vehicles: string[];
  species?: string[];
  created?: Date;
  edited?: Date;
  url?: string;
};

export type StarshipsType = {
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
  pilots: any[];
  films?: string[];
  created?: Date;
  edited?: Date;
  url?: string;
};

export type VehiclesType = {
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
  vehicle_class: string;
  pilots: string[];
  films?: string[];
  created?: Date;
  edited?: Date;
  url?: string;
};

export type SpeciesType = {
  name: string;
  classification: string;
  designation: string;
  average_height: string;
  skin_colors: string;
  hair_colors: string;
  eye_colors: string;
  average_lifespan: string;
  homeworld: string;
  language: string;
  people: string[];
  films?: string[];
  created?: Date;
  edited?: Date;
  url?: string;
};

export type PlanetsType = {
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
  films?: string[];
  created?: Date;
  edited?: Date;
  url?: string;
};
