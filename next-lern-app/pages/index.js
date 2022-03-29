import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import TabsHome from './tabs'
import { useRouter } from 'next/router'
export default function Home() {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault()
    router.push('/tabs')
  }
  return (
   <div>
     <button onClick={(e)=>handleClick(e)} >Tabs</button>
   </div>
  )
}
