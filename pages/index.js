import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'
import Login from '../components/login'
import { Background_Image } from '../styles'

const HomeCont = styled.div`
`

export default function Home() {
  return (
    <div>
      <Head>
        <title>ATLAS | Login</title>
        <meta name="description" content="Developed by FORENSIC ALPHA" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeCont className='col-lg-12 col-md-12 col-sm-12'>
          <Login />
      </HomeCont>
    </div>
  )
}
