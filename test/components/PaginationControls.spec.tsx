import { render, waitFor, screen } from '@testing-library/react'
import * as fs from 'fs'
import * as path from 'path'
import '@testing-library/jest-dom'

import PaginationControls, {PageInfoProps} from '../../src/components/PaginationControls'

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


describe('PaginationControls', function() {
  test('First page', async () => {
    const props = loadProps("./pagination-controls-props-first-page.json")
  
    render(<PaginationControls {...props} />)
  
    await waitFor(() => screen.getAllByRole('button'))
    
    const prevButton = screen.getByText('Prev')
    const nextButton = screen.getByText('Next')
    
    expect(prevButton).toBeDisabled()
    expect(nextButton).not.toBeDisabled()
    expect(mockPush).not.toBeCalled()    
    nextButton.click()
    expect(mockPush).toBeCalledWith('/people?page=2')

  })

  test('Middle page', async () => {
    const props = loadProps("./pagination-controls-props-middle-page.json")
  
    render(<PaginationControls {...props} />)
  
    await waitFor(() => screen.getAllByRole('button'))
    
    const prevButton = screen.getByText('Prev')
    const nextButton = screen.getByText('Next')
    
    expect(prevButton).not.toBeDisabled()
    expect(nextButton).not.toBeDisabled()
  })
  
  test('Last page', async () => {
    const props = loadProps("./pagination-controls-props-last-page.json")
  
    render(<PaginationControls {...props} />)
  
    await waitFor(() => screen.getAllByRole('button'))
    
    const prevButton = screen.getByText('Prev')
    const nextButton = screen.getByText('Next')
    
    expect(prevButton).not.toBeDisabled()
    expect(nextButton).toBeDisabled()
    expect(mockPush).not.toBeCalled()
    
    prevButton.click()
    
    expect(mockPush).toBeCalledWith('/species?page=3')
  })

  const loadProps = (filename: string) : PageInfoProps =>  {
    const filePath = path.resolve(__dirname, filename) 
    const data = fs.readFileSync(filePath, 'utf8')
    var props: PageInfoProps = JSON.parse(data);
    return props 
  }
})