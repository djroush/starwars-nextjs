import {useRouter} from 'next/router'

import { Planet } from '../../types/starwars'
import StarWarsAPI from '../../middleware/starwars'

import styles from '../../styles/EntityId.module.css'

type PlanetsIdProps = {
  planet: Planet
}

function PlanetsIdPage(props: PlanetsIdProps) {
  const router = useRouter()
  const { planet } = props
   
  return (
    <div className={styles.container}>
      <div className={styles.content}>
       {planet.name &&
        <span><label>Name:</label> {planet.name}</span>
       }
       {planet.rotation_period && 
        <span><label>Rotation_Period:</label> {planet.rotation_period}</span>
       }
       {planet.obrital_period && 
        <span><label>Orbital Period:</label> {planet.obrital_period}</span>
       }
       {planet.diameter &&
        <span><label>Diameter:</label> {planet.diameter}</span>
       }
       {planet.climate &&
        <span><label>Climate:</label> {planet.climate}</span>
       }
       {planet.gravity &&
        <span><label>Gravity:</label> {planet.gravity}</span>
       }
       {planet.terrain &&
        <span><label>Terrain:</label> {planet.terrain}</span>
       }
       {planet.surface_water &&
        <span><label>Surface water:</label> {planet.surface_water}</span>
       }
       {planet.population &&
        <span><label>Population:</label> {planet.population}</span>
       }
     </div>
     <button onClick={router.back} className={styles.navigation}>Go back</button>
    </div>
  )
}
export default PlanetsIdPage

export async function getServerSideProps({query: {id}}) {
  const planet = await StarWarsAPI.getPlanet(id);
  return {props: { planet }}
}