import {useRouter} from 'next/router'
import {useEffect} from 'react'

import EntityList from '../../components/EntityList'
import PaginationControls from '../../components/PaginationControls'

import StarWarsAPI from '../../middleware/starwars'
import { Planet } from '../../types/starwars'

import styles from '../../styles/Entity.module.css'

type PlanetsProps = {
  allPlanets: Planet[],
  count: number,
  hidePrev: boolean,
  hideNext: boolean,
  page: number
}

function PlanetsIndexPage(props: PlanetsProps) {
  const router = useRouter()
  const {allPlanets, ...others} = props
  const pagProps = {pathname: router.pathname, ...others} 

  useEffect(() => {
    if (!router.query.page) {
      router.push(router.pathname + '/?page=1', undefined, { shallow: true })
    }
  }, [])
  
  return (
    <div className={styles.container}>
      <h1>Welcome to The list of planets!</h1>
      <EntityList entities={allPlanets}/>
      <PaginationControls {...pagProps}/>
    </div>
  )
}
export default PlanetsIndexPage

export async function getServerSideProps({query: { page }}) {  
  page = page ? parseInt(page) : 1
  var result = await StarWarsAPI.getAllPlanets(page)
  var { count, previous, next, results } =  result
  return { 
    props:  {
      page: page, 
      count: count, 
      hidePrev: !previous, 
      hideNext: !next, 
      allPlanets: results 
    }
  }
}
