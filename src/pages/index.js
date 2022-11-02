import Link from 'next/link'
import Image from 'next/image'
// import styles from '../../styles/globals.css'

export default function Home() {
  return (
    <>
      <h1 className='text-2xl text-red-600'>TOP PAGE</h1>
      <Link href={{ pathname: `items`}}>
        <a>Item</a>
      </Link>
    </>
  )
}
