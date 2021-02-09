import {useRouter} from 'next/router'
import {useEffect} from 'react'

import EntityList from '../../components/EntityList'
import PaginationControls from '../../components/PaginationControls'
import StarWarsAPI from '../../middleware/starwars'
import { People } from '../../types/starwars'

import styles from '../../styles/Entity.module.css'

export type PeopleProps = {
  allPeople: People[],
  count: number,
  hidePrev: boolean,
  hideNext: boolean,
  page: number
}

function PeopleIndexPage(props: PeopleProps) {
  const router = useRouter()
  const {allPeople, ...others} = props
  const pagProps = {pathname: router.pathname, ...others} 

  useEffect(() => {
    if (!router.query.page) {
      router.push(router.pathname + '/?page=1', undefined, { shallow: true })
    }
  }, [])
    
  return (
    <div className={styles.container}>
      <h1>Welcome to The list of people!</h1>
      <EntityList entities={allPeople}/>
      <PaginationControls {...pagProps}/>
    </div>
  )
}
export default PeopleIndexPage

export async function getServerSideProps({query: { page }}) {  
  page = page ? parseInt(page) : 1
  var result = await StarWarsAPI.getAllPeople(page)
  var { count, previous, next, results } =  result
  return { 
    props:  {
      page: page, 
      count: count, 
      hidePrev: !previous, 
      hideNext: !next, 
      allPeople: results 
    }
  }
}
