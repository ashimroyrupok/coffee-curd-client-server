import { useLoaderData } from 'react-router-dom'
import './App.css'
import Coffees from './components/Coffees'
import { useState } from 'react'

function App() {

  
  const Allcoffees = useLoaderData()
  const [coffees,setcoffees] =useState(Allcoffees)



  return (
    <>
      
      <h1 className='text-2xl text-purple-600 font-bold'> Coffee CURD {coffees.length} </h1>

      <div className='grid grid-cols-3 gap-4'>
        {
          coffees.map(coffee =>  <Coffees key={coffee._id} coffees={coffees} setcoffees={setcoffees} coffee={coffee}> </Coffees> )
        }
      </div>
     
    
    </>
  )
}

export default App
