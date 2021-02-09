import React from 'react';
import Link from 'next/link'
import styles from '../styles/Entity.module.css'

import { Entity } from '../types/starwars'

type EntityListProps = {
  entities: Entity[]
}

const EntityList = (props: EntityListProps) => {
  const {entities} = props

  const BASE_REF: string = 'http://swapi.dev/api'

  const getHref = function(url: string): string {
    const href = url.substring(BASE_REF.length).slice(0,-1)
    return href
  }

  const entityList = !entities ? '' : 
  entities.map((entity: Entity, index: number) => (
    <div key={index} className={styles.grid}>
      <Link href={getHref(entity.url)}>
        <a>{entity.name}</a>
      </Link>
    </div>
  ))

  return (
    <div className={styles.content}>
      {entityList}
    </div>
  )
}

export default EntityList
