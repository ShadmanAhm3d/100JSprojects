import { useState } from 'react'
import New from "./New"


function App() {

  const [ob,setOb]= useState({
    age:12
  })

  return (
    <>
      <New koiNaam="Shadman" koiObject={ob} />
    </>
  )
}

export default App
