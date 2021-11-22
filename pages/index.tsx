import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>goeun park 💌</title>
        <meta name="description" content="website of goeun park, writer & developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <p>🤍 🖤 🤍 🖤 🤍 🖤 🤍 🖤 🤍</p>
        <p>🏠 goeun.co is under construction</p>
        <p>🖤 🤍 🖤 🤍 🖤 🤍 🖤 🤍 🖤</p>
      </main>

     
    </div>
  )
}

export default Home
