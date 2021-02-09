jest.mock('axios')
import axios from 'axios'

import StarWarsAPI from '../../src/middleware/starwars'
import {People} from '../../src/types/starwars'

describe('StarWarsAPI', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });
  it('should getPeople ', async () => {
    const mockPeople = { name: 'Test person' }
    const mockResponse = {data: mockPeople }
    axios.get = jest.fn().mockResolvedValue(mockResponse);
    const data :People = await StarWarsAPI.getPeople(1);
    expect(data).toEqual(mockPeople);
    expect(axios.get).toBeCalledWith('https://swapi.dev/api/people/1/');
  });

  it(' should getAllPeople ', async () => {
    const mockPeople = [{ name: 'Test person1'},{ name: 'Test person2'}];
    const mockResponse = {data: mockPeople }
    axios.get = jest.fn().mockReturnValue(mockResponse);
    const data = await StarWarsAPI.getAllPeople(1);
    
    expect(data).toEqual(mockPeople);
    expect(axios.get).toBeCalledWith('https://swapi.dev/api/people/?page=1');
  });

  it('should getPeople error', async () => {
    const error = new Error('unit test error')
    axios.get = jest.fn().mockRejectedValue(error);
    const data :People = await StarWarsAPI.getPeople(1);
    expect(data).toBeFalsy
    expect(axios.get).toBeCalledWith('https://swapi.dev/api/people/1/');
  });

  it(' should getAllPeople error', async () => {
    const error = new Error('unit test error')
    axios.get = jest.fn().mockRejectedValue(error);
    const data = await StarWarsAPI.getAllPeople(1);    
    expect(data).toBeFalsy
    expect(axios.get).toBeCalledWith('https://swapi.dev/api/people/?page=1');
  });

});