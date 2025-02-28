import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import * as petService from './services/petService'
import PetList from './components/PetList/PetList'
import PetDetail from './components/PetDetail/PetDetail'
function App() {
  const [pets, setPets] = useState([]);
  const [selected, setSelected] = useState(null);

   // Create a new useEffect
   useEffect(() => {
    const fetchPets = async () => {
      try {
        const fetchedPets = await petService.index();
        // Don't forget to pass the error object to the new Error
        if (fetchedPets.err) {
          throw new Error(fetchedPets.err);
        }
        setPets(fetchedPets);
      } catch (err) {
        // Log the error object
        console.log(err);
      }
    };
    fetchPets();
  }, []);

  const handleSelect = (pet) => {
    setSelected(pet)
  }

  return (
    <>
      <PetList pets={pets} handleSelect={handleSelect} />
      <PetDetail selected={selected} />
    </>
  );
};

export default App
