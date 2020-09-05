import React, { useState } from 'react'
import CardView from './CardView'
import firebase from '../utils/firebase'
const db = firebase.firestore()

function Home() {
  const fetchData = () => {
    db.collection('device')
      .add({
        name: 'Pondok 01',
        location: {
          long: 12.33,
          lat: 99.9,
        },
        sensorValue: {
          ph: 7,
          tds: 30,
          temperature: 23,
          flow: 300,
          turbidity: 2,
        },
        createdAt: Date.now(),
      })
      .then((res) => console.log(res.id))
      .catch((error) => console.error(error))
  }

  const readData = () => {
    db.collection('device')
      .orderBy('createdAt', 'desc')
      .get()
      .then((res: any) => {
        setData(res[0])
      })
  }

  const [data, setData] = useState('')

  return (
    <div>
      <h1>SIAB Dashboard</h1>
      <button onClick={fetchData}>Add Data</button>
      <CardView title="Data" desc={data} />
      <CardView title="Water Supply Working" desc="200" />
      <CardView title="Total Liter Dispensered" desc="2000" />
      <CardView title="Total People Served" desc="2000" />
      <CardView title="Dispensered Working" desc="97%" />
      <CardView title="Dispensers in Service" desc="2000" />
    </div>
  )
}

export default Home
