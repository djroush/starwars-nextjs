import axios from 'axios'
import { People, Planet, Species, Response } from '../types/starwars'

const BASE_URL = 'https://swapi.dev/api'

const StarWars = {
  getAllPeople: async (page: number): Promise<Response> => { 
    try {
      const res = await axios.get(`${BASE_URL}/people/?page=${page}`)
      return res.data
    } catch (e) {
      console.log("error getting people for page: " + page)
      console.error(e)
    }
  },
  
   getPeople: async (id: number): Promise<People> => {
    try {
      const res = await axios.get(`${BASE_URL}/people/${id}/`)
      return res.data
    } catch (e) {
      console.log("error getting people for id: " + id)
      console.error(e)
    }
  },
  
  getAllPlanets: async (page: number): Promise<Response> => { 
    try {
      const res = await axios.get(`${BASE_URL}/planets/?page=${page}`)
      return res.data
    } catch (e) {
      console.log("error getting planets for page: " + page)
      console.error(e)
    }
  },

  getPlanet: async (id: number): Promise<Planet> => {
    try {
      const res = await axios.get(`${BASE_URL}/planets/${id}/`)
      return res.data
    } catch (e) {
      console.log("error getting planets for id: " + id)
      console.error(e)
    }
  },

  getAllSpecies: async (page: number): Promise<Response> => { 
    try {
      const res = await axios.get(`${BASE_URL}/species/?page=${page}`)
      return res.data
    } catch (e) {
      console.log("error getting species for page: " + page)
      console.error(e)
    }
  },

  getSpecies: async (id: number): Promise<Species> => {
    try {
      const res = await axios.get(`${BASE_URL}/species/${id}/`)
      return res.data
    } catch (e) {
      console.error(e)
    }
  }
}

export default StarWars