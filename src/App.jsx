import { useLoaderData } from "react-router-dom";
import './App.css'
import CoffeeCard from "./Components/CoffeeCard/CoffeeCard";


function App() {
  const coffees = useLoaderData();

  return (
    <div>

      <h1 className='text-3xl text-purple-700' >Vite + React Total Coffee : {coffees.length} </h1>
      <div>
        {
          coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee} ></CoffeeCard>)
        }
      </div>

    </div>
  )
}

export default App
