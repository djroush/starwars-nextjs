import {useRouter} from 'next/router'

import { People } from '../../types/starwars'
import StarWarsAPI from '../../middleware/starwars'

import styles from '../../styles/EntityId.module.css'

export type PeopleIdProps = {
  people: People
}

function PeopleIdPage(props: PeopleIdProps) {
  const router = useRouter()
  const { people } = props
   
  return (
    <div className={styles.container}>
      <div className={styles.content}>
       {people.name &&
        <span><label>Name:</label> {people.name}</span>
       }
       {people.height && 
        <span><label>Height:</label> {people.height}</span>
       }
       {people.mass && 
        <span><label>Mass:</label> {people.mass}</span>
       }
       {people.hair_color &&
        <span><label>Hair color:</label> {people.hair_color}</span>
       }
       {people.skin_color &&
        <span><label>Skin color:</label> {people.skin_color}</span>
       }
       {people.eye_color &&
        <span><label>Eye color:</label> {people.eye_color}</span>
       }
       {people.birth_year &&
        <span><label>Birth year:</label> {people.birth_year}</span>
       }
       {people.gender &&
        <span><label>Gender:</label> {people.gender}</span>
       }
     </div>
     <button onClick={router.back} className={styles.navigation}>Go back</button>
    </div>
  )
}
export default PeopleIdPage

export async function getServerSideProps({query: {id}}) {
  const people = await StarWarsAPI.getPeople(id);
  return {props: { people }}
}