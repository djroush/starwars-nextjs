import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Star Wars Info</title>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Welcome to this Star Wars page</h1>      

        <p className={styles.description}>
          Click the links above to learn more!
        </p>
      </main>
    </div>
  )
}
