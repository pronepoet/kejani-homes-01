import Image from 'next/image'
import { HomeListing } from './components/HomeListing'
import { Header } from './components/Header'

  // const data = await getData() use ndani ya return
 
export default function Home() {

  return (
    <>
    <div className='house-container'>
    <Header/>
 
  
      <HomeListing/>
      </div>
    </>
   
  )
}
