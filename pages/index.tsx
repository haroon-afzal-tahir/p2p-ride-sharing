import Head from 'next/head'
import { Navbar, Map, LocationSelector, Confirm } from '../components'

const style = {
  wrapper: `h-screen w-screen flex flex-col`,
  main: `h-full w-screen flex-1 z-10`,
  mapContainer: `flex-1 w-full h-full`,
  rideRequestContainer: `h-full w-[400px] ml-[1rem] py-[3rem] absolute top-0 left-0 flex flex-col justify-end z-20`,
  rideRequest: `h-full max-h-[700px] bg-white rounded-lg flex flex-col overflow-auto`,
}

export default function Home() {
  return (
    <>
      <Head>
        <title>P2P Ride Sharing</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={style.wrapper}>
        <Navbar />
        <div className={style.main}>
          <Map />
        </div>
        <div className={style.rideRequestContainer}>
          <div className={style.rideRequest}>
            <LocationSelector />
            <Confirm />
          </div>
        </div>
      </div>
    </>
  )
}
