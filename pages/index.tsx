// 'use client'
import Image from 'next/image'
import Layout from './components/Layout'
import Hero from './components/Home/Hero'
import RoomDetails from './components/Home/RoomDetails'

export default function Home() {
  return (
    <Layout>
      <Hero />
      <RoomDetails />
      <div className="h-screen">
        1
      </div>
      </Layout>
  )
}
