import { render, waitFor, screen } from '@testing-library/react'
import * as fs from 'fs'
import * as path from 'path'
import '@testing-library/jest-dom'

import PeopleId, {PeopleIdProps} from '../../../src/pages/people/[id]'

const mockPush = jest.fn()
const useRouter = jest.spyOn(require('next/router'), 'useRouter')
useRouter.mockImplementation(() => ({
  pathname: '/people', 
  query: { page: 1},
  push: mockPush,
  prefetch: new Promise((_res, _rej) => {}),
}))
jest.mock("next/link", () => {
  return ({children}) => {
      return children;
  }
});

beforeEach(() => {
  jest.clearAllMocks()
})


describe('PeopleIdPage', function() {
  test('Darth Vader', async () => {
    const props = loadProps("./people-4.json")
  
    render(<PeopleId {...props} />)
    await waitFor(() => screen.getAllByRole('button'))

    expect(screen.getByText('Name:')).toBeDefined()
    expect(screen.getByText('Height:')).toBeDefined()    
    expect(screen.getByText('Mass:')).toBeDefined()
    expect(screen.getByText('Hair color:')).toBeDefined()
    expect(screen.getByText('Skin color:')).toBeDefined()
    expect(screen.getByText('Eye color:')).toBeDefined()
    expect(screen.getByText('Birth year:')).toBeDefined()
    expect(screen.getByText('Gender:')).toBeDefined()
    expect(screen.getByText('Go back')).toBeEnabled()
  })

  const loadProps = (filename: string) : PeopleIdProps =>  {
    const filePath = path.resolve(__dirname, filename) 
    const data = fs.readFileSync(filePath, 'utf8')
    var props: PeopleIdProps = JSON.parse(data);
    return props 
  }
})