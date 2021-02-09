export type Response = {
  count: number,
  next: string,
  previous: string,
  results: Entity[]
}

export type Entity = {
 name: string, 
/*
 films: string[],
 created: string,
 edited: string,
 */
 url: string
}

export type People = Entity & {
  height: string, 
  mass: string, 
  hair_color: string, 
  skin_color: string, 
  eye_color: string, 
  birth_year: string, 
  gender: string, 
  homeworld: string, 
/*
  species: string[], 
  vehicles: string[], 
  starships: string[], 
*/
}

export type Planet = Entity & {
  rotation_period: string, 
  obrital_period: string, 
  diameter: string, 
  climate: string,
  gravity: string,
  terrain: string,
  surface_water: string, 
  population: string, 
/*
  residents: string[], 
*/
}

export type Species = Entity & {
  classification: string,
  designation: string,
  average_height: string,
  skin_colors: string,
  hair_colors: string,
  eye_colors: string,
  average_lifespan: string,
  homeworld: string,
  language: string,
/*
  people: string[],
*/  
}

