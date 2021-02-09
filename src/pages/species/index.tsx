import {useRouter} from 'next/router'
import {useEffect} from 'react'

import PaginationControls from '../../components/PaginationControls'
import EntityList from '../../components/EntityList'
import StarWarsAPI from '../../middleware/starwars'
import { Species } from '../../types/starwars'

import styles from '../../styles/Entity.module.css'

type SpeciesProps = {
  allSpecies: Species[],
  count: number,
  hidePrev: boolean,
  hideNext: boolean,
  page: number
}

function SpeciesIndexPage(props: SpeciesProps) {
  const router = useRouter()
  const {allSpecies, ...others} = props
  const pagProps = {pathname: router.pathname, ...others} 

  useEffect(() => {
    if (!router.query.page) {
      router.push(router.pathname + '/?page=1', undefined, { shallow: true })
    }
  }, [])

  return (
    <div className={styles.container}>
      <h1>Welcome to The list of species!</h1>
      <EntityList entities={allSpecies}/>
      <PaginationControls {...pagProps}/>
    </div>
  )
}
export default SpeciesIndexPage

export async function getServerSideProps({query: { page }}) {  
  page = page ? parseInt(page) : 1
  var result = await StarWarsAPI.getAllSpecies(page)
  var { count, previous, next, results } =  result
  return { 
    props:  {
      page: page, 
      count: count, 
      hidePrev: !previous, 
      hideNext: !next, 
      allSpecies: results 
    }
  }
}
