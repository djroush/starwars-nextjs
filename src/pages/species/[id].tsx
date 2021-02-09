import {useRouter} from 'next/router'

import { Species } from '../../types/starwars'
import StarWarsAPI from '../../middleware/starwars'

import styles from '../../styles/EntityId.module.css'

type SpeciesIdProps = {
  species: Species
}

function SpeciesIdPage(props: SpeciesIdProps) {
  const router = useRouter()
  const { species } = props

  return (
    <div className={styles.container}>
      <div className={styles.content}>
       {species.name &&
        <span><label>Name:</label> {species.name}</span>
       }
       {species.classification && 
        <span><label>Classification:</label> {species.classification}</span>
       }
       {species.designation && 
        <span><label>Designation:</label> {species.designation}</span>
       }
       {species.average_height && 
        <span><label>Average Height:</label> {species.average_height}</span>
       }
       {species.hair_colors &&
        <span><label>Hair colors:</label> {species.hair_colors}</span>
       }
       {species.skin_colors &&
        <span><label>Skin colors:</label> {species.skin_colors}</span>
       }
       {species.eye_colors &&
        <span><label>Eye colors:</label> {species.eye_colors}</span>
       }
       {species.average_lifespan &&
        <span><label>Average Lifespan:</label> {species.average_lifespan}</span>
       }
       {species.language &&
        <span><label>Language:</label> {species.language}</span>
       }
     </div>
     <button onClick={router.back} className={styles.navigation}>Go back</button>
    </div>
  )
}
export default SpeciesIdPage

export async function getServerSideProps({query: {id}}) {
  const species = await StarWarsAPI.getSpecies(id);
  return {props: { species }}
}